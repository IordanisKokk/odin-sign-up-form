

const submitButton = document.querySelector('.submit-button')

const passwordsNotMatching = document.querySelector('.passwords-do-not-match')

const form = document.querySelector('form');
const inputs = form.querySelectorAll('input[required]');


submitButton.addEventListener('click', checkPasswords);

function checkFormValidity() {
  
    let formIsValid = true;
    let shouldSkip = false;

    console.log(inputs[0].reportValidity())
  
    inputs.forEach(input => {
      if(shouldSkip){
        return;
      }
      // console.log(input)
      if (!input.checkValidity()) {
        formIsValid = false;
        input.reportValidity();
        shouldSkip = true;
        console.log(input)
        console.log(input.reportValidity())
        console.log(formIsValid)
        return;
      }
    });
  
    return formIsValid;
  }


function checkPasswords(event) {
    event.preventDefault();

    const passwordfield = document.querySelector('#password').value;
    const confirmpasswordfield = document.querySelector('#confirm-password').value;

    console.log(passwordfield)
    console.log(confirmpasswordfield)

    if (passwordfield === confirmpasswordfield) {
        if (checkFormValidity()) {

            console.log('form is valid')

            form.submit();
        }    
    } else {
        passwordsNotMatching.textContent = 'Passwords do not match!'
        console.log("PASSWORDS DO NOT MATCH")
    }
}
