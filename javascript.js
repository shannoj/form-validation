const zip = document.getElementById('ZIP');
const country = document.getElementById('country');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

zip.addEventListener('input', function(){
    if (country.value.toLowerCase() == 'united states' || country.value.toLowerCase() == 'us'){
        if(zip.value.length != 5){
            zip.setCustomValidity('Zip code for United States must be 5 digits')
            zip.style.borderColor = 'red';
        } else {
            zip.setCustomValidity('');
            zip.style.borderColor = 'green';
        }
    }

    if (zip.value === ''){
        zip.setCustomValidity('A zip code is required');
        country.style.borderColor = 'red';
    } else {
        zip.setCustomValidity('');
        zip.style.borderColor = 'green';
    }
});

country.addEventListener('input', function(){
    if (country.value.toLowerCase() == 'united states' || country.value.toLowerCase() == 'us'){
        if(zip.value.length != 5){
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
