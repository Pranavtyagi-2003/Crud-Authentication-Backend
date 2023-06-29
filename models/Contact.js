import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
  },
  phone: {
    type: String,
    required: [true, "Please enter your phone"],
  },
  address: {
    type: String,
    required: [true, "Please enter your address"],
  }
});

export const Contact = mongoose.model("Contact",schema)
