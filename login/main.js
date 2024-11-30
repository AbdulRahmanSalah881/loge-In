// let emailInput=document.getElementById("floatingInput");
// let PassInput=document.getElementById("floatingPassword");
// let btnLogin =document.getElementById("btnlogn")


// var loginList=[];
// exports=loginList;


// btnLogin.addEventListener("click",function(){
// // console.log("hello")
// // console.log(emailInput.value);
// // console.log(PassInput.value)
// var List={
//     Email:emailInput.value,
//     Pass:PassInput.value
// }
// loginList.push(List)
// // console.log(loginList)
// localStorage.setItem("LoginData",JSON.stringify(loginList))
// clearData()


// })


// function clearData(){
//     emailInput.value=null;
//     PassInput.value=null;

// }
let sign = document.getElementById("SignUplogin")
let Savedata = localStorage.getItem("LoginData");
let Emailchek = document.getElementById("floatingInput");
let Passchek = document.getElementById("floatingPassword");
let loginbtn = document.getElementById("btnlogn");
let errorInputs = document.getElementById("Error");
let saveObject = JSON.parse(Savedata);

if (localStorage.getItem("Savedata") !== null) {
    productList = JSON.parse(localStorage.getItem("Savedata")); // Load products into the list
    displayData(); // Display product data on the page
}

console.log(saveObject)


loginbtn.addEventListener("click", function () {
    let logeIn;
    for (i = 0; i < saveObject.length; i++) {

        if (Emailchek.value === saveObject[i].Email) {
            if (Passchek.value === saveObject[i].Pass) {
                errorInputs.classList.add("d-none")
                localStorage.setItem("nameone", JSON.stringify(saveObject[i].first))
                window.location = '../welcom.html'
                isLoggedIn = true;
                break;
            } else {

                errorInputs.classList.remove("d-none")
                errorInputs.innerHTML = "Password incorrect";
                isLoggedIn = false;
                break;

            }

        }
        else{
            errorInputs.classList.remove("d-none")
            errorInputs.innerHTML = "Email incorrect";

        }



    }
    



})
sign.addEventListener("click", function () {
    window.location = '../sign.html'

})






