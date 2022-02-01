const express = require("express");
const ObjectID = require("mongodb").ObjectID;

const newRouter = function (collection) {
  const router = express.Router();

  const errorCatcher = function (inputError) {
    console.error(inputError);
    res.status(500);
    res.json({ status: 500, error: inputError });
  };

  router.get("/", (req, res) => {
    collection
      .find()
      .toArray()
      .then((docs) => res.json(docs))
      .catch((err) => errorCatcher(err));
  });

  router.post("/newData", (req, res) => {
    const newData = req.body;
    collection
      .insertOne({ name: "Frodo", clockedIn: false, date: [] })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => errorCatcher(err));
  });

  router.put("/:id", (req, res) => {
    const itemId = req.params.id;
    const updatedItem = req.body;

    collection
      .findOneAndUpdate({ _id: ObjectID(itemId) }, { $set: updatedItem })
      .then((result) => {
        res.json(result.value);
      })
      .catch((err) => errorCatcher(err));
  });

  return router;
};

module.exports = newRouter;
