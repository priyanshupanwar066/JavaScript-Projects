const passwordbox = document.getElementById("password");
const lenght = 12;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialCharacters = "!@#$%^&*()_+=-{}[]|;:,.<>/?";

const allChars = uppercase + lowercase + numbers + specialCharacters;  
function createPassword() {
    let password = "";
    password += uppercase[Math.floor(Math.random() *uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

    while (lenght > password.length){
        password += allChars[Math.floor(Math.random() *  allChars.length)];   
    }
    passwordbox.value = password;
}



function CopyPassword(){
    passwordbox.select();
    document.execCommand("copy");
    alert("Password has been copied to clipboard");
 
}