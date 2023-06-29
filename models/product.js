const { Schema, default: mongoose } = require("mongoose");
const Shop = require("./Shop");

const productSchema = new Schema({
  name: String,
  rate: Number,
  category: String,

  shops: { type: Schema.Types.ObjectId, ref: "Shop" },
});

module.exports = mongoose.model("Product", productSchema);
