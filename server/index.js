const express = require("express");
const mongoose = require("mongoose");
const { DB_URI } = require("./config");
const SampleDB = require("./sample-db");

const productRoutes = require("./route/products");
const path = require("path");

mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    if (process.env.NODE_ENV !== "production") {
      const sampleDb = new SampleDB();
      // sampleDb.initDb();
    }
  });

const app = express();

app.use("/api/v1/products", productRoutes);

if (process.env.NODE_ENV === "production") {
  const appPath = path.join(__dirname, "..", "dist", "reservation-app");
  app.use(express.static(appPath));
  app.get("*", function (req, res) {
    res.sendFile(path.resolve(appPath, "index.html"));
  });
}

const port = process.env.port || "3001";

app.listen(port, function () {
  console.log("I am running!");
});

// mongodb+srv://test:<password>@cluster0.y4vplzr.mongodb.net/?retryWrites=true&w=majority
