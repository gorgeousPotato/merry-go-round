const Playground = require("../models/playground");
const fs = require("fs");
const path = require("path");

module.exports = {
  index,
  create,
};

async function index(req, res) {
  const playground = await Playground.findById(req.params.id);
  res.render("photos/index", {
    title: "Photos",
    playground,
  });
}

async function create(req, res) {
  req.body.img = {
    data: fs.readFileSync(path.join("uploads/" + req.file.filename)),
  };
  const playground = await Playground.findById(req.params.id);
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;
  playground.photos.push(req.body);
  try {
    await playground.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/playgrounds/${playground._id}/photos`);
}
