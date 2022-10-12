
function getDinos() {
  let promise = new Promise(function(resolve, reject) {
    let xhr = new XMLHttpRequest();
    let url = 'https://dinoipsum.com/api/?format=html&paragraphs=3&words=15';
    xhr.onload = function() {
      let apiResponse = this.response;
      if (this.status === 200) {
        resolve(apiResponse);
      } else {
        reject('Where did all the dinosaurs go?');
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
  document.querySelector('#dino-list').innerHTML = '';
  apiResponse = (apiResponse.split('<p>')).toString();
  apiResponse = (apiResponse.split('</p>')).toString().replaceAll(',', '');
  document.querySelector('#dino-list').append(apiResponse);
}

function displayError(rejectMessage) {
  document.querySelector('#dino-list').innerText = rejectMessage;
}

let img1 = document.querySelector('img');
img1.addEventListener('click', getDinos);