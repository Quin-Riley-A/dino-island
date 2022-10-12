
function getDinos() {
  let promise = new Promise(function(resolve, reject) {
    let xhr = new XMLHttpRequest();
    let url = 'https://dinoipsum.com/api/?format=html&words=10&paragraphs=3';
    xhr.onload = function() {
      let apiResponse = JSON.parse(this.response);
      if (this.status === 200) {
        resolve(apiResponse);
      } else {
        reject(['Where did all the dinosaurs go?', this.status]);
      }
    };
    xhr.open('GET', url, true);
    xhr.send();
  });

  promise.then(function(apiResponse) {
    displayDinos(apiResponse);
  }, function(rejectMessage) {
    displayError(rejectMessage);
  });
}

//UI Logic

function displayDinos(apiResponse) {
  document.querySelector('#dino-list').innerText = apiResponse;
}

function displayError() {
  
}

let img1 = document.querySelector('img');
img1.addEventListener('click', getDinos);