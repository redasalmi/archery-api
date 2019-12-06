const express = require("express");
const router = express.Router();
const articles = require("../../data/articles");
const videos = require("../../data/videos");

router.get("/articles", (req, res) => {
  res.json(articles);
});

router.get("/videos", (req, res) => {
  res.json(videos);
});

module.exports = router;
