// second.js

/*var script = document.createElement('script');
//script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.src = "lib/jquery.js";
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);*/

alert("second.js running");
var seatsRemaining = []; // Will contain the number of seats remaining for each of the sections
var seatsRemainingLocation = []; // horrible programming practice
var rawElementsList;

searchCompassElements();



function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function searchCompassElements(){
	rawElementsList = document.getElementsByClassName('dddefault'); // Gets elements from the webpage under the name dddefault
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
				remainingNum(html3,i);
			}
			// Move the other elements in the list
			html1 = html2;
			html2 = html3;
			
		}
		judgeResults();
	}
	else {
		console.log("No elements found in innerDoc.");
	}
}

function remainingNum(html_string,i){
	console.log(html_string);
	var num = parseInt(html_string);
	seatsRemaining.push(num);
	
	seatsRemainingLocation.push(i);
	
}

function judgeResults(){
	for (var i = 0; i < seatsRemaining.length; i++){
		if (seatsRemaining[i] > 0) {
			console.log("There is a spot in section " + rawElementsList[seatsRemainingLocation[i] - 8].childNodes[0].innerHTML);
		}
	}
}