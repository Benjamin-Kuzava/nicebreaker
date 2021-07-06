import mongoose from "mongoose";

let MONGODB_URI = "mongodb://127.0.0.1:27017/icebreakerDB";

// process.env.PROD_MONGODB ||

mongoose
  .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("(db) Successfully connected to MongoDB."))
  .catch((e) => console.error("Connection error", e.message));

export default mongoose.connection;
