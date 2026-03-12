const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minLength: [3, "name must be at least 3 characters long"],
    maxLength: [20, "name is too large"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    match: [
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Please enter a valid email address",
    ],
  },
  subject: {
    type: String,
    required: true,
    trim: true,
    minLength: [5, "subject must be at least 5 characters long"],
    maxLength: [70, "name is too large"],
  },
  message: {
    type: String,
    required: true,
    trim: true,
    minLength: [5, "subject must be at least 5 characters long"],
  }
}, { timestamps: true });

const Message = mongoose.model("Message", messageSchema)

module.exports = Message;