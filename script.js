"use strict";
const button = document.getElementById("magicButton");
const initialClasses = button.className; // get the initial classes of the button
// get the window size
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
console.log('windowWidth', windowWidth, 'windowHeight', windowHeight);
// get the button size
const buttonWidth = button.offsetWidth;
const buttonHeight = button.offsetHeight;
console.log('buttonWidth', buttonWidth, 'buttonHeight', buttonHeight);
// recieve the current position of the button
const rect = button.getBoundingClientRect();
const currentX = rect.left;
const currentY = rect.top;
console.log(`Current position: ${currentX}px, ${currentY}px`);
// generate random shapes
const shapes = ["shape-circle", "shape-oval", "shape-square", "shape-rectangle", "shape-star"];
console.log('shapes', shapes);
const colors = [
    "#FF5733", // Red shade
    "#33FF57", // Green
    "#3357FF", // Blue
    "#FF33A6", // Pink
    "#FFD433", // Yellow
    "#8E44AD", // Purple
    "#1ABC9C", // Turquoise
    "#E74C3C", // Bright red
    "#3498DB", // Light blue
    "#F1C40F" // Golden yellow
];
const buttonTexts = ["Catch me!", "Almost!", "Try again!", "Too slow!", "Nice try!"];
document.addEventListener("touchmove", () => {
    console.log("Global touchstart triggered");
});
document.body.addEventListener("touchmove", (e) => e.preventDefault(), { passive: false });
function moveButton(e) {
    e.preventDefault();
    // generate random coordinates
    const offsetX = Math.random() * (Math.random() < 0.5 ? -1 : 1) * 150;
    const offsetY = Math.random() * (Math.random() < 0.5 ? -1 : 1) * 150;
    console.log('offsetX', offsetX, 'offsetY', offsetY);
    // create  new coordinates
    let newX = currentX + offsetX;
    let newY = currentY + offsetY;
    //check if the new coordinates are valid
    if (newX < 0)
        newX = 0; // left border
    if (newY < 0)
        newY = 0; // apper border
    if (newX + buttonWidth > windowWidth)
        newX = windowWidth - buttonWidth; // right border
    if (newY + buttonHeight > windowHeight)
        newY = windowHeight - buttonHeight; // botoom border
    //change the shape of the button
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    button.classList.remove("shape-circle", "shape-oval", "shape-square", "shape-rectangle", "shape-star");
    button.classList.add(randomShape);
    // change the color of the button
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    button.style.background = randomColor;
    // change the text of the button
    const randomText = buttonTexts[Math.floor(Math.random() * buttonTexts.length)];
    button.innerText = randomText;
    // if coordinates are valid, update
    button.style.position = "absolute";
    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
    // create a trace of the button
    const trace = document.createElement("div");
    trace.style.position = "absolute";
    trace.style.left = `${button.offsetLeft}px`;
    trace.style.top = `${button.offsetTop}px`;
    trace.style.width = `${button.offsetWidth}px`;
    trace.style.height = `${button.offsetHeight}px`;
    trace.style.backgroundColor = "rgba(67, 64, 64, 0.4)";
    trace.style.borderRadius = button.style.borderRadius;
    trace.style.zIndex = "-1";
    document.body.appendChild(trace);
    setTimeout(() => {
        trace.remove();
    }, 200);
    console.log(`Moved to: ${newX}px, ${newY}px`);
}
function winGame() {
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
        // reset the app
        location.reload();
        button.style.cssText = "";
        button.className = initialClasses;
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
}
//create fuction to check if the button is near the touch
function isNearButton(touchX, touchY) {
    const buttonRect = button.getBoundingClientRect(); // coordinates of the button
    const buttonCenterX = buttonRect.left + buttonRect.width / 2; // center of the button
    const buttonCenterY = buttonRect.top + buttonRect.height / 2;
    // calculate the distance between the button and the touch
    const distance = Math.sqrt(Math.pow(buttonCenterX - touchX, 2) + Math.pow(buttonCenterY - touchY, 2));
    console.log(`Distance to button: ${distance}px`);
    return distance < 80; // if the distance is less than 80px, return true
}
button.addEventListener("mouseover", moveButton);
document.body.addEventListener("touchmove", (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    const touchX = touch.clientX;
    const touchY = touch.clientY;
    if (isNearButton(touchX, touchY)) {
        moveButton(e);
    }
}, { passive: false });
button.addEventListener("click", winGame);
button.addEventListener("touchend", winGame);
function createStars(count) {
    for (let i = 0; i < count; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        star.style.left = `${Math.random() * window.innerWidth}px`;
        star.style.top = `${Math.random() * window.innerHeight}px`;
        star.style.animationDuration = `${Math.random() + 2}s`;
        document.body.appendChild(star);
    }
}
createStars(1000);
