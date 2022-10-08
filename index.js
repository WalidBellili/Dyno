require("dotenv").config();
const express = require("express");
const app = express();

require("./models/index");

app.listen(process.env.PORT, () => {
  console.log(`server started ${process.env.PORT}`);
});
