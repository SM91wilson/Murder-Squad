const path = require('path');

module.exports = function(app){
    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname, "../indexv2.html"))
    });

    app.get('/endgame', function(req, res){
        res.sendFile(path.join(__dirname, "../endgame.html"))
    });
}