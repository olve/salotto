var cover = document.getElementById('cover');

var numImages = 18;
var currentImage = 0;

var loaded = [];
var img = new Image();

function loadNext() {

  currentImage = (currentImage === numImages) ? 1 : currentImage+1;

  if (loaded.length >= currentImage) {
    img.src = loaded[currentImage-1];
  }
  else {
    img.src = 'static/img/gallery/' + currentImage + '.jpg';
    loaded.push(img.src);
  }

};

img.onload = function() {
  cover.style.webkitAnimationName = 'fadein';
  cover.style.animationName = 'fadein';
  cover.style.backgroundImage = 'url(' + img.src + ')';
  setTimeout(loadNext, 6000);
}


function removeAnimation(event) {
  event.target.style.animationName = '';
  event.target.style.webkitAnimationName = '';
};

cover.style.animationDuration = '1.5s';
cover.style.webkitAnimationDuration = '1.5s';

cover.addEventListener('animationEnd', removeAnimation);
cover.addEventListener('webkitAnimationEnd', removeAnimation);

document.addEventListener('DOMContentLoaded', loadNext, false);
