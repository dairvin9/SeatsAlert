// THe thing that runs the js

alert("myMain.js running");
/*
$.getScript("my_lovely_script.js", function(){

   alert("Script loaded but not necessarily executed.");

});
*/
searchPageForFrames();
searchInnerDocForElements();

// content.js

// Basic Annoying Hello World Extension
//alert("Hello from your Chrome extension!")

// Uncomment this to ask fo rhe user's email. 
//var userEmail = window.prompt("What's your email address? Don't worry, my developer was too tired to write a back end to steak and sell your personal information. ","dairvin9@tamu.edu");

//var htmlKeywordWords = []; // not necessary because I am not matching this with specific words
var seatsKeyWord = ["seats"];
var innerDoc;
var mainUrl;

// We should let them be able to choose which class (or classes they want seats in 

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

		console.log("created a new document");
	}
	else {
		console.log("error, not enough frames (are you on the right page?)");
		
	}
}

// Create my own document http://stackoverflow.com/questions/8227612/how-to-create-document-objects-with-javascript
function createMyOwnDocument(){
	var doc = document.implementation.createHTMLDocument('');
	
	// I doubt this works. WHy would .open return the html format for the document
	var html = document.open();
	
	doc.open(); // H0w do I make it write where I want it?
	doc.write(html);
	doc.close();
}

function searchInnerDocForElements(){
	console.log(document.URL);
	
	window.location.href = mainUrl;
	
	console.log(document.URL);
	
	var rawElementsList = document.getElementsByClassName('dddefault'); // Gets elements from the webpage under the name dddefault
	var rawElementsListLength = rawElementsList.length;
	
	if (rawElementsListLength !== 0) {
		var html1 = rawElementsList[0].innerHTML;;
		var html2 = rawElementsList[1].innerHTML;;
		var html3;
		for(i = 2; i < rawElementsListLength; i++) { // Starts at the third element, because seats remaining is the third column
			// Checking to see if html is seats remaining value
			var html3 = rawElementsList[i].innerHTML;
			if(isNumeric(html3) && isNumeric(html2) && isNumeric(html1) ) {
				// Call method for finding an open seat, which will call the alert method    
			}
			// Move the other elements in the list
			html1 = html2;
			html2 = html3;
			
		}
		
	}
	else {
		console.log("No elements found in innerDoc.");
	}
}

function searchPageForTimes() {
	var rawElementsList = document.getElementsByClassName('dddefault'); // Gets elements from the webpage under the name dddefault
	var rawElementsListLength = rawElementsList.length;
	
	if (rawElementsListLength !== 0) {
		var html1 = rawElementsList[0].innerHTML;;
		var html2 = rawElementsList[1].innerHTML;;
		var html3;
		for(i = 2; i < rawElementsListLength; i++) { // Starts at the third element, because seats remaining is the third column
			// Checking to see if html is seats remaining value
			var html3 = rawElementsList[i].innerHTML;
			if(isNumeric(html3) && isNumeric(html2) && isNumeric(html1) ) {
				// Call method for finding an open seat, which will call the alert method    
			}
			// Move the other elements in the list
			html1 = html2;
			html2 = html3;
			
		}
		
	}
	else {
		alert("Are you on the right screen? You should be looking at the actual sections.");
	}
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