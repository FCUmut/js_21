// npm init
// npm i express
// npm install -g npm@10.8.1  // update
// npm i -D nodemon // with nodemon, now you don't have to reset powershell again and again, it will listen server.js

const express = require("express");
const port = 5000;

const app = express();

// Body parser middleware // it used to be in npm install bodyparser, in express v5 it included
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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
