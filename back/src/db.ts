import mongoose, { ConnectOptions } from "mongoose";

const uri = "mongodb://0.0.0.0:27017/emichallenge";

/*
 * Draft File
 * Would be ideal to have a db with the base fixtures
 */

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions;

mongoose.connect(uri, options);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});
