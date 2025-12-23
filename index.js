const btnEl = document.querySelector(".btn")
const inputEl = document.getElementById("input")
const copyIconEl = document.querySelector(".copy-icon")
const alertContainerEl = document.querySelector(".alert-container")

btnEl.addEventListener("click", ()=>{
    createPassword()
});

copyIconEl.addEventListener("click", ()=>{
    copyPassword();
    if (inputEl.value) {
    alertContainerEl.classList.remove("active");
    setTimeout(()=>{
    alertContainerEl.classList.add("active")
    }, 2000);
    }
});

function createPassword(){
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";
    const passwordLength = 14;
    let password = ""
    for (let index = 0; index < passwordLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNum, randomNum + 1);

    }
 inputEl.value = password;
 alertContainerEl.innerText =
 password + " " + "Copied!";
    }
   
    function copyPassword() {
        inputEl.select();
        inputEl.setSelectionRange(0,9999);
        navigator.clipboard.writeText(inputEl.value);

    }