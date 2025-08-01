const { PostSchema, commentsSchema } = require("./schemas");
const ExpressError = require("./utils/ExpressError");
const Post = require("./Models/posts");
const Comment = require("./Models/comments");

module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.returnTo = req.originalUrl;
    req.flash("error", "You must be signed in first!");
    return res.redirect("/login");
  }
  next();
};

module.exports.validatePost = (req, res, next) => {
  const { error } = PostSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};

module.exports.isAuthor = async (req, res, next) => {
  const { id } = req.params;
  const post = await Post.findById(id);
  if (!post.author.equals(req.user._id)) {
    req.flash("error", "You do not have permission to do that!");
    return res.redirect(`/posts/${id}`);
  }

  next();
};

module.exports.isCommentAuthor = async (req, res, next) => {
  const { id, commentsId } = req.params;
  const comment = await Comment.findById(commentsId);
  if (!comment.author.equals(req.user._id)) {
    req.flash("error", "You do not have permission to do that!");
    return res.redirect(`/posts/${id}`);
  }

  next();
};

module.exports.validateReview = (req, res, next) => {
  const { error } = commentsSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};
