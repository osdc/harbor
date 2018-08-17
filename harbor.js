chrome.storage.sync.get(['forUsername'], function(result) {
  alert(`The current user trying to access is ${result.forUsername}`);
});