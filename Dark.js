function LightToDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

 function isEmail(email) {
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (email.match(pattern)) {
        return true;
    }
    return false;
}

 function FormValidation() {
    let errors = [];
    let sname = document.getElementById('sname').value;
    let fname = document.getElementById('fname').value;
    let email = document.getElementById('email').value;
    let age = document.getElementById('age').value;
    let pnumber = document.getElementById('Pnumber').value;
    let country = document.getElementById('country').value;
    let password = document.getElementById('Password').value;
    let confirmpswd = document.getElementById('ConPassword').value;
    let checkEmail = isEmail(email);

    if (sname == "") {
        let message = "The Name is invalid";
        errors.push(message);

    }

    if (fname == "") {
        let message = "The name is invalid";
        errors.push(message);

    }

    if (email == "" && checkEmail === false) {
        let message = "email is invalid";
        errors.push(message);

    }
    if(age < 18)
    {
        let message = "Age must be 18 and above";
        errors.push(message);
    }


    if ( pnumber > 15) {
        let message = "PhoneNumber must not be greater than 15";
        errors.push(message);

    }
    if ( country == "") {
        let message = "Your country is empty now";
        errors.push(message);

    }
    if ( password == "") {
        let message = "Input password";
        errors.push(message);

    }
    if (confirmpswd !=password) {
        let message = "Password do not match";
        errors.push(message);

    }
    
    if (errors.length > 0) {
        alert(errors);
        return false;
    }
    return true;
}
var input = window.prompt("Enter your age");
if(input>18){
alert("you're welcome");
}
else
{
  window.close();
} 