const express = require("express");

const app = express();

app.listen(2020, () => {
  console.log("Server listening at port 2020");
});

app.get("/", (req, resp) => {
  resp.json("hello");
});
