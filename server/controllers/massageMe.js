const Message = require("../models/messageModel");
const { successResponse } = require("../service/responds");

const handelMessage = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      throw Error("All fields are required");
    }

    await Message.create({ name, email, subject, message });

    return successResponse(res, {
      statusCode: 200,
      message:
        "Message sent successfully. Places waite for my replay and I’ll get back as quickly as possible",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = handelMessage;
