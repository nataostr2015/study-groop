let loginButton = document.querySelector('.login-button');
let popup = document.querySelector('.popup');
let body = document.querySelector('body');

loginButton.addEventListener('click', showPopup)

function showPopup(el) {
  el.preventDefault();
  popup.classList.toggle('visible')
  body.classList.toggle('page-backdrop')
}





let closeButton = document.querySelector('.close-button');

closeButton.addEventListener('click', hidePopup)

function hidePopup(el) {
  el.preventDefault();
  popup.classList.toggle('visible')
  body.classList.toggle('page-backdrop')
}
