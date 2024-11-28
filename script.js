"use strict";
const button = document.getElementById("magicButton");
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
console.log('windowWidth', windowWidth, 'windowHeight', windowHeight);
const buttonWidth = button.offsetWidth;
const buttonHeight = button.offsetHeight;
console.log('buttonWidth', buttonWidth, 'buttonHeight', buttonHeight);
// recieve the current position of the button
const rect = button.getBoundingClientRect();
const currentX = rect.left;
const currentY = rect.top;
console.log(`Current position: ${currentX}px, ${currentY}px`);
// generate random shapes
const shapes = ["50%", "25%", "0%"];
// Доступные цвета
const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A6", "#FFD433"];
button.addEventListener("mouseover", () => {
    // generate random coordinates
    const offsetX = Math.random() * (Math.random() < 0.5 ? -1 : 1) * 150;
    //0.4*(-1)=-0.4;
    const offsetY = Math.random() * (Math.random() < 0.5 ? -1 : 1) * 150;
    //0.6*1=0.6;
    console.log('offsetX', offsetX, 'offsetY', offsetY);
    // create  new coordinates
    let newX = currentX + offsetX;
    //550+(-0.4)=549.6;
    let newY = currentY + offsetY;
    //371+0.6=371.6;
    //check if the new coordinates are valid
    if (newX < 0)
        newX = 0; // left border
    if (newY < 0)
        newY = 0; // apper border
    if (newX + buttonWidth > windowWidth)
        newX = windowWidth - buttonWidth; // right border
    //549.6+171>1286
    if (newY + buttonHeight > windowHeight)
        newY = windowHeight - buttonHeight; // botoom border
    //371.6+63>806
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    button.style.borderRadius = randomShape;
    // Меняем цвет
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    button.style.background = randomColor;
    // if coordinates are valid, update
    button.style.position = "absolute";
    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
    console.log(`Moved to: ${newX}px, ${newY}px`);
});

button.addEventListener("click", () => {
    //create a popup win
    const winPopup = document.createElement("div");
    winPopup.innerText = "You win!";
    document.body.appendChild(winPopup);

    //create a button to restart the game
    const restartButton = document.createElement("button");
    restartButton.innerText = "Start New Game";
    winPopup.appendChild(restartButton);
    restartButton.addEventListener("click", () => {
        // remove the popup
        document.body.removeChild(winPopup);
        // reset the button position
        button.style.position = "static";
    });

    //styles for the popup
    winPopup.style.display = "flex";
    winPopup.style.flexDirection = "column";
    winPopup.style.alignItems = "center";
    winPopup.style.justifyContent = "center";
    winPopup.style.position = "fixed";
    winPopup.style.top = "50%";
    winPopup.style.left = "50%";
    winPopup.style.transform = "translate(-50%, -50%)";
    winPopup.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    winPopup.style.color = "#fff";
    winPopup.style.textAlign = "center";
    winPopup.style.padding = "30px 20px";
    winPopup.style.borderRadius = "10px";
    winPopup.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.5)";
    winPopup.style.zIndex = "1000";

    //styles for the button
    restartButton.style.marginTop = "20px";
    restartButton.style.padding = "10px 20px";
    restartButton.style.fontSize = "16px";
    restartButton.style.color = "#fff";
    restartButton.style.backgroundColor = "#6a0572";
    restartButton.style.border = "none";
    restartButton.style.borderRadius = "5px";
    restartButton.style.cursor = "pointer";
    restartButton.style.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.2)";
    restartButton.style.transition = "all 0.3s ease";

});