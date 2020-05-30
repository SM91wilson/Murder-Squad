const express = require("express");
const compression = require("compression");

const port = process.env.PORT || 8080;

let app = express();

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

var db = require("./models")
require("./routes/apiroutes.js")(app);
require("./routes/htmlroute.js")(app);

db.sequelize.sync({}).then(function() {
app.listen(port, function() {
    console.log("listening on", port);
  });
});