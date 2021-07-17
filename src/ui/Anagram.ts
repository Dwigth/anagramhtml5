import { StaticWordLibrary } from "../lib/StaticWordLibrary";

export class Anagram {

    public SCRAMBLED_WORD_INPUT: HTMLInputElement;
    public GUESSED_WORD_INPUT: HTMLInputElement;
    public GUESS_BUTTON: HTMLButtonElement;
    public NEXT_WORD_BUTTON: HTMLButtonElement;
    public wordIdx: number = 0;
    public wordLibrary = StaticWordLibrary.DEFAULT;


    constructor () {
        this.SCRAMBLED_WORD_INPUT = <HTMLInputElement>document.getElementById("scrambled-input");
        this.GUESSED_WORD_INPUT = <HTMLInputElement>document.getElementById("guess-input");
        this.GUESS_BUTTON = <HTMLButtonElement>document.getElementById("guess-btn");
        this.NEXT_WORD_BUTTON = <HTMLButtonElement>document.getElementById("change-word-btn");

        this.SCRAMBLED_WORD_INPUT.value  = this.wordLibrary.getScrambledWord(this.wordIdx);
        this.SCRAMBLED_WORD_INPUT.readOnly = true;

        this.NEXT_WORD_BUTTON.addEventListener("click",()=> {
            this.SetNextWord()
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
        if(this.wordLibrary.isCorrect(this.wordIdx,userguess)) {
            alert("You guessed it!!!");
            this.SetNextWord();
        } else {
            alert("Mmm try again :(")
        }
    }
}