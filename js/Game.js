/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// create the Game class
class Game {
    // include constructor that initializes several necessary properties 
    constructor(missed, phrases, activePhrase) {
        // track the number of missed guesses by the player
        this.missed = 0;
        // an array of phrases for players to have a guess at
        this.phrases = [
            new Phrase("He who is brave is free"),
            new Phrase("May the Force be with you"),
            new Phrase("Impossible is for the unwilling"),
            new Phrase("Leave no stone unturned"),
            new Phrase("Houston we have a problem")
        ];
        // empty phrase object
        this.activePhrase = null;

    }

    // get a random phrase
    getRandomPhrase() {
        const randomPhrase = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomPhrase];
    }
    
    // hide the screen overlay and call the methods to start the game
    startGame() {
        const gameOverlay = document.getElementById("overlay");
        gameOverlay.style.display = "none";

        this.activePhrase = this.getRandomPhrase();
        
        this.activePhrase.addPhraseToDisplay();

        this.activePhraseLetters = document.querySelectorAll('#phrase ul li');
    }

    // handle player interaction with keyboard
    handleInteraction(key) {
        const clickedKey = key.textContent.toLowerCase();
        const phraseLetters = this.activePhrase.phrase.toLowerCase(); 
        if (phraseLetters.includes(clickedKey)) {
            key.classList.add("chosen");
            this.activePhrase.showMatchedLetter(clickedKey);
            this.checkForWin();
        } else {
            key.classList.add("wrong");
            this.removeLife();
        }
    }

    // check to see if the player has reached win condition
    checkForWin() {
        const completedPhrase = document.querySelectorAll('#phrase li.letter.hide');
        
        if (completedPhrase.length === 0) {
            this.gameOver(true);
        }
    }
    // remove a heart container for wrong guesses 
    removeLife() {
        const lifePoints = document.querySelectorAll(".tries img");

        this.missed++;
    
        lifePoints[this.missed - 1].src = "images/lostHeart.png";

        if (this.missed === 5) {
            this.gameOver(false); 
        } 
    }
    // trigger game over for either winning or losing
    gameOver(win) {
        const gameOverlay = document.getElementById("overlay");
        const gameOverMessage = document.getElementById("game-over-message");
        if (win) {
            gameOverMessage.textContent = "You win!";
            gameOverlay.className = "win";
        } else {
            gameOverMessage.textContent = "Better luck next time...";
            gameOverlay.className = "lose";
        }
        gameOverlay.style.display = "flex";
        
        document.getElementById('btn__reset').addEventListener('click', () => {
            this.resetGame();
        });
    }
    // reset the game after winning or losing 
    resetGame() {
        this.missed = 0;
        const keyboardKeys = document.querySelectorAll('.key');
        keyboardKeys.forEach(key => {
            key.classList.remove('chosen', 'wrong');
        });
        const phraseList = document.querySelector('#phrase ul');
        phraseList.innerHTML = ''; 
        this.startGame(); 
    }

}

// END GAME CLASS