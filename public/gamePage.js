$(document).ready(function() {

  var Guests = [];
  var Clues = [];
  var Narrative = [];
  var Notes = [];

  getGuests();
  getClues();
  getNarrative();
  getNote();

  function getGuests() {
    $.get("/api/Guests", function(data) {
      for(var i = 0; i < data.length; i++){
      data[i].push(Guests)
      }
      return Guests;
    });
  }

  function getClues() {
    $.get("/api/Clues/:id", function(data) {
      for(var i = 0; i < data.length; i++){
        data[i].push(Clues)
        }
      return Clues;
    });
  }

  function getNarrative() {
    $.get("/api/Narrative/:id", function(data) {
      for(var i = 0; i < data.length; i++){
        data[i].push(Narrative)
        }
      return Narrative;
    });
  }

  function getNote(){
    $.get("/api/Notes", function(data) {
        Notes = data;
        return Notes;
      });
    }

  function deleteNote(){
      var id = $(this);
      $.ajax({
          method: 'DELETE',
          url: '/api/Notes/' + id
      })
  }
  deleteNote();

  function postNote(noteData){
      $.post('/api/Notes', noteData)
        // .then(getNote());
      }
    postNote();
})