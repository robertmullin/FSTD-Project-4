/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// create the Game class
class Game {
    // include constructor that initializes several necessary properties 
    constructor() {
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
        this.activePhrase.getRandomPhrase();
    }

}