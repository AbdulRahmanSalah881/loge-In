var SignIn = document.getElementById("signIn");
let firstName = document.getElementById("FirstNameInput")
var SecondName = document.getElementById("secondNameInput")
let emailInput = document.getElementById("floatingInput");
let PassInput = document.getElementById("floatingPassword");
let btnLogin = document.getElementById("btnlogn")
let sign = document.getElementById("signIn")
var massageError = document.getElementById("checkdata");

var loginList = [];
// localStorage.clear("LoginData")

if (localStorage.getItem("LoginData") !== null) {
    loginList = JSON.parse(localStorage.getItem("LoginData")); // Load products into the list
}

btnLogin.addEventListener("click", function () {
    // console.log("hello")
    // console.log(emailInput.value);

    // console.log(PassInput.value)
    if ((mailvalied()) && (firstName.value !== "") && (SecondName.value !== "")&& (emailInput.value !== "") && (PassInput.value !== "")) {
        var List = {
            first: firstName.value,
            second: SecondName.value,
            Email: emailInput.value,
            Pass: PassInput.value
        }

        loginList.push(List)
        // console.log(loginList)
        localStorage.setItem("LoginData", JSON.stringify(loginList))
        window.location = '../index.html'

        clearData()


    } else {
        chekAllInput()
    }


});

sign.addEventListener("click", function () {
    window.location = '../sign.html'

})

function clearData() {
    emailInput.value = null;
    PassInput.value = null;
    firstName.value = null;
    SecondName.value = null;
    firstName.classList.remove("is-valid")
    SecondName.classList.remove("is-valid")
    PassInput.classList.remove("is-valid")
    firstName.classList.remove("is-invalid")
    SecondName.classList.remove("is-invalid")
    PassInput.classList.remove("is-invalid")
    emailInput.classList.remove("is-valid")
    emailInput.classList.remove("is-invalid")
    massageError.classList.remove("d-none");

}

SignIn.addEventListener("click", function () {
    window.location = '../index.html'
})


//valdtion
function mailvalied() {
    var regix = /^\S+@\S+\.\S+$/
    var text = emailInput.value;
    var mailMassagText = document.getElementById("mailMassagText")
    if (regix.test(text)) {
        if (chekmail()) {
            mailMassagText.classList.add("d-none")
            floatingInput.classList.add("is-valid")
            floatingInput.classList.remove("is-invalid")

            return true
        }

    } else {
        mailMassagText.classList.remove("d-none")
        floatingInput.classList.add("is-invalid")
        floatingInput.classList.remove("is-valid")

        return false
    }

}
function chekmail() {
    var chekmail = emailInput.value;
    var mailMassagText = document.getElementById("mailMassagText")

    for (let i = 0; i < loginList.length; i++) {
        if (chekmail === loginList[i].Email) {
            mailMassagText.innerHTML = "This Mail is Already Registered"; // Corrected how the message is set
            mailMassagText.classList.remove("d-none"); // Ensure error message is visible
            floatingInput.classList.add("is-invalid"); // Add invalid class
            floatingInput.classList.remove("is-valid"); // Remove valid class
            return false; // Exit if email exists
        }
    }
    return true; // 

}
function chekAllInput() {

    if (firstName.value === "" && SecondName.value !== "" && emailInput.value !== "" && PassInput.value !== "") {
        firstName.classList.add("is-invalid")
        SecondName.classList.add("is-valid")
        PassInput.classList.add("is-valid")

        massageError.classList.remove("d-none");
        massageError.innerHTML = "First name is not filled";
    } else if (firstName.value !== "" && SecondName.value === "" && emailInput.value !== "" && PassInput.value !== "") {
        firstName.classList.add("is-valid")
        SecondName.classList.add("is-invalid")
        PassInput.classList.add("is-valid")
        massageError.classList.remove("d-none");
        massageError.innerHTML = "Second name is not filled";
    } else if (firstName.value !== "" && SecondName.value !== "" && emailInput.value === "" && PassInput.value !== "") {
       
        massageError.classList.remove("d-none");
        massageError.innerHTML = "Email is not filled";
    } else if (firstName.value !== "" && SecondName.value !== "" && emailInput.value !== "" && PassInput.value === "") {
        firstName.classList.add("is-valid")
        SecondName.classList.add("is-valid")
        PassInput.classList.add("is-invalid")
        massageError.classList.remove("d-none");
        massageError.innerHTML = "Password is not filled";
    } else {
        firstName.classList.remove("is-valid")
        SecondName.classList.remove("is-valid")
        PassInput.classList.remove("is-valid")
        firstName.classList.remove("is-invalid")
        SecondName.classList.remove("is-invalid")
        PassInput.classList.remove("is-invalid")
        massageError.classList.remove("d-none");
        massageError.innerHTML = "All fields are required";
    }
}