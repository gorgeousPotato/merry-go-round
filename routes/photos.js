const express = require("express");
const router = express.Router();
const photosCtrl = require("../controllers/photos");
const ensureLoggedIn = require("../config/ensureLoggedIn");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});
const upload = multer({ storage: storage });

//GET /playgrounds/:id/photos
router.get("/playgrounds/:id/photos", photosCtrl.index);

//POST /playgrounds/:id/photos
router.post(
  "/playgrounds/:id/photos",
  upload.single("image"),
  photosCtrl.create
);

module.exports = router;
