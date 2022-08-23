const email = document.getElementById('email')
const emailValidation = document.getElementById('email-validation')
const phone = document.getElementById('phone')
const phoneValidation = document.getElementById('phone-validation')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('conf-password')
const passwordValidation = document.getElementById('password-validation')


email.addEventListener('input', () => {
    if(!email.validity.valid) {
        emailValidation.innerText = "Please enter a valid email!";
    } else {
        emailValidation.innerHTML = '&nbsp;';
    }
})
phone.addEventListener('input', () => {
    if(!phone.validity.valid){
        phoneValidation.innerText = "Please enter a valid phone number!";
    } else {
        phoneValidation.innerHTML = '&nbsp;';
    }
})

confirmPassword.addEventListener('input', () => {
    if(confirmPassword.value != password.value) {
        passwordValidation.innerText = "Passwords don't match!";
    } else {
        passwordValidation.innerText = "";
    }
})