const MongoClient = require("mongodb").MongoClient;
const newRouter = require("./router.js");

const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

MongoClient.connect("mongodb://localhost:27017")
  .then((client) => {
    const db = client.db("clockingSystem");
    const staffCollection = db.collection("staff");
    const staffRouter = newRouter(staffCollection);

    app.use("/api/staff", staffRouter);
  })
  .catch(console.err);

app.listen(4000, function () {
  console.log(`Listening on this port: ${this.address().port}`);
});
