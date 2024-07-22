// npm init
// npm i express
// npm install -g npm@10.8.1  // update
// npm i -D nodemon // with nodemon, now you don't have to reset powershell again and again, it will listen server.js

const path = require("path");
const express = require("express");
require("dotenv").config();

const cors = require("cors");

// const port = 5000;
const port = process.env.PORT || 5000;
// npm run dev

const connectDB = require("./config/db.js");
connectDB();

const app = express();

// Static Folder
app.use(express.static(path.join(__dirname, "public")));

// Body parser middleware // it used to be in npm install bodyparser, in express v5 it included
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// cors middleware
app.use(
  cors({
    origin: ["http://localhost:5000", "http://localhost:3000"],
    credentials: true,
  })
);

// request and callback
app.get("/", (req, res) => {
  //   res.send("Hello World"); // text/html
  // res.send({ message: "Hello World" }); // application/json; charset=utf-8
  res.json({ message: "Hello World" }); // same
});

const ideasRouter = require("./routes/ideas");
app.use("/api/ideas", ideasRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
