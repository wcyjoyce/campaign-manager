const mongoose = require("mongoose");
const { Schema } = mongoose; // const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: String
});

// loads a schema called "users"
mongoose.model("users", userSchema);
