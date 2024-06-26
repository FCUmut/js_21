// npm init
// npm i express
// npm install -g npm@10.8.1  // update

const express = require("express");
const port = 5000;

const app = express();

const ideas = [
  {
    id: 1,
    text: "Positive NewsLetter, a newsletter that only shares positive, uplifting news",
    tag: "Technology",
    username: "TonyStart",
    date: "2024-06-26",
  },
];

// request and callback
app.get("/", (req, res) => {
  //   res.send("Hello World"); // text/html
  // res.send({ message: "Hello World" }); // application/json; charset=utf-8
  res.json({ message: "Hello World" }); // same
});

app.get("/api/ideas", (req, res) => {
  res.json({ success: true, data: ideas });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
