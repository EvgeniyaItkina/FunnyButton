const button = document.getElementById("magicButton") as HTMLButtonElement;
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
console.log('windowWidth', windowWidth, 'windowHeight', windowHeight);
const buttonWidth = button.offsetWidth;
const buttonHeight = button.offsetHeight;


button.addEventListener("mouseover", () => {
    // recieve the current position of the button
    const rect = button.getBoundingClientRect();
    const currentX = rect.left;
    const currentY = rect.top;

    // generate random coordinates
    const offsetX = (Math.random() - 0.5) * 100; // ±50px
    const offsetY = (Math.random() - 0.5) * 100; // ±50px
    console.log('offsetX', offsetX, 'offsetY', offsetY);

    // create  new coordinates
    let newX = currentX + offsetX;
    let newY = currentY + offsetY;

    //check if the new coordinates are valid
    if (newX < 0) newX = 0; // Левая граница
    if (newY < 0) newY = 0; // Верхняя граница
    if (newX + buttonWidth > windowWidth) newX = windowWidth - buttonWidth; // right border
    if (newY + buttonHeight > windowHeight) newY = windowHeight - buttonHeight; // botoom border



    // if coordinates are valid, update
    button.style.position = "absolute";
    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;

    console.log(`Moved to: ${newX}px, ${newY}px`);
});