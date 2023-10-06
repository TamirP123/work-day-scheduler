// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn"t run until the browser has finished rendering all the elements
// in the html.

var saveBtn = $(".saveBtn");
var currentDay = $("#currentDay");
var timeBlocks = $(".time-block");

$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving thetextArea in local storage?
    //
    saveBtn.on("click", function (event) {
        // Grab the button clicked
        // var btnClicked = $(event.target);
        // Grab the id
        var btnId = $(this).parent("div").attr("id");
        // Text being stored
        var userEntry = $(this).parent("div").children("textarea").val();
        console.log(userEntry);

        
    
        /* Set local storage */
        localStorage.setItem(btnId, userEntry);
    });

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    var currentHr = dayjs().hour();
    // var blockHour = parseInt(this.id);
    console.log(timeBlocks);

    // Loop through the timeBlocks
    $(timeBlocks).each(function () {
        // Turn the id into an int, then split to remove the hour-
        var timeId = parseInt($(this).attr("id").split("hour-")[1]);
        console.log(timeId);

        if (currentHr > timeId) {
            $(this).addClass("past");
        }
        else if (currentHr === timeId) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("future");
        }
      });
    
    
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
$("#hour-9 textArea").val(localStorage.getItem("hour-9"));
$("#hour-10 textArea").val(localStorage.getItem("hour-10"));
$("#hour-11 textArea").val(localStorage.getItem("hour-11"));
$("#hour-12 textArea").val(localStorage.getItem("hour-12"));
$("#hour-13 textArea").val(localStorage.getItem("hour-13"));
$("#hour-14 textArea").val(localStorage.getItem("hour-14"));
$("#hour-15 textArea").val(localStorage.getItem("hour-15"));
$("#hour-16 textArea").val(localStorage.getItem("hour-16"));
$("#hour-17 textArea").val(localStorage.getItem("hour-17"));
    // TODO: Add code to display the current date in the header of the page.
    currentDay.text(dayjs().format("dddd, MMMM D"));
  });
