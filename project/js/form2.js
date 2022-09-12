// Select the elements
const myForm = document.getElementById("myForm")
const myName = document.getElementById("name")
const myEmail = document.getElementById("email")
const myPassword = document.getElementById("password")
const myPhone = document.getElementById("phone")
const output = document.querySelector('.output')

myForm.addEventListener("submit", function (e) {
    e.preventDefault()

    if (myName.value.length === 0) {
        output.innerHTML = '<div class="alert alert-danger" role="alert">Please enter your name</div>'
    }
     if (myEmail.value.length === 0) {
        output.innerHTML = '<div class="alert alert-danger" role="alert">Please enter your email</div>'
    }
    else if (myPassword.value.length === 0) {
        output.innerHTML = '<div class="alert alert-danger" role="alert">Please enter your password</div>'
    }
    else if (myPhone.value.length === 0) {
        output.innerHTML = '<div class="alert alert-danger" role="alert">Please enter your phone number</div>'
    }
    // else if (!Number(myPhone)) {
    //     output.innerHTML = '<div class="alert alert-danger" role="alert">Please enter a valid phone number</div>'
    // }
    else{
        output.innerHTML = '<div class="alert alert-success" role="alert">Congratulations! You have successfully registered </div>'
    }

})