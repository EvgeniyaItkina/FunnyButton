# FunnyButton Game
FunnyButton is a small interactive game where the button "runs away" from the user's cursor. If the user manages to click the button, a congratulatory message "You win!" appears along with a button to restart the game.


📋 *Features*

- **Dynamic movement:**  The button moves randomly when the cursor hovers over it.
- **Custom styles:** The button changes shape, color, and text dynamically.
- **Traces**: A temporary trace appears where the button was previously located.
- **Winning screen**: Displays a congratulatory popup with a "Start New Game" button when the user clicks the button.
- **Mobile-friendly interaction**: The game works on both desktop and mobile devices with intuitive touch gestures.

🛠️ *Technologies Used*

<u>HTML</u>: Game structure.
<u>CSS</u> (generated dynamically in TypeScript): Styles for the button, popup, and controls.
<u>TypeScript</u>: Handles game logic, including movement, shape, and color changes.

🚀 *Installation and Launch*

<u>Clone the repository</u>:

git clone https://github.com/your-username/FunnyButton.git
cd FunnyButton
<u>Run the project</u>:

Ensure you have a local server (e.g., Live Server for VS Code).
Open index.html in your browser using Live Server.
<u>Enjoy the game!</u>

📖 *Project Structure*

FunnyButton/ </br>
├── index.html       # Main HTML file<br>
├── script.js        # Game logic written in TypeScript (compiled to JavaScript)<br>
└── README.md        # Project documentation<br>


📚 *How to Play*

## On Desktop:
Hover over the "Catch me!" button.
The button will move, changing its shape and color.
Try to click the button.
If you succeed, a "You win!" message will appear, along with a button to restart the game.

## On Mobile:
Move your finger across the screen. The button will detect proximity and move randomly.
Try to tap the button as it moves.
If you succeed, a "You win!" message will appear, along with a button to restart the game.
<u>Note: To enhance the experience on touch devices, the game disables scrolling while playing.</u>

🖌️ *Styles*

All styles are dynamically generated in TypeScript. 
The button and popup have a modern design with smooth transitions and shadows.

📱 *Mobile-Specific Notes*

1. No Scrolling During Play: Scrolling is disabled during the game to prevent accidental movement of the page while interacting with the button.

2. Proximity Detection: The button reacts to your touch proximity. If your finger gets close to the button, it will jump to a new position.

3. Optimized Touch Interaction:

The game uses touchmove and touchend events for precise control on mobile.
Make sure your browser supports touch events for the best experience.