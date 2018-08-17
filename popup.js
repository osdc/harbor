function hello() {
  var username = document.getElementById('enno').value;
  var password = document.getElementById('pass').value;
  chrome.storage.sync.set({forUsername: username, forPassword: password }, function() {
    console.log(`The storage is set`);
  });

  // alert(`${username} is the username and the password is ${password}`);
  chrome.storage.sync.get(['forUsername'], function(result) {
    // alert(`Hi the username is ${result.forUsername}`);
  });
}

document.getElementById('login').addEventListener('click', hello);