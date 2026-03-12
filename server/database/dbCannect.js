const mongoose = require("mongoose");
const Message = require("../models/messageModel");

const db_url = process.env.DB || "mongodb+srv://ranakhan:YlElDXmsLlgh7W6y@cluster0.ekabawq.mongodb.net/message"


const cannectDb = async () => {
try {
    await mongoose.connect(db_url);
    console.log("info", "Database connected successfully");
  } catch (err) {
    console.log("Database connection error:", err);
  }

}

module.exports = cannectDb;
