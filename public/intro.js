$(document).ready(function() {
  var guestList = [];
  var Story = [];
  getGuests();
  getStory();

  function getGuests() {
    $.get("/api/Guests", function(data) {
      for(var i = 0; i < data.length; i++){
        data[i].push(guestList)
        }
      return guestList;
    });
  }

  function getStory() {
    $.get("/api/Story", function(data) {
      Story = data;
      return Story;
    });
  }
});
