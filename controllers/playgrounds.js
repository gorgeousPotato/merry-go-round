const Playground = require('../models/playground');

module.exports = {
  index,
}

function index(req,res) {
  // const playgrounds = await Playground.find({});
  // res.render('playgrounds/index', {title: 'All Playgrounds', playgrounds});
  res.render('playgrounds/index', {
    title: 'All Playgrounds',
  });
}