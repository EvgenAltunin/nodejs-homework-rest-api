const app = require("./app");
require("dotenv").config();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const urlDb = process.env.DB_HOST;



mongoose
  .connect(urlDb)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Database connection successful");
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
