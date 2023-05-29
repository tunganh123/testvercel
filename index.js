const express = require("express");
const app = express();

app.get("/product", (req, res) => {
  let data = {
    a: "tunganh",
    b: "Linh",
  };
  res.json(data);
});

app.listen(5000);
