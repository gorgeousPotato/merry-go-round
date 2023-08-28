const express = require("express");
const router = express.Router();
const reviewsCtrl = require("../controllers/reviews");
const ensureLoggedIn = require('../config/ensureLoggedIn');

//GET /playgrounds/:id/reviews
router.get("/playgrounds/:id/reviews", reviewsCtrl.index);

//POST /playgrounds/:id/reviews
router.post("/playgrounds/:id/reviews", ensureLoggedIn, reviewsCtrl.create);

//DELETE /reviews/:id
router.delete("/reviews/:id", ensureLoggedIn, reviewsCtrl.delete);

// //GET /reviews/:id/edit
// router.get("/reviews/:id/edit", ensureLoggedIn, reviewsCtrl.edit);

// //PUT /reviews/:id?_method=PUT
// router.put("/reviews/:id", ensureLoggedIn, reviewsCtrl.update)

module.exports = router;
