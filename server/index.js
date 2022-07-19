const express = require("express");
const mongoose = require("mongoose");
const { DB_URI } = require("./config/dev");
const SampleDB = require("./sample-db");

const productRoutes = require("./route/products");

mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    const sampleDb = new SampleDB();
    sampleDb.initDb();
  });

const app = express();

app.use("/api/v1/products", productRoutes);

const port = process.env.port || "3001";

app.listen(port, function () {
  console.log("I am running!");
});

// mongodb+srv://test:<password>@cluster0.y4vplzr.mongodb.net/?retryWrites=true&w=majority
