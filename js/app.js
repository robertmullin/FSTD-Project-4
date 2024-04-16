/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

document.addEventListener('DOMContentLoaded', () => {
    // Create a new instance of the Game class
    let game = new Game();

    // Add a click event listener to the "Start Game" button
    document.getElementById('btn__reset').addEventListener('click', () => {
        // Start the game
        game.startGame();
    });

    // Add click event listeners to each onscreen keyboard button
    const keyboard = document.getElementById('qwerty');
    keyboard.addEventListener('click', (event) => {
        // Check if a button was clicked
        if (event.target.className === 'key') {
            // Call the handleInteraction() method on the Game object
            game.handleInteraction(event.target);
        }
    });
});