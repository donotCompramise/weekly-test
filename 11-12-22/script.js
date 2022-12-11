let html=''
function validate_Function(){
const nameField=document.getElementById("name_field").value
const emailField=document.getElementById("email_field").value
const passwordField=document.getElementById("password_field").value
const confirmPasswordField=document.getElementById("confirm_password_field").value
const validateDetails=document.getElementsByClassName("validate_details")[0]
const validateEmailDetails=document.getElementsByClassName("validate_email_details")[0]
const validatePasswordDetails=document.getElementsByClassName("validate_password_details")[0]
const validateConfirmPasswordDetails=document.getElementsByClassName("validate_confirm_password_details")[0];
const storedData=document.getElementById('stored_data')

var RegEx =/^[A-Za-z]+$/
// var uppercase=/[A-Z]/g;
// var lowercase=/[a-z]/g;
if(nameField===""){
validateDetails.innerHTML="please enter your name"
validateDetails.style.color="red";
}else{
if(nameField.match(RegEx)){
// validateDetails.innerHTML="validated"
// validateDetails.style.color="green"
}
else{
validateDetails.innerHTML="please Enetr alphabetical only"
validateDetails.style.color="red"
}
} 
if(emailField===""){
validateEmailDetails.innerHTML="please enter a email";
validateEmailDetails.style.color="red";
}

if(passwordField===""){
validatePasswordDetails.innerHTML="please enter a password";
validatePasswordDetails.style.color="red"
}
if(confirmPasswordField===""){
validateConfirmPasswordDetails.innerHTML="please enetr a confirm psssword"
validateConfirmPasswordDetails.style.color="red"
}


html += `<table>
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Password</th>
    <th>confirm Password</th>
  </tr>
  <tr>
    <td>${nameField}</td>
    <td>${emailField}</td>
    <td>${passwordField}</td>
    <td>${confirmPasswordField}</td>
  </tr>
</table>`


storedData.innerHTML=html

}