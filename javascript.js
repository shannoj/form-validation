const zip = document.getElementById('ZIP');
const country = document.getElementById('country');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const submit = document.getElementById('submit-form');
const form = document.getElementById('form');
const formContainer = document.getElementById('form-container');

zip.required = true;
country.required = true;
email.required = true;
password.required = true;

if(zip.value == ''){
    zip.style.borderColor = 'grey';
}

if(country.value == ''){
    country.style.borderColor = 'grey';
}

if(email.value == ''){
    email.style.borderColor = 'grey';
}

if(password.value == ''){
    password.style.borderColor = 'grey';
}

if(confirmPassword.value == ''){
    confirmPassword.style.borderColor = 'grey';
}

if(submit.value == ''){
    submit.style.borderColor = 'grey';
}

zip.addEventListener('input', function(){
    if (country.value.toLowerCase() == 'united states' || country.value.toLowerCase() == 'us'){
        if(zip.value.length < 5 || zip.value.length > 5){
            zip.setCustomValidity('Zip code for United States must be 5 digits')
            zip.style.borderColor = 'red';
        } else if (zip.value.length == 5){
            zip.setCustomValidity('');
            zip.style.borderColor = 'green';
        }
    }

    if (zip.value === ''){
        zip.setCustomValidity('A zip code is required');
        country.style.borderColor = 'red';
    }
});

country.addEventListener('input', function(){
    if (country.value.toLowerCase() == 'united states' || country.value.toLowerCase() == 'us'){
        if(zip.value.length < 5 || zip.value.length > 5){
            zip.setCustomValidity('Zip code for United States must be 5 digits')
            zip.style.borderColor = 'red';
        } else {
            zip.setCustomValidity('');
            zip.style.borderColor = 'green';
        }
    }

    if (country.value === ''){
        country.setCustomValidity('A country is required');
        country.style.borderColor = 'red';
    } else {
        country.setCustomValidity('');
        country.style.borderColor = 'green';
    }
});

email.addEventListener("input", function() {
    if (email.validity.typeMismatch || email.value.length < 1) {
      email.setCustomValidity("I am expecting an email address!");
      email.style.borderColor = 'red';
    } else {
      email.setCustomValidity("");
      email.style.borderColor = 'green';
    }
  });

password.addEventListener('input', function(){
if (password.value.length < 8){
    password.setCustomValidity('Password must be more than 8 characters');
    password.style.borderColor = 'red';
} else {
    password.setCustomValidity('');
    password.style.borderColor = 'green';
}
});

confirmPassword.addEventListener('input', function(){
    let passwordValue = document.getElementById('password').value;

    if (confirmPassword.value !== passwordValue) {
        confirmPassword.setCustomValidity('Passwords must match');
        confirmPassword.style.borderColor = 'red';
    } else {
        confirmPassword.setCustomValidity('');
        confirmPassword.style.borderColor = 'green';
    }
});

form.addEventListener('submit', function(e){
    if (password.value.length < 8){
        e.preventDefault();
        password.setCustomValidity('Password must be more than 8 characters');
        password.style.borderColor = 'red';
    } else {
        password.setCustomValidity('');
        password.style.borderColor = 'green';
    }

    let passwordValue = document.getElementById('password').value;

    if (confirmPassword.value !== passwordValue) {
        e.preventDefault();
        confirmPassword.setCustomValidity('Passwords must match');
        confirmPassword.style.borderColor = 'red';
    } else {
        confirmPassword.setCustomValidity('');
        confirmPassword.style.borderColor = 'green';
    }

    if (email.validity.typeMismatch || email.value.length < 1) {
        e.preventDefault();
        email.setCustomValidity("I am expecting an email address!");
        email.style.borderColor = 'red';
      } else {
        email.setCustomValidity("");
        email.style.borderColor = 'green';
      }

      if (email.value = ''){
        e.preventDefault();
        email.setCustomValidity('No email entered')
        email.style.borderColor = 'red';
    }

    if (email.validity.typeMismatch || email.value.length < 1) {
        e.preventDefault();
        email.setCustomValidity("I am expecting an email address!");
        email.style.borderColor = 'red';
      } else {
        email.setCustomValidity("");
        email.style.borderColor = 'green';
      }

    form.remove();
    const acceptedForm = document.createElement('div');
    acceptedForm.setAttribute('id', 'accepted-form-div');
    acceptedForm.innerHTML = 'Congratualtions on filling out a form!';
    formContainer.appendChild(acceptedForm);
});
