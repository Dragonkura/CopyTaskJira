document.addEventListener("DOMContentLoaded", function() {
  var copyButton = document.getElementById("copyButton");
  
  copyButton.addEventListener("click", function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "copyTitle" });
    });
  });
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "setTitle") {
    copyTitleToClipboard(request.title);
  }
});

function copyTitleToClipboard(title) {
  var dummyTextArea = document.createElement("textarea");
  document.body.appendChild(dummyTextArea);
  dummyTextArea.value = title;
  dummyTextArea.select();
  document.execCommand("copy");
  document.body.removeChild(dummyTextArea);
}
