const Playground = require("../models/playground");

module.exports = {
  index,
  create,
  delete: deleteReview,
};

async function index(req, res) {
  const playground = await Playground.findById(req.params.id);
  res.render("reviews/index", {
    title: "Reviews",
    playground,
  });
}

async function create(req, res) {
  const playground = await Playground.findById(req.params.id);
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;
  playground.reviews.push(req.body);
  try {
    await playground.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/playgrounds/${playground._id}/reviews`);
}

async function deleteReview(req, res) {
  const playground = await Playground.findOne({
    "reviews._id": req.params.id,
    "reviews.user": req.user._id,
  });
  if (!playground) return res.redirect("/playgrounds");
  playground.reviews.remove(req.params.id);
  await playground.save();
  res.redirect(`/playgrounds/${playground._id}/reviews`);
}
