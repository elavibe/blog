const Comment = require("../Models/comments");
const Post = require("../Models/posts");

module.exports.createComment = async (req, res) => {
  const post = await Post.findById(req.params.id);
  const comment = new Comment(req.body.comment);
  comment.author = req.user._id;
  post.comments.push(comment);
  await comment.save();
  await post.save();
  req.flash("success", "Created new comment!");
  res.redirect(`/posts/${post._id}`);
};

module.exports.deleteComment = async (req, res) => {
  const { id, commentsId } = req.params;
  await Post.findByIdAndUpdate(id, { $pull: { comments: commentsId } });
  await Comment.findByIdAndDelete(commentsId);
  req.flash("success", "Successfully deleted comment!");
  res.redirect(`/posts/${id}`);
};
