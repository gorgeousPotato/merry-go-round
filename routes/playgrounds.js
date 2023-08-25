const express = require("express");
const router = express.Router();
// const fetch = require('node-fetch');
// const token = process.env.MAPBOX;
const playgroundsCtrl = require("../controllers/playgrounds");

//GET /playgrounds
router.get("/", playgroundsCtrl.index);

//GET /playgrounds/new
router.get("/new", playgroundsCtrl.new);

// GET /playgrounds/:id
router.get("/:id", playgroundsCtrl.show);

//POST /playgrounds
router.post("/", playgroundsCtrl.create);

module.exports = router;
