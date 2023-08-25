const Playground = require("../models/playground");

module.exports = {
  index,
  new: newPlayground,
  create,
  show,
};

async function index(req, res) {
  const playgrounds = await Playground.find({});
  res.render("playgrounds/index", {
    title: "All Playgrounds",
    playgrounds,
  });
}

function newPlayground(req, res) {
  res.render("playgrounds/new", { title: "Add a Playground" });
}

async function create(req, res) {
  req.body.slides = !!req.body.slides;
  req.body.swings = !!req.body.swings;
  req.body.sandbox = !!req.body.sandbox;
  req.body.spraypark = !!req.body.spraypark;
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
  });
}
