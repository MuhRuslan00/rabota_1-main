const loginButton = document.querySelector('.login-button')
const loginPopUp = document.querySelector('.login-PopUp');
const closeButton = document.querySelector('.PopUp-close');

loginButton.addEventListener('click', showPopUp);
closeButton.addEventListener('click', close);

function showPopUp(evt) {
    console.log(evt);
    evt.preventDefault();

    loginPopUp.classList.toggle('show-PopUp');
};

function close() {
    loginPopUp.classList.remove('show-PopUp');
} 

