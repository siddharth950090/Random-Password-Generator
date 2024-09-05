const characters = { // object of letters, numbers & symbols
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "^!$%&|[](){}:;.,*+-#@<>~"
}
// select elements 
const lowercase = document.getElementById("lowercase"),
        uppercase = document.getElementById("uppercase"),
        number = document.getElementById("numbers"),
        symbols = document.getElementById("symbols"),
        copyBtn = document.getElementById("copy-btn"),
        passwordLength = document.querySelector(".pass-length .details > span");
        inputBox = document.querySelector("#input-box input");
// password Generator function create 
function passwordGenerator () {
    let passCount = document.getElementById("passCount");
    passwordLength.innerText = passCount.value;
    let staticPassword = "",
    randomPassword = "",
    excludeDuplicate = false;
    if(lowercase.checked) {
        staticPassword += characters.lowercase;
    }
    if(uppercase.checked) {
        staticPassword += characters.uppercase;
    }
    if(number.checked) {
        staticPassword += characters.numbers;
    }
    if(symbols.checked) {
        staticPassword += characters.symbols;
    }
    for(let i = 0; i < passCount.value; i++) {
        let randomCharFinder =  Math.floor(Math.random() * staticPassword.length);
        randomPassword += staticPassword[randomCharFinder];
    }
    inputBox.value = randomPassword;
}
// copy password function 
const copyPassword = () => {
    let copyIcon = document.querySelector(".material-symbols-rounded");
    navigator.clipboard.writeText(inputBox.value); // copying random password
    copyIcon.innerText = "check"; // changing copy icon to tick
    copyIcon.style.color = "#4285F4";
    setTimeout(() => { // after 1500 ms, changing tick icon back to copy
        copyIcon.innerText = "copy_all";
        copyIcon.style.color = "#707070";
    }, 1500);
}
// select generate btn 
const genareateBtn = document.getElementById("generate-btn");
genareateBtn.addEventListener("click", passwordGenerator);
const passCount = document.getElementById("passCount");
passCount.addEventListener("input", passwordGenerator)
// copy button 
copyBtn.addEventListener("click", copyPassword);
