
let display = document.querySelector('.display');
let characters = document.querySelectorAll('.character');
characters.forEach(char => {
    char.addEventListener('click', setDisplay);
})

function setDisplay(e) {
    if (display.textContent.length < 15 && !this.classList.contains('operator') && !this.classList.contains('special')) {
        display.textContent += this.textContent;
        console.log(display.textContent.length);
    }
}