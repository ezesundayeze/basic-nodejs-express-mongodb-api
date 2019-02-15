const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    comment: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const articleSchema = new Schema(
  {
    body: {
      type: String,
      required: true
    },
    title: {
      type: String,
      min: 5,
      max: 100,
      required: true
    },
    image: {
      type: String
    },
    category: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    comment: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

let Blogs = mongoose.model("MyBlog", articleSchema);

module.exports = Blogs;
