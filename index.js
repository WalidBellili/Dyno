require("dotenv").config();
const express = require("express");
const app = express();
const dynosaursRoute = require("./routes/Dynosaurs");

app.use(express.json());

require("./models/index");

app.use("/dynosaurs", dynosaursRoute);

app.listen(process.env.PORT, () => {
  console.log(`server started ${process.env.PORT}`);
});
