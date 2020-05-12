$(document).ready(function() {

  var suspects = [];
  var Clues = [];
  var Narrative = [];
  var Notes = [];

  getSuspects();
  getClues();
  getNarrative();
  getNote();

  function getSuspects() {
    $.get("/api/Suspects", function(data) {
      suspects = data;
      return suspects;
    });
  }

  function getClues() {
    $.get("/api/Clues", function(data) {
      Clues = data;
      return Clues;
    });
  }

  function getNarrative() {
    $.get("/api/Narrative", function(data) {
      Narrative = data;
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

  function postNote(noteData){
      $.post('/api/Notes', noteData)
        .then(getNote);
      }
});