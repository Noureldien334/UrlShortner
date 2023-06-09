import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
  },

  password: {
    type: String,
    required: [true, "Password is required"],
  },

  firstName: {
    type: String,
    required: [true, "First name is Required"],
  },

  lastName: {
    type: String,
    required: [true, "Last Name is  Required"],
  },
});

export const userModel = mongoose.model("users", userSchema);
