const express = require("express");
const router = express.Router();

const ideas = [
  {
    id: 1,
    text: "Positive NewsLetter, a newsletter that only shares positive, uplifting news",
    tag: "Technology",
    username: "TonyStart",
    date: "2024-06-26",
  },
];

// Get all ideas
router.get("/", (req, res) => {
  // since we will connect it to server.js, we don't need to put /api etc.
  // router.get("/api/ideas", (req, res) => {
  res.json({ success: true, data: ideas });
});

// Get single idea
// ':' to get id as number
router.get("/:id", (req, res) => {
  // "/api/ideas/:id"
  const idea = ideas.find((idea) => idea.id === +req.params.id); // + to parse int id

  if (!idea) {
    res.status(404).json({ success: false, error: "Resource not found" }); // not found
  }
  res.json({ success: true, data: idea });
  // res.json({ success: true, data: req.params.id });
});

// Add an idea
router.post("/", (req, res) => {
  const idea = {
    id: ideas.length + 1,
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
    date: new Date().toISOString().slice(0, 10),
  };

  console.log(idea);

  ideas.push(idea);

  res.json({ success: true, data: idea });
  // res.send("Post success");
  // res.send(req.body.text);
});

module.exports = router;
