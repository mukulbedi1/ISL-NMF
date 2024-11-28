// routes/videoRoutes.js
const express = require("express");
const router = express.Router();
const videoController = require("../controllers/videoController");
const { uploadMiddleware } = require("../controllers/videoController");

// Route to upload a video
router.post("/upload", uploadMiddleware, videoController.uploadVideo);

// Route to get videos by expression
router.get("/expressions/:expression", videoController.getVideosByExpression);

// Other routes (e.g., get all videos, delete video) can remain unchanged
router.get("/", videoController.getAllVideos);
router.delete("/:id", videoController.deleteVideo);

module.exports = router;
