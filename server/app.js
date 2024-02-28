const express = require("express");
const cors = require("cors");
const emailRouter = require("./routes/emails");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/emails", emailRouter);

module.exports = app;
