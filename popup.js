chrome.storage.sync.get("sessionID", ({ sessionID }) => {
  document.getElementById("sessionID").innerHTML = sessionID;
});
