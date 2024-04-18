/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// APP JS
document.addEventListener('DOMContentLoaded', () => {
    
    let game = new Game();

    document.getElementById('btn__reset').addEventListener('click', () => {
        game.startGame();
    });

    const keyboard = document.getElementById('qwerty');
    
    keyboard.addEventListener('click', (event) => {
        if (event.target.className === 'key') {
            game.handleInteraction(event.target);
        }
    });
});

// END APP JS 