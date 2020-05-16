$(document).ready(function() {
  const Guests = [];
  const Clues = [];
  const Narrative = [];
  const Notes = [];
  var charClues = [];

  getGuests();
  getClues();
  getNarrative();
  getNote();
  console.log(Guests);
  console.log(Clues);

  $(".carousel-item").on("click", function() {
    const chosenGuest = $(this)
      .text()
      .trim();
    console.log(
      $(this)
        .text()
        .trim()
    );
    if (chosenGuest === "Mary St. Pope") {
      for (let i = 0; i < Clues.length; i++) {
        if (Clues[i].GuestId === 1) {
          charClues.push(Clues[i]);
          console.log(charClues);
        }
      }
    }else if(chosenGuest === 'Earnest Frank') {
      for (let i = 0; i < Clues.length; i++) {
        if (Clues[i].GuestId === 2) {
          charClues.push(Clues[i]);
          console.log(charClues);
        }
      }
    }else { 
      for (let i = 0; i < Clues.length; i++) {
      if (Clues[i].GuestId === 3) {
        charClues.push(Clues[i]);
        console.log(charClues);
      }
    }}
  });

  function getGuests() {
    $.get("/api/Guests", function(data) {
      console.log(data);
      JSON.stringify(data);
      for (var i = 0; i < data.length; i++) {
        Guests.push(data[i]);
      }

      $(".guest1name").text(Guests[0].name);
      $(".guest2name").text(Guests[1].name);
      $(".guest3name").text(Guests[2].name);

      return Guests;
    });
  }

  function getClues() {
    $.get("/api/Clues", function(data) {
      for (var i = 0; i < data.length; i++) {
        Clues.push(data[i]);
      }
      return Clues;
    });
  }

  function getNarrative() {
    $.get("/api/Narrative/:id", function(data) {
      for (var i = 0; i < data.length; i++) {
        Narrative.push(data[i]);
      }
      return Narrative;
    });
  }

  function getNote() {
    // $.get("/api/Notes", function(data) {
      // Notes = data;
      return Notes;
    // });
  }

  function deleteNote() {
    var id = $(this);
    $.ajax({
      method: "DELETE",
      url: "/api/Notes/" + id,
    });
  }
  deleteNote();

  function postNote(noteData) {
    $.post("/api/Notes", noteData);
    // .then(getNote());
  }
  postNote();
});
