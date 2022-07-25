
let display = document.querySelector('.display');
let characters = document.querySelectorAll('.character');
characters.forEach(char => {
    char.addEventListener('click', setDisplay);
})

function setDisplay(e) {
    if (!this.classList.contains('operator') && !this.classList.contains('special')) {
        if (display.textContent.length < 18){
            if(this.textContent.includes('.')) {
                if (!display.textContent.includes('.')) {
                    display.textContent += this.textContent;
                }
            } else {
                display.textContent += parseFloat(this.textContent);
                console.log(display.textContent.length);
            }
        } 
    } else if (this.classList.contains('special')) {
        if (this.textContent.includes('C')) {
            display.textContent = '';
        } else if(this.textContent.includes('+/-')) {
            display.textContent *= -1;
        } else {
            console.log('divide');
            display.textContent /= 100;
        }
    }
    // if (display.textContent.length < 18) {
    //     if (!this.classList.contains('operator') && !this.classList.contains('special')) {
    //         display.textContent += parseFloat(this.textContent);
    //         console.log(display.textContent.length);
    //     }else if (this.classList.contains('special')) {
    //         if (this.textContent.includes('C')) {
    //             display.textContent = '';
    //         } else if(this.textContent.includes('+/-')) {
    //             display.textContent *= -1;
    //         } else {
    //             console.log('divide');
    //             display.textContent /= 100;
    //         }
    //     }
    // } 
}
    