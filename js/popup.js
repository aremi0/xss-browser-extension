let changeColor = document.getElementsByClassName('changeColor');
let searchBtn = document.getElementById('search-btn');

const buttonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];


let i = 0;
for (let btn of changeColor) {
  btn.style.backgroundColor = buttonColors[i];
  btn.setAttribute('value', buttonColors[i]);
  i++;
}

for (let btn of changeColor) {
  btn.onclick = function (element) {
    let color = element.target.value;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(
        tabs[0].id,
        { code: 'document.body.style.backgroundColor = "' + color + '";' });
    });
  };
}

searchBtn.onclick = function () {
  let searchBar = $('.search-bar');
  if (searchBar.val()) {
    let val = searchBar.val();
    let url = `https://www.bing.com/images/search?q=${val}`;
    chrome.tabs.create({ url: url, active: true });
  }
  else {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(tabs[0].id, {file: './js/search.js'}, function () {
        /**
         * callback eseguita dopo aver innestato il file *.js
         * a questo punto jquery è stato iniettato nella pagina...
        */
      });
    });
  }
}