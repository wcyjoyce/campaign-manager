const mongoose = require("mongoose");
const { Schema } = mongoose; // const Schema = mongoose.Schema;

const recipientSchema = require("./recipient.js");

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [recipientSchema], // array consisting of a subdocument collection (i.e. recipientSchema)
  dateSent: Date,
  lastResponded: Date,
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: "User" } // belongs_to :user ("_" is best practice to indicate a reference field)
});

// loads a schema called "surveys"
mongoose.model("surveys", surveySchema);
