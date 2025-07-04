const express = require("express");
const router = express.Router({ mergeParams: true });
const comments = require("../controllers/comments");
const {
  validateReview,
  isLoggedIn,
  isCommentAuthor,
} = require("../middleware");
const Comment = require("../Models/comments");
const Post = require("../Models/posts");

const ExpressError = require("../utils/ExpressError");
const catchAsync = require("../utils/catchAsync");

router.post(
  "/",
  isLoggedIn,
  validateReview,
  catchAsync(comments.createComment)
);

router.delete(
  "/:commentsId",
  isLoggedIn,
  isCommentAuthor,
  catchAsync(comments.deleteComment)
);

module.exports = router;
