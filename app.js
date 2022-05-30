const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const password = document.getElementById("password");
const email = document.getElementById("email");

const invalid = document.querySelector(".invalid");
const invalidFeedback = document.querySelector(".invalid-feedback");
const form_input = document.querySelector(".form_input")



const is_invalid = document.querySelector(".invalidlastname");
const invalidlastname = document.querySelector(".invalidlastname-feedback");
const lastnameform_input = document.querySelector(".lastname-form_input")


// VALIDATION OF LAST NAME

firstName.addEventListener("blur", validateName);

function validateName() {
    let name = firstName.value;

    let re = /[a-zA-Z]{2,10}/;

    if (!re.test(name)) {
        invalid.classList.add("active");
        invalidFeedback.classList.add("active");
        form_input.classList.add('active');
    }else {
        invalid.classList.remove("active");
        invalidFeedback.classList.remove("active");
        form_input.classList.remove('active');
    }
}

// VALIDATION OF EMAIL
const invalidemail = document.querySelector(".invalidemail");
const invalidemail_feedback = document.querySelector(".invalidemail_feedback");
const emailinput = document.querySelector(".email_input")

email.addEventListener("blur", validateEmail);

function validateEmail() {
    let emailaddress = email.value;

    let re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!re.test(emailaddress)) {
        invalidemail.classList.add("active");
        invalidemail_feedback.classList.add("active");
        emailinput.classList.add('active');
    }else {
        invalidemail.classList.remove("active");
        invalidemail_feedback.classList.remove("active");
        emailinput.classList.remove('active');
    }
}


// VALIDATION OF PASSWORD
const invalidpassword = document.querySelector(".invalidpassword");
const invalidpassword_feedback = document.querySelector(".invalidpassword-feedback");
const passwordinput = document.querySelector(".password_input");


password.addEventListener("blur", validatePassword);

function validatePassword() {
    let passwordValue = password.value;

    let re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    if (!re.test(passwordValue)) {
        invalidpassword.classList.add("active");
        invalidpassword_feedback.classList.add("active");
        passwordinput.classList.add('active');
    }else {
        invalidpassword.classList.remove("active");
        invalidpassword_feedback.classList.remove("active");
        passwordinput.classList.remove('active');
    }
}


// VALIDATION OF LAST NAME

lastName.addEventListener("blur", validateLastName);
function validateLastName() {
    let name = lastName.value;
    console.log("Validate")

    let re = /[a-zA-Z]{2,10}/;

    if (!re.test(name)) {
       is_invalid.classList.add("active");
        invalidlastname.classList.add("active");
        lastnameform_input.classList.add('active');
    }else {
        is_invalid.classList.remove("active");
        invalidlastname.classList.remove("active");
        lastnameform_input.classList.remove('active');
    }
}

const submitBtn = document.querySelector("button")

submitBtn.addEventListener("click", () => {
    alert("Form Submitted")
})
