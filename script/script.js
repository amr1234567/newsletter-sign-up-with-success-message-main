let button = document.getElementsByClassName("submit-button")[0];
let emailField = document.getElementById("email-text-area");
let message = document.getElementsByClassName("success-message");
let mainWindow = document.getElementsByClassName("container")[0];
let labelInvalid = document.querySelector('.labels span');
console.log(labelInvalid);
var mailformat = /\w+@\w+.\w+/;

// button.addEventListener('click', validate());


function validate() {
    if (!emailField.value.match(mailformat)) {
        labelInvalid.textContent="Valid Email Requierd";
        emailField.classList.add("label-invalid");
        return false;
    }
}

