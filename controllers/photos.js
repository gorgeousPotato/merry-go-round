const Playground = require("../models/playground");
const Photo = require("../models/photo");
const fs = require("fs");
const path = require("path");

module.exports = {
  index,
  create,
};

async function index(req, res) {
  const playground =  await Playground.findById(req.params.id).populate('photos');
  const photos = await Photo.find({playground: req.params.id});
  res.render("photos/index", {
    title: "Photos",
    playground,
    photos,
  });
}

async function create(req, res) {
  const playground = Playground.findById(req.params.id);
  req.body.img = {
    data: fs.readFileSync(path.join("uploads/" + req.file.filename)),
  };
  req.body.playground = req.params.id;
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;
  try {
    await Photo.create(req.body);
  } catch (err) {
    console.log('err');
  }
  res.redirect(`/playgrounds/${req.params.id}/photos`);
}
