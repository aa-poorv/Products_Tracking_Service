const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectDB = require("./config/database");
const shopRoute = require("./routes/shop");
const productRoute = require("./routes/product");
connectDB();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/shop", shopRoute);
app.use("/product", productRoute);

app.listen(3000, () => {
  console.log("Listening at port 3000");
});
