const Playground = require("../models/playground");

module.exports = {
  index,
  new: newPlayground,
  create,
  show,
  edit,
  update,
};

async function index(req, res) {
  const playgrounds = await Playground.find({});
  res.render("playgrounds/index", {
    title: "All Playgrounds",
    playgrounds,
    token: process.env.MAPBOX,
  });
}

function newPlayground(req, res) {
  res.render("playgrounds/new", { 
    title: "Add a Playground",
    token: process.env.MAPBOX,
  });
}

async function create(req, res) {
  req.body.slides = !!req.body.slides;
  req.body.swings = !!req.body.swings;
  req.body.sandbox = !!req.body.sandbox;
  req.body.spraypark = !!req.body.spraypark;
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;
  try {
    await Playground.create(req.body);
    res.redirect("/playgrounds");
  } catch (err) {
    console.log(err);
    res.render("playgrounds/new", {
      title: "Add a Playground",
      errorMsg: err.message,
    });
  }
}

async function show(req, res) {
  const playground = await Playground.findById(req.params.id);
  res.render("playgrounds/show", {
    title: "Playground Details",
    playground,
    token: process.env.MAPBOX,
  });
}

async function edit(req,res) {
  const playground = await Playground.findById(req.params.id);
  res.render("playgrounds/edit", {
    title: "Edit Playground",
    token: process.env.MAPBOX,
    playground,
  })
}

async function update(req,res) {
  const updatedPg = req.body;
  updatedPg.slides = !!req.body.slides;
  updatedPg.swings = !!req.body.swings;
  updatedPg.sandbox = !!req.body.sandbox;
  updatedPg.spraypark = !!req.body.spraypark;
  console.log(req.body);
  const playground = await Playground.findById(req.params.id);
  try {
    await playground.updateOne(updatedPg);
    res.redirect(`/playgrounds/${req.params.id}`)
  } catch (err) {
    console.log(err);
    res.render("playgrounds/new", {
      title: "Add a Playground",
      errorMsg: err.message,
    });
  }
}

