// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var saveBtn = $('.saveBtn');
var currentDay = $("#currentDay");
var timeBlocks = $('.time-block');

$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    saveBtn.on('click', function (event) {
        // Grab the button clicked
        // var btnClicked = $(event.target);
        // Grab the id
        var btnId = $(this).parent("div").attr("id");
        // Text being stored
        var userEntry = $(this).parent("div").children("textarea").val();
        console.log(userEntry);

        
    
        /* Set local storage */
        localStorage.setItem("entryStored", JSON.stringify(userEntry));
    });

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    var currentHr = dayjs().hour();
    // var blockHour = parseInt(this.id);
    console.log(timeBlocks);
    for (var i = 0; i < timeBlocks.length; i++) {
        // var blockHour = parseInt(this.id);
        // console.log(timeBlock[0]);
        // var timeBlock = parseInt(timeBlocks[i].id);
        // console.log(timeBlock);
        // if (timeBlock < currentHr) {
        //     timeBlock[i].addClass("past");
        // }
        // else if (timeBlock === currentHr){
        //     timeBlock[i].addClass("present")
        // }
        // else {
        //     timeBlock[i].addClass("future");
        // }
    }
    
    
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
    currentDay.text(dayjs().format("dddd, MMMM D"));
  });

  