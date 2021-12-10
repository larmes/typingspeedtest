console.log("Timer Script Running.")

// Timer Algorithm
function runMinuteTimer() {

  // Set Time
  timeCount = (10 * 1000)

  // Set Time interval
  setInterval(testTyping, timeCount)

}

function testTyping() {

    // Get the input text value
    var text = document.getElementById("typingTestInputField").value;

    // Initialize the word counter
    var numWords = 0;

    // Loop through the text
    // and count spaces in it
    for (var i = 0; i < text.length; i++) {
        var currentCharacter = text[i];

        // Check if the character is a space
        if (currentCharacter == " ") {
            numWords += 1;
        }
    }

    // Increment Words Based On Count
    numWords += 1;

    // Display Output
    document.getElementById("show").innerHTML = numWords;

    // Run Timer
    runMinuteTimer();

}