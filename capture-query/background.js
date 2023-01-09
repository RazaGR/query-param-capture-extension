function getParameterByName(url, name) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function logURL(details) {
  // Extract the sessionID parameter from the URL
  var sessionID = getParameterByName(details.url, "sessionID");
  if (sessionID) {
    chrome.storage.sync.set({ sessionID });
  }
}

chrome.webRequest.onBeforeRequest.addListener(logURL, { urls: ["<all_urls>"] });
