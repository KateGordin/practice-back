const express = require("express");
const { Router } = require("express");

const Space = require("../models/").space;
const Story = require("../models").story;
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const getAllSpaces = await Space.findAll({ raw: true });
    console.log("res", res);
    res.send(getAllSpaces);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const getSpace = await Space.findByPk(id, {
      //sorting "new first"
      include: { model: Story, order: [Story, "createdAt", "ASC"] },
    });
    res.send(getSpace);
    // console.log("!!!!!!getSpace", getSpace);
  } catch (err) {
    // next(err.message);
    console.log(err);
  }
});

//create a new space
router.post("/", async (req, res, next) => {
  try {
    const title = req.body.title;
    if (!title || title === " ") {
      res.status(400).send("Please provide a title");
    } else {
      const newSpace = await Space.create(req.body);
      res.json(newSpace);
    }
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
