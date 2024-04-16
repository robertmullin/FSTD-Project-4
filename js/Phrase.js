/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

// create the Phrase class
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();

    }
    // add letter placeholders to the display when the game starts
    addPhraseToDisplay() {
        const phraseList = document.getElementById("phrase").querySelector("ul");
        for (let i=0; i < this.phrase.length; i++) {
            const character = this.phrase[i];
            const listItem = document.createElement("li");
            if (character === " ") {
                listItem.classList.add('space');
            } else {
                listItem.classList.add('hide', 'letter', character);
                listItem.textContent = character;
            }

            phraseList.appendChild(listItem);
        } 
    } 
    // check to see if the letter selected by the player matches a letter in the phrase
    checkLetter(letter) {
        const phraseArray = this.phrase.split("");
        return phraseArray.includes(letter); 
      }
    // reveal the letters on the board that matches the player's selections
    showMatchedLetter(letter) {
        const matchedLetters = document.getElementsByClassName(letter);
        for (let i = 0; i < matchedLetters.length; i++) {
            matchedLetters[i].classList.remove("hide");
            matchedLetters[i].classList.add("show");
        }
    }
}