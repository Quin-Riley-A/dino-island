
function getDinos() {
  let xhr = new XMLHttpRequest();
  let url = 'https://dinoipsum.com/api/?format=html&words=10&paragraphs=3';
  xhr.open('GET', url, true);
  xhr.onload = function() {
    if (this.status === 200) {
      document.querySelector('#dino-list').innerHTML = this.response;
    } else {
      console.log('Where did all the dinosaurs go? ');
    }
  };
  xhr.send();
}

let img1 = document.querySelector('img');
img1.addEventListener('click', getDinos);