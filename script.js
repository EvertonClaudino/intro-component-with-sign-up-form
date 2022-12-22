const form = document.getElementById('form')
const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const email = document.getElementById('email')
const password = document.getElementById('password')

form.addEventListener('submit', e => {
    e.preventDefault();

    var firstName = fname.value.trim();
    var lastName = lname.value.trim();
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();
    var emailValidation = '/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/';

    if (firstName === '') {
        errorFunc(fname, 'First Name cannot be empty')
    } else {
        successFunc(fname)
    }

    if (lastName === '') {
        errorFunc(lname, 'Last Name cannot be empty')
    } else {
        successFunc(lname)
    }

    if (emailValue === '') {
        errorFunc(email, 'E-mail Address cannot be empty')
    } else {
        successFunc(email)
    }

    if (passwordValue === '') {
        errorFunc(password, 'Password cannot be empty')
    } else {
        successFunc(password)
    }


})

function errorFunc(req, message) {
    const formControl = req.parentElement;
    const span = formControl.querySelector('span');
    req.classList = 'error';
    span.innerText = message;
    span.className = 'error-text';

}



function successFunc(req) {
    req.className = 'success';
}