const express = require("express");
const mongoose = require("mongoose");
const { DB_URI } = require("./config/dev");

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

const port = process.env.port || "3001";

app.get("/products", (req, res) => {
  res.json({ success: true });
});

app.listen(port, function () {
  console.log("I am running!");
});

// mongodb+srv://test:<password>@cluster0.y4vplzr.mongodb.net/?retryWrites=true&w=majority
