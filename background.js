// background.js

chrome.browserAction.onClicked.addListener(function (tab) { //Fired when User Clicks ICON
    if (tab.url.indexOf("sel_crse_search") != -1) { // Inspect whether the place where user clicked matches with our list of URL
        chrome.tabs.executeScript(tab.id, {
            "file": "myMain.js"
        }, function () { // Execute your code
            console.log("Script Executed .. "); // Notification on Completion
        });
    }
	else if (tab.url.indexOf("compass") != -1){
		chrome.tabs.executeScript(tab.id, {
            "file": "second.js"
        }, function () { // Execute your code
            console.log("Script Executed .. "); // Notification on Completion
        });
	}
	else{
		alert("You can't execute the script on this page. You have to be looking at the course listing.");
	}
});

