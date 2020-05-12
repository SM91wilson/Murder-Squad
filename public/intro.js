$(document).ready(function() {
  var guestList = [];
  var Story = [];
  getGuests();
  getStory();

  function getGuests() {
    $.get("/api/Guests", function(data) {
      guestList = data;
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
