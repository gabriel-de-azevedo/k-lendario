const express = require("express");
const app = express();
const port = 3000;

app.get("/", (_, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.post("/clicked", (_, res) => {
  res.sendFile(__dirname + "/components/button.html");
});
