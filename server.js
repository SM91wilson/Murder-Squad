const express = require("express");

const port = process.env.port || 3030;

let app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

var db = require("./models")
require("./routes/apiroutes.js")(app);
require("./routes/htmlroute.js")(app);

db.sequelize.sync({force: true}).then(function() {
app.listen(port, function() {
    console.log("listening on", port);
  });
});