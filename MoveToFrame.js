// MoveToFrame.js

searchPageForFrames();
searchInnerDocForElements();


// Uncomment this to ask fo rhe user's email. 
//var userEmail = window.prompt("What's your email address? Don't worry, my developer was too tired to write a back end to steak and sell your personal information. ","dairvin9@tamu.edu");
// We should let them be able to choose which class (or classes they want seats in 

var seatsKeyWord = ["seats"];
var innerDoc;
var mainUrl;

// Checks if variables are numbers, as opposed to strings or functions or objects
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function searchPageForFrames(){
	var frames = document.getElementsByTagName('frame');
	if (frames.length === 2){
		console.log("correct number of frames");
		mainUrl = frames[1].getAttribute("src");
		document.implementation.createHTMLDocument(mainUrl); // title goes in here
	}
	else {
		console.log("error, not enough frames (are you on the right page?)");
		
	}
}



function searchInnerDocForElements(){
	console.log(document.URL);
	
	window.location.href = mainUrl;
	
	console.log(document.URL);
}


function searchSectionForSeats() {
	var rawElementsList = document.getElementsByClassName('fieldlabeltext'); // Gets elements from the webpage under the name dddefault
	var rawElementsListLength = rawElementsList.length;
	
	if (rawElementsListLength !== 0) {
		for(i = 0; i < rawElementsListLength; i++) { // Starts at the third element, because seats remaining is the third column
			// Checking to see if html is seats remaining value
			var potentialSeatsLabel = rawElementsList[1];
			if (potentialSeatsLabel.innerHTML.toLowerCase().matchArray(seatsKeyWord)){
				alert("keyword found!");
				// Cant access actual value this way
			}	
		}
		
	}
	else {
		alert("Are you on the right screen? You should be looking at an individual section.");
	}
}