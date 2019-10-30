const express = require("express");
const router = require("./data/router.js");
const server = express();

server.use(express.json());


server.use("/api/posts", router);

server.listen(7000, () => {
  console.log("Listening on port 7000");
});