const mongoose = require("mongoose");
const { Schema } = mongoose; // const Schema = mongoose.Schema;

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [String], // array consisting a list of strings // embed a subdocument collection
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 }
});

// loads a schema called "surveys"
mongoose.model("surveys", surveySchema);
