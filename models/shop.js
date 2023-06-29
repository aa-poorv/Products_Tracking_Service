const mongoose = require("mongoose");
const { Schema } = mongoose;
const Product = require("./product");

const shopSchema = new Schema({
  name: String,
  city: String,
  shopemail: String,
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
});

module.exports = mongoose.model("Shop", shopSchema);
