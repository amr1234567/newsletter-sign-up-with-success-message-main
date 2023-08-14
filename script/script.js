let emailField = document.getElementById("email-text-area");
let labelInvalid = document.querySelector('.labels span');
var mailformat = /\w+@\w+.\w+/;

function validate() {
    if (!emailField.value.match(mailformat)) {
        labelInvalid.textContent="Valid Email Requierd";
        emailField.classList.add("label-invalid");
        return false;
    }
}

