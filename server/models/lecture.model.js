import mongoose from "mongoose";

const lectureSchema = new mongoose.Schema({
  lectureTitle: {
    type: String,
    required: true,
  },
  videoUrl: { type: String, default: "" },
  publicId: { type: String },
  isPreviewFree: { type: Boolean },
},{timestamps:true});

export const Lecture = mongoose.model("Lecture", lectureSchema);
