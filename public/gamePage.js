$(document).ready(function() {
  const Guests = [];
  const Clues = [];
  const Narrative = [];
  const Notes = [];
  const Stories = [];
  var charClues = [];
  var otherCharClu = [];
  var roundCount = 0;

  getGuests();
  getClues();
  getNarrative();
  getStories();
  getNote();
  console.log(Guests);
  console.log(Clues);
  console.log(Stories);
  console.log(Narrative);

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
        }
      }
      console.log(charClues)
      otherCharClu = Clues.filter(function(e){
        return e.GuestId !== 1;
      })

    }else if(chosenGuest === 'Earnest Frank') {
      for (let i = 0; i < Clues.length; i++) {
        if (Clues[i].GuestId === 2) {
          charClues.push(Clues[i]); 
        }
      }
      otherCharClu = Clues.filter(function(e){
        return e.GuestId !== 2;
      })

    }else { 
      for (let i = 0; i < Clues.length; i++) {
      if (Clues[i].GuestId === 3) {
        charClues.push(Clues[i]); 
      }
    }
    otherCharClu = Clues.filter(function(e){
      return e.GuestId !== 3;
    })
  }
  });

  $(".start").on("click", function() {
    console.log(roundCount);
    clueAndNarr();
    
  });

  $(".addClue").on("click", function() {
    let boardClue = $("<li>").text(charClues[roundCount].clues);
    $(boardClue).addClass("mb");
    $(".messageBoard").append(boardClue);    
      if(roundCount === 0){
        var roundClue1 = $("<li>").text(otherCharClu[0].clues).addClass("mb");
        var roundClue2 = $("<li>").text(otherCharClu[1].clues).addClass("mb");
        var roundClue3 = $("<li>").text(otherCharClu[2].clues).addClass("mb");
        $(".messageBoard").append(roundClue1, roundClue2, roundClue3);
      }else if(roundCount === 1){
        var roundClue4 = $("<li>").text(otherCharClu[3].clues).addClass("mb");
        var roundClue5 = $("<li>").text(otherCharClu[4].clues).addClass("mb");
        var roundClue6 = $("<li>").text(otherCharClu[5].clues).addClass("mb");
        $(".messageBoard").append(roundClue4, roundClue5, roundClue6);
      }else{
        var roundClue7 = $("<li>").text(otherCharClu[6].clues).addClass("mb");
        var roundClue8 = $("<li>").text(otherCharClu[7].clues).addClass("mb");
        var roundClue9 = $("<li>").text(otherCharClu[8].clues).addClass("mb");
        $(".messageBoard").append(roundClue7, roundClue8, roundClue9);
      } 
    
    $(".clue").empty();
    $(".nextRound").removeClass("d-none");
  });

  $(".nextRound").on("click", function() {
    console.log(roundCount);
    if(roundCount === 3){
      document.location = '/endgame';
    }else{
    roundCount++;
    clueAndNarr();
    $(".nextRound").addClass("d-none");
    }
  });

  function clueAndNarr() {
    $(".clue").text(charClues[roundCount].clues);
    $(".addText").text(Narrative[roundCount].narrative);
  }

  function getGuests() {
    $.get("/api/Guests", function(data) {
      JSON.stringify(data);
      for (var i = 0; i < data.length; i++) {
        Guests.push(data[i]);
        var listChar = $("<li>").text(Guests[i].name);
        $(listChar).addClass("border bg-white");
        $("#avatar").append(listChar);
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
    $.get("/api/Narrative", function(data) {
      for (var i = 0; i < data.length; i++) {
        Narrative.push(data[i]);
        console.log(data);
      }
      return Narrative;
    });
  }

  function getStories(){
    $.get("/api/Story", function(data){
      for (var i = 0; i < data.length; i++){
        Stories.push(data[i]);
      }
      return Stories;
    })
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
