const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//our data validation from mongoose, defining how we want db to look

const articleSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  title: { type: String, required: true },
  url: { type: String, required: true },
  date: { type: Date, default: Date.now }
}, { _id: false });

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
