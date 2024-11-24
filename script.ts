const button = document.getElementById("magicButton") as HTMLButtonElement;
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
console.log('windowWidth', windowWidth, 'windowHeight', windowHeight);



button.addEventListener("mouseover", () => {
    let randomX: number;
    let randomY: number;

    do {
        // generate random
        randomX = Math.random() * (windowWidth - button.offsetWidth);
        randomY = Math.random() * (windowHeight - button.offsetHeight);
        console.log('randomX', randomX );
        console.log('randomY', randomY );
        

        // check if the button is already in the window
    } while (
        randomX < 0 ||
        randomY < 0 ||
        randomX + button.offsetWidth > windowWidth ||
        randomY + button.offsetHeight > windowHeight
    );

    // if coordinates are valid, update
    button.style.position = "absolute";
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
});