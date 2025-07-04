const mongoose = require("mongoose");
const Comments = require("./comments");
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  url: String,
  filename: String,
});

ImageSchema.virtual("thumbnail").get(function () {
  return this.url.replace("/upload", "/upload/w_200");
});
const PostSchema = new Schema({
  title: String,
  images: [ImageSchema],
  date: String,
  post: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comments",
    },
  ],
});

PostSchema.post("findOneAndDelete", async function (doc) {
  if (doc) {
    await Comments.deleteMany({
      _id: {
        $in: doc.comments,
      },
    });
  }
});

module.exports = mongoose.model("Posts", PostSchema);
