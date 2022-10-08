const express = require("express");
const app = express();
const { Dynosaur } = require("../models");

app.get("/", async (req, res) => {
  try {
    const dynosaurs = await Dynosaur.findAll();
    res.json(dynosaurs);
  } catch (e) {
    res.status(500).json("internal server error");
  }
});

module.exports = app;
