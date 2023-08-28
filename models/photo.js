const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const photoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      default: "Photo",
    },
    img: {
      data: Buffer,
      contentType: String,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    userName: String,
    userAvatar: String,
    playground: {
      type: Schema.Types.ObjectId,
      ref: 'Playground',
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Photo", photoSchema)