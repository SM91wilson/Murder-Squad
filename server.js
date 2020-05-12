const express = require("express");

const port = process.env.port || 3030;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(port, function() {
    console.log("listening on", port);
  });