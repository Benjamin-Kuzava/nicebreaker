import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Level = new Schema(
  {
    levelName: { type: String, required: true },
    difficulty: { type: String, required: true },
    height: { type: Number, required: true },
    width: { type: Number, required: true },
    levelData: { type: String, required: true },
    author: { type: String, required: true },
  },
  { timestamps: true }
);

// Export schema
export default mongoose.model("levels", Level);
