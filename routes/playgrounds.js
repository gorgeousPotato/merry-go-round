const express = require('express');
const router = express.Router();
// const fetch = require('node-fetch');
// const token = process.env.MAPBOX;
const playgroundsCtrl = require("../controllers/playgrounds");

//GET /playgrounds
router.get('/', playgroundsCtrl.index);

module.exports = router;