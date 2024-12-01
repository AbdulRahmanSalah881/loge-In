let closelogn =document.getElementById("closelogn")

let name =localStorage.getItem("nameone")
let nameObject = JSON.parse(name);

console.log(name)
document.getElementById("userName").innerHTML=nameObject


closelogn.addEventListener("click",function(){
window.location='./index.html'
localStorage.removeItem("nameone")

})
