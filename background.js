// background.js

/**
 * EventListener that waits for the extension's icon (in the browser bar) to be clicked.
 */
chrome.browserAction.onClicked.addListener(function (tab) { 
    if (tab.url.indexOf("sel_crse_search") != -1) { // If the current website is the course schedule, it goes to the frame 
        chrome.tabs.executeScript(tab.id, {
            "file": "MoveToFrame.js"	// Executes MoveToFrame.js
        }, function () { 
            console.log("Script Executed .. "); // Notification on Completion
        });
    }
	else if (tab.url.indexOf("compass") != -1){
		chrome.tabs.executeScript(tab.id, {
            "file": "SearchForSeats.js" // Executes SearchForSeats.js
        }, function () { // Execute your code
            console.log("Script Executed .. "); // Notification on Completion
        });
	}
	else{
		alert("You can't execute the script on this page. You have to be looking at the course listing.");
	}
});

