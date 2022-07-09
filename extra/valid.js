// Grabbing input elements from HTMLDOC -->

let userName = document.getElementById('name');
let emailAddress = document.getElementById('email');
let phoneNumber = document.getElementById('phn');
let termsCheck = document.getElementById('termsCheck');
let submitButton = document.getElementById('submit');

// userName regEx --> is-valid is-invalid
userName.addEventListener('blur', () => {
    let nameRegex = /^([a-zA-z]){3,10}$/;
    let nameValue = userName.value;
    if (nameRegex.test(nameValue)) {
        userName.classList.remove('is-invalid');
        userName.classList.add('is-valid');
    } else {
        userName.classList.add('is-invalid');
    }
})

//  emailAddress regEx-- > is - valid is - invalid

emailAddress.addEventListener('blur', () => {
    let emailRegex = /^([0-9a-z]+)@([a-z0-9]+).com$/;
    let emailValue = emailAddress.value;
    if (emailRegex.test(emailValue)) {
        emailAddress.classList.remove('is-invalid');
        emailAddress.classList.add('is-valid');
    } else {
        emailAddress.classList.add('is-invalid');
    }
})

// phoneNumber regEx --> is-valid is-invalid
phoneNumber.addEventListener('blur', () => {
    let phoneRegex = /^([+])([0-9]){2,14}$/;
    let phoneValue = phoneNumber.value;
    if (phoneRegex.test(phoneValue)) {
        phoneNumber.classList.remove('is-invalid');
        phoneNumber.classList.add('is-valid');
    } else {
        phoneNumber.classList.add('is-invalid');
    }
})

// termsCheck regEx --> is-valid is-invalid
termsCheck.addEventListener('click', () => {
    termsCheck.classList.add('is-valid');
})

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    // Your code to submit the form data into your database -->

    // Success Alertation -->
    setTimeout(() => {
        let alert = document.querySelector('.alert');
        alert.classList.remove('d-none');
    }, 2000);
})

