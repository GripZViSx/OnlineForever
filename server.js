const express = require("express");
const server = express();

server.all("/", (req, res) => {
  res.send("<meta http-equiv="refresh" content="0; URL=https://itzsidhan.gitbook.io/itzsidhan"/>");
});

function keepAlive() {
  server.listen(3000, () => {
    console.log("Server is Ready!");
  });
}

module.exports = keepAlive;
