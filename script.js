document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    var firstName=document.getElementById('first-name');
    var lastName=document.getElementById('last-name');
    var email=document.getElementById('email');
    var password=document.getElementById('password');
    var emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //var passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    resetErrors();
    let isValid = true;
    if (!firstName.value.trim()) {
      showError(firstName, 'First Name cannot be empty');
      isValid=false;
    }
  
    if (!lastName.value.trim()) {
      showError(lastName, 'Last Name cannot be empty');
      isValid=false;
    }
  
    if (!email.value.trim() || !emailRegex.test(email.value)) {
      showError(email, 'Looks like this is not an email');
      isValid=false;
    }
  
    if (!password.value.trim()) {
      showError(password, 'Password cannot be empty');
      isValid=false;
    }
  
    if (isValid) {
      alert('successfully!');
      this.reset();
    }
  });
  // document.querySelector('input').addEventListener('input', function() {
  //   var errorIcon = document.querySelector('.error-icon');
  //   if (this.value === '') {
  //     errorIcon.style.display = 'block';
  //   } else {
  //     errorIcon.style.display = 'none';
  //   }
  // });
  
  function showError(input, message) {
    var inputGroup = input.parentElement;
    inputGroup.classList.add('error');
    inputGroup.querySelector('.error-message').textContent = message;
  }
  
  function resetErrors() {
    var inputGroups = document.querySelectorAll('.input-group');
    inputGroups.forEach(group => {
      group.classList.remove('error');
    });
  }