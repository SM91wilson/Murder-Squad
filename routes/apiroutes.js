const db = require('../models');

module.exports = function(app){

    app.get('/api/Guests', function(req, res){
        db.Guests.findAll({}).then(function(dbGuests){
            res.json(dbGuests);
        });
    });

    app.get('/api/Story', function(req, res){
        db.Story.findAll({}).then(function(dbStory){
            res.json(dbStory);
        });
    });

    app.get('/api/Suspects', function(req, res){
        db.Suspects.findAll({}).then(function(dbSuspects){
            res.json(dbSuspects);
        });
    });

    app.get('/api/Clues', function(req, res){
        db.Clues.findAll({where:
            {id: [1,2,3]}
        }).then(function(dbClues){
            res.json(dbClues);
        });
    });


    app.get('/api/Narrative', function(req, res){
        db.Clues.findAll({where:
            {id: [4,5,6]}
        }).then(function(dbNarrative){
            res.json(dbNarrative);
        });
    });

    app.post('/api/Notes', function(req, res){
        db.Notes.create(req.body).then(function(dbNotes){
            res.json(dbNotes);
        });
    });

    app.delete('/api/Notes/:id', function(req, res){
        db.Notes.destroy({
            where:{
                id: res.params.id
            }
        }).then(function(dbNotes){
            res.json(dbNotes);
        });
    });
};

