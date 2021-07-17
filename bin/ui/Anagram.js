"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StaticWordLibrary_1 = require("../lib/StaticWordLibrary");
class Anagram {
    constructor() {
        this.wordIdx = 0;
        this.wordLibrary = StaticWordLibrary_1.StaticWordLibrary.DEFAULT;
        this.SCRAMBLED_WORD_INPUT = document.getElementById("scrambled-input");
        this.GUESSED_WORD_INPUT = document.getElementById("guess-input");
        this.GUESS_BUTTON = document.getElementById("guess-btn");
        this.NEXT_WORD_BUTTON = document.getElementById("change-word-btn");
        this.SCRAMBLED_WORD_INPUT.value = this.wordLibrary.getScrambledWord(this.wordIdx);
        this.SCRAMBLED_WORD_INPUT.readOnly = true;
        this.NEXT_WORD_BUTTON.addEventListener("click", () => {
            this.SetNextWord();
        });
        this.GUESS_BUTTON.addEventListener("click", () => {
            this.Guess();
        });
    }
    /**
     * Set the next value in the input and clean the user guess
     */
    SetNextWord() {
        this.wordIdx = (this.wordIdx + 1) % this.wordLibrary.getSize();
        this.SCRAMBLED_WORD_INPUT.value = this.wordLibrary.getScrambledWord(this.wordIdx);
        this.GUESSED_WORD_INPUT.value = "";
    }
    /**
     * check whether if the user guess is correct or is not and change the next word if needed
     */
    Guess() {
        const userguess = this.GUESSED_WORD_INPUT.value;
        if (this.wordLibrary.isCorrect(this.wordIdx, userguess)) {
            alert("You guessed it!!!");
            this.SetNextWord();
        }
        else {
            alert("Mmm try again :(");
        }
    }
}
exports.Anagram = Anagram;
//# sourceMappingURL=Anagram.js.map