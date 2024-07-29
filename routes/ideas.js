const express = require("express");
const router = express.Router();

const Idea = require("../models/Idea.js");

// const ideas = [
//   {
//     id: 1,
//     text: "Positive NewsLetter, a newsletter that only shares positive, uplifting news",
//     tag: "Technology",
//     username: "TonyStart",
//     date: "2024-06-26",
//   },
// ];

// Get all ideas
router.get("/", async (req, res) => {
  // since we will connect it to server.js, we don't need to put /api etc.
  // router.get("/api/ideas", (req, res) => {
  //res.json({ success: true, data: ideas });

  try {
    const ideas = await Idea.find();
    res.json({ success: true, data: ideas });
  } catch (error) {
    res.status(500).json({ success: false, error: "Something went wrong." });
  }
});

// Get single idea
// ':' to get id as number
// router.get("/:id", (req, res) => {
//   // "/api/ideas/:id"
//   const idea = ideas.find((idea) => idea.id === +req.params.id); // + to parse int id

//   if (!idea) {
//     res.status(404).json({ success: false, error: "Resource not found" }); // not found
//   }
//   res.json({ success: true, data: idea });
//   // res.json({ success: true, data: req.params.id });
// });
router.get("/:id", async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);
    res.json({ success: true, data: idea });
  } catch (error) {
    res.status(500).json({ success: false, error: "Something went wrong." });
  }
});

// Add an idea
// dont forget to add 'async'
router.post("/", async (req, res) => {
  // const idea = {
  //   id: ideas.length + 1,
  //   text: req.body.text,
  //   tag: req.body.tag,
  //   username: req.body.username,
  //   date: new Date().toISOString().slice(0, 10),
  // };

  const idea = new Idea({
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
  });

  console.log(idea);

  // ideas.push(idea);

  //res.json({ success: true, data: idea });

  // res.send("Post success");
  // res.send(req.body.text);

  try {
    const savedIdea = await idea.save();
    res.json({ success: true, data: savedIdea });
  } catch (error) {
    res.status(500).json({ success: false, error: "Something went wrong." });
  }
});

// Update idea
router.put("/:id", async (req, res) => {
  // const idea = ideas.find((idea) => idea.id === +req.params.id);

  // if (!idea) {
  //   return res
  //     .status(404)
  //     .json({ success: false, error: "Resource not found" });
  // }

  // idea.text = req.body.text || idea.text;
  // idea.tag = req.body.tag || idea.tag;

  // res.json({ success: true, data: idea });
  try {
    const idea = await Idea.findById(req.params.id);

    // Match the usernames
    if (idea.username === req.body.username) {
      const updatedIdea = await Idea.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            text: req.body.text,
            tag: req.body.tag,
          },
        },
        {
          new: true,
        }
      );

      return res.json({ success: true, data: updatedIdea });
    }

    // Usernames do not match
    res.status(403).json({
      success: false,
      error: "You are not authorized to update this resource.",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: "Something went wrong." });
  }
});

// Delete idea
router.delete("/:id", async (req, res) => {
  // const idea = ideas.find((idea) => idea.id === +req.params.id);

  // if (!idea) {
  //   return res
  //     .status(404)
  //     .json({ success: false, error: "Something went wrong." });
  // }

  // const index = ideas.indexOf(idea);
  // ideas.splice(index, 1);

  // res.json({ success: true, data: {} });
  try {
    const idea = await Idea.findById(req.params.id);

    // Match the usernames
    if (idea.username === req.body.username) {
      await Idea.findByIdAndDelete(req.params.id);
      return res.json({ success: true, data: {} });
    }

    // Usernames do not match
    res.status(403).json({
      success: false,
      error: "You are not authorized to delete this resource.",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: "Something went wrong." });
  }
});

module.exports = router;
