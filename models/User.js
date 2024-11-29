// models/User.js
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // Ensure usernames are unique
    trim: true,   // Removes extra spaces
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/\S+@\S+\.\S+/, "Please use a valid email address"], // Email validation
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // Minimum length for password
  },
  role: {
    type: String,
    enum: ["user", "admin"], // User roles for authorization
    default: "user",
  },
  bio: {
    type: String, // Optional bio for the user
    maxlength: 500,
  },
  joinedAt: {
    type: Date,
    default: Date.now, // Automatically set to the current date
  },
  Videos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video", // Reference to the Video model
    },
  ],
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
