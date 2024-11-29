// controllers/userController.js
const Video = require("../models/Video");

const getUserVideos = async (req, res) => {
  try {
    const { userId } = req.params;

    // Find videos uploaded by the user
    const videos = await Video.find({ uploadedBy: userId }).populate("uploadedBy", "username");

    if (!videos.length) {
      return res.status(404).json({ message: "No videos found for this user." });
    }

    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

const getUserProfile = async (req, res) => {
    try {
      const { userId } = req.params;
  
      const user = await User.findById(userId).select("username email joinedAt");
      if (!user) return res.status(404).json({ message: "User not found" });
  
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  };
  
  module.exports = {
    getUserVideos,
    getUserProfile,
  };