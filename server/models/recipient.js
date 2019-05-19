const mongoose = require("mongoose");
const { Schema } = mongoose; // const Schema = mongoose.Schema;

const recipientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false }
});

// Exporting the schema as it is a subdocument within "surveys"
module.exports = recipientSchema;
