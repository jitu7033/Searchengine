const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const number= document.querySelector("#number");
const message = document.querySelector("#message");



function validateForm(){
    // alert("alert");
    // console.log("Hello world");
    if(nameInput.value.length<1){
        errorNode[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error-border") ;
    }
}