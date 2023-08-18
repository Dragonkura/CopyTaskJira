// background.js


// URL pattern to match the websites where the button should appear
// Listen for the tab update event
//chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
//    console.log("update: " + JSON.stringify(changeInfo));
//});
//const websitePattern = ['https://amanotesjsc.atlassian.net/jira/software/c/projects/GSG/boards/*?modal=detail&selectedIssue=*', 'https://amanotesjsc.atlassian.net/browse/GSG-*'];
//const titleClass = "_1e0c1txw _vwz4kb7n _p12f1osq _1nmz1hna _ca0qi2wt _n3tdi2wt _kqswh2mm _1ltvi2wt";

// Register the service worker
//navigator.serviceWorker.register('/background.js')
//    .then(registration => {
//        console.log('Service worker registered successfully:', registration);
//    })
//    .catch(error => {
//        console.error('Service worker registration failed:', error);
//    });
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "copy-title",
        title: "copy the title",
        type: "normal",
        contexts:["selection"]
    });
});
////chrome.contentMenus.onClicked.addListener((info) => {

//})


