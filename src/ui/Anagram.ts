import { StaticWordLibrary } from "../lib/StaticWordLibrary";

export class Anagram {

    public SCRAMBLED_WORD_INPUT: HTMLInputElement;
    public GUESSED_WORD_INPUT: HTMLInputElement;
    public GUESS_BUTTON: HTMLButtonElement;
    public NEXT_WORD_BUTTON: HTMLButtonElement;
    public wordIdx: number = 0;
    public wordLibrary = StaticWordLibrary.DEFAULT;


    constructor (public container: HTMLElement) {
        
        this.SCRAMBLED_WORD_INPUT = document.createElement("input");
        this.GUESSED_WORD_INPUT = document.createElement("input");
        this.GUESS_BUTTON = document.createElement("button");
        this.NEXT_WORD_BUTTON = document.createElement("button");

        this.SCRAMBLED_WORD_INPUT.textContent = this.wordLibrary.getScrambledWord(this.wordIdx);

        //container.append(this.SCRAMBLED_WORD_INPUT,this.GUESSED_WORD_INPUT)
    }

    SetNextWord() {
        this.wordIdx = (this.wordIdx + 1) % this.wordLibrary.getSize();
    }
}