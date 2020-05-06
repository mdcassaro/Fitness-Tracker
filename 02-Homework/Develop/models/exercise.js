const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExcersiseSchema = new Schema({
  title: String,
  body: String
});

const Excercise = mongoose.model("Exercise", ExcersiseSchema);

module.exports = Excercise;
