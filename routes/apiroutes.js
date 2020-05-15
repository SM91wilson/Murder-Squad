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

  app.get("/api/Clues/:id", function(req, res) {
    db.Clues.findOne({
      where: {
        guestsid: req.params.id,
      },
    }).then(function(dbClues) {
      res.json(dbClues);
    });
  });

  app.get("/api/Narrative/:id", function(req, res) {
    db.Narrative.findOne({
      where: {
        storyid: req.params.id,
      },
    }).then(function(dbNarrative) {
      res.json(dbNarrative);
    });
  });

  app.post("/api/Notes", function(req, res) {
    db.Notes.create(req.body).then(function(dbNotes) {
      res.json(dbNotes);
    });
  });

  app.delete("/api/Notes/:id", function(req, res) {
    db.Notes.destroy({
      where: {
        id: res.params.id,
      },
    }).then(function(dbNotes) {
      res.json(dbNotes);
    });
  });
};
