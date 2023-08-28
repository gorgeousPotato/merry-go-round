const express = require("express");
const router = express.Router();
// const fetch = require('node-fetch');
// const token = process.env.MAPBOX;
const playgroundsCtrl = require("../controllers/playgrounds");
const ensureLoggedIn = require('../config/ensureLoggedIn');

//GET /playgrounds
router.get("/", playgroundsCtrl.index);

//GET /playgrounds/new
router.get("/new", ensureLoggedIn, playgroundsCtrl.new);

// GET /playgrounds/:id
router.get("/:id", playgroundsCtrl.show);

//POST /playgrounds
router.post("/", playgroundsCtrl.create);

//GET /playgrounds/:id/edit
router.get("/:id/edit", ensureLoggedIn, playgroundsCtrl.edit)

//PUT /playgrounds/:id
router.put("/:id", ensureLoggedIn, playgroundsCtrl.update);

module.exports = router;
