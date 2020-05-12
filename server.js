const express = require("express");

const port = process.env.port || 3030;

let app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/api-routes.js")(app);

app.listen(port, function() {
    console.log("listening on", port);
  });