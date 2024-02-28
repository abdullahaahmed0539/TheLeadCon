const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/email-service");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/email", userRouter);


module.exports = app;
