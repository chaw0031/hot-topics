// Get the reference to your HTML elements
let dc = document.getElementById('dynamic-content');
let controls = document.getElementById('controls');
let buttons = controls.getElementsByTagName('a');
let url = "partials/home.html";

function loadData(url) {
  fetch(url)
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      dc.innerHTML = data; 
    })
    .catch(function (error) {
      document.getElementById('error').innerText = 'Error loading content';
    });
}

function changePage(e){
  e.preventDefault();
  let clickBtn = e.target;
  let url = clickBtn.href;
  loadData(url);
}
  
for (let btn of buttons){
  btn.addEventListener("click", changePage);
}

loadData(url);
