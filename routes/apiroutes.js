const db = require("../models");

module.exports = function(app) {
  app.get("/api/Guests", function(req, res) {
    db.Guests.findAll({}).then(function(dbGuests) {
      res.json(dbGuests);
    });
  });

  app.get("/api/Story", function(req, res) {
    db.Story.findAll({}).then(function(dbStory) {
      res.json(dbStory);
    });
  });

  app.get("/api/Clues", function(req, res) {
    db.Clues.findAll({}).then(function(dbClues) {
      res.json(dbClues);
    });
  });

  app.get("/api/Narrative", function(req, res) {
    db.Narrative.findAll({}).then(function(dbNarrative) {
      res.json(dbNarrative);
    });
  });
};
