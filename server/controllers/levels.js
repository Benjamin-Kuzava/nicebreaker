import Level from "../models/level.js";
import db from "../db/connection.js";

db.on(
  "error",
  console.error.bind(console, "(controllers) MongoDB connection error:")
);

const getLevels = async (_, res) => {
  try {
    const levels = await Level.find();
    res.json(levels);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getLevel = async (req, res) => {
  try {
    const { id } = req.params;
    const level = await Level.findById(id);
    if (level) return res.json(level);
    res.status(404).json({ message: "Listing not found!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default { getLevels, getLevel };
