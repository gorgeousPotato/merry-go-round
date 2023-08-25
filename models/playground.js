const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    userName: String,
    userAvatar: String,
  },
  {
    timestamps: true,
  }
);

const playgroundSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    minAge: {
      type: Number,
      required: true,
      min: 0,
    },
    slides: {
      type: Boolean,
      required: true,
    },
    swings: {
      type: Boolean,
      required: true,
    },
    sandbox: {
      type: Boolean,
      required: true,
    },
    spraypark: {
      type: Boolean,
      required: true,
    },
    lat: String,
    lon: String,
    reviews: [reviewSchema],
    // photos: [photoSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Playground", playgroundSchema);
