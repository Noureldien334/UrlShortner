import mongoose from "mongoose";

const shortLinkSchema = new mongoose.Schema({
  slug: { type: String, immutable: true },

  ios: {
    type: { primary: String, fallback: String },
    required: true,
    _id : false,
  },

  android: {
    type: { primary: String, fallback: String },
    required: true,
    _id : false,
  },

  web: {
    type: {
      primary: String,
      _id : false,  
    },
    required: true,
  },
});

export const shortLinkModel = mongoose.model("shortLinks", shortLinkSchema);
