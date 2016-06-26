var overlay = document.getElementById('cover-overlay');

var contactLink = document.getElementById('contact-link');
var aboutLink = document.getElementById('about-link')

var header = document.getElementById('header');
var contact = document.getElementById('contact')
var about = document.getElementById('about');

function hideAllContent() {
  header.style.display = 'none';
  contact.style.display = 'none';
  about.style.display = 'none';
}
function fadeInElement(element) {
  hideAllContent();
  element.style.display = 'block';
  element.style.animationDuration = '0.8s';
  element.style.webkitAnimationDuration = '0.8s';
  element.style.webkitAnimationName = 'fadein';
  element.style.animationName = 'fadein';
}

function enableDarkOverlay() {
  overlay.style.backgroundColor = 'rgba(0,0,0,0.8)';
}
function disableDarkOverlay() {
  overlay.style.backgroundColor = 'rgba(0,0,0,0.4)';
}

function fadeInHeader() {
  disableDarkOverlay();
  fadeInElement(header);
}
function fadeInAbout() {
  enableDarkOverlay();
  fadeInElement(about);
}
function fadeInContact() {
  enableDarkOverlay();
  fadeInElement(contact);
}


contactLink.onclick = fadeInContact;
aboutLink.onclick = fadeInAbout;


var closeButtons = document.getElementsByClassName('show-header-button');
for (var i=0; i<closeButtons.length; i++) {
  closeButtons[i].addEventListener('click', fadeInHeader)
}
