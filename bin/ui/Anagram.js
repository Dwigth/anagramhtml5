import { StaticWordLibrary } from "../lib/StaticWordLibrary";
export class Anagram {
    constructor(container) {
        this.container = container;
        this.wordIdx = 0;
        this.wordLibrary = StaticWordLibrary.DEFAULT;
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
//# sourceMappingURL=Anagram.js.map