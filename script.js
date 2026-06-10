// Dark mode

const darkBtn = document.getElementById("dark-btn");

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

});

// Change text 

const changebtn = document.getElementById("Change-btn");
const text = document.getElementById("changing-text");
changebtn.addEventListener("click", () => {
    text.textContent = "JavaScript Makes Websites Interactive!";
});

//project count

let count = 0;

const counttext = document.getElementById("count");

document.getElementById("increase-btn")
.addEventListener("click", () => {
    count++;
    counttext.textContent = count;
});

document.getElementById("decrease-btn")
.addEventListener("click", () => {
    count--;
    counttext.textContent = count;
});