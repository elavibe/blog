const Post = require("../Models/posts");
const { cloudinary } = require("../cloudinary");

module.exports.index = async (req, res) => {
  const posts = await Post.find({});
  res.render("posts/index", { posts });
};

module.exports.renderNewForm = (req, res) => {
  res.render("posts/new");
};

module.exports.createPost = async (req, res, next) => {
  const post = new Post(req.body.post);
  post.images = req.files.map((f) => ({ url: f.path, filename: f.filename }));
  post.author = req.user._id;
  await post.save();
  // console.log(post);
  req.flash("success", "Successfully made a new post!");
  res.redirect(`/posts/${post._id}`);
};

module.exports.showPost = async (req, res) => {
  const post = await Post.findById(req.params.id)
    .populate({
      path: "comments",
      populate: {
        path: "author",
      },
    })
    .populate("author");

  if (!post) {
    req.flash("error", "Cannot find that post!");
    return res.redirect("/posts");
  }
  res.render("posts/show", { post });
};

module.exports.renderEditForm = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) {
    req.flash("error", "Cannot find that post!");
    return res.redirect("/posts");
  }

  res.render("posts/edit", { post });
};

module.exports.updatePost = async (req, res) => {
  const { id } = req.params;

  // Check if req.body.post exists
  if (!req.body.post) {
    req.flash("error", "Invalid post data!");
    return res.redirect(`/posts/${id}/edit`);
  }

  const post = await Post.findByIdAndUpdate(id, { ...req.body.post });

  // Only process images if files were uploaded
  if (req.files && req.files.length > 0) {
    const imgs = req.files.map((f) => ({ url: f.path, filename: f.filename }));
    post.images.push(...imgs);
    await post.save();
  }

  // Handle image deletion
  if (req.body.deleteImages) {
    for (let filename of req.body.deleteImages) {
      await cloudinary.uploader.destroy(filename);
    }
    await post.updateOne({
      $pull: { images: { filename: { $in: req.body.deleteImages } } },
    });
  }

  req.flash("success", "Successfully updated post!");
  res.redirect(`/posts/${post._id}`);
};
module.exports.deletePost = async (req, res) => {
  const { id } = req.params;
  await Post.findByIdAndDelete(id);
  req.flash("success", "Successfully deleted post!");
  res.redirect("/posts");
};
