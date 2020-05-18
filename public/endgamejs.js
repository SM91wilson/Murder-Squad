// 

// <!-- if you got right answer: -->
//            <!-- You’re correct! Your brilliant work helped me piece this mystery together. -->
//            <!-- if you got wrong answer: -->
//            <!-- Close, but no cigar. Here’s what happened: -->

// function to apply if you got it right or got it wrong.

function revealOne(){
  if ($("#yourGuess").text() === "Evilynn Shadows") {
    console.log("yes");
    $("#rightOrWrong").append("<div>").text("You’re correct! Your brilliant work helped me piece this mystery together. Here's what happened:");
  }
  else {
    console.log("no");
    $("#rightOrWrong").html("Close, but no cigar. Here’s what happened:");
  }
}


// function to reveal the div containing the end of game text
function revealTwo() {
    var x = document.getElementById("whoDunnit");
    var y = document.getElementById("accusationBox");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
    } else {
      x.style.display = "block";
      y.style.display = "none";
    }
  }
// 

function finalGuess() {
  var z = document.getElementById("finalGuessField");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "block";
  }
}

//   on click function
    // populate the specific text
    // switch div to reveal state
// 

$(".list-group-item").click(function() {
  var w = document.getElementById("finalGuessField");
  if (w.style.display === "none") {
    $("#yourGuess").html(this.innerHTML);
    finalGuess();
    $("#submitBtn").click(function(){
      console.log("submitted");
      revealOne();
      revealTwo();
    });
  }
  else {
    $("#yourGuess").html(this.innerHTML);
    $("#submitBtn").click(function(){
      console.log("submitted too");
      revealOne();
      revealTwo();
    });
  }
});








