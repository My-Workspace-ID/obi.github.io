const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");

    if (mySrc === "images/gemini-new-seeklogo.svg") {
        myImage.setAttribute("src", "images/chatgpt-3.svg");
    } else {
        myImage.setAttribute("src", "images/gemini-new-seeklogo.svg");
    }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

// pemanggil ucapan selamat user

function setUserName() {
    const myName = prompt("Tolong Masukkkan Nama Kamu");
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Pembahasan AI, ${myName}`;
}}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Pembahasan AI, ${storedName}`;
}

myButton.addEventListener("click", () => {
    setUserName();
})