(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Anagram_1 = require("./ui/Anagram");
const game = new Anagram_1.Anagram();

},{"./ui/Anagram":4}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WordLibrary_1 = require("./WordLibrary");
class StaticWordLibrary extends WordLibrary_1.WordLibrary {
    /**
     * Singleton class.
     */
    StaticWordLibrary() {
    }
    /**
     * Gets the word at a given index.
     * @param idx index of required word
     * @return word at that index in its natural form
     */
    getWord(idx) {
        return StaticWordLibrary.WORD_LIST[idx];
    }
    /**
     * Gets the word at a given index in its scrambled form.
     * @param idx index of required word
     * @return word at that index in its scrambled form
     */
    getScrambledWord(idx) {
        return StaticWordLibrary.SCRAMBLED_WORD_LIST[idx];
    }
    /**
     * Gets the number of words in the library.
     * @return the total number of plain/scrambled word pairs in the library
     */
    getSize() {
        return StaticWordLibrary.WORD_LIST.length;
    }
    /**
     * Checks whether a user's guess for a word at the given index is correct.
     * @param idx index of the word guessed
     * @param userGuess the user's guess for the actual word
     * @return true if the guess was correct; false otherwise
     */
    isCorrect(idx, userGuess) {
        return userGuess === this.getWord(idx);
    }
}
StaticWordLibrary.WORD_LIST = [
    "abstraction",
    "ambiguous",
    "arithmetic",
    "backslash",
    "bitmap",
    "circumstance",
    "combination",
    "consequently",
    "consortium",
    "decrementing",
    "dependency",
    "disambiguate",
    "dynamic",
    "encapsulation",
    "equivalent",
    "expression",
    "facilitate",
    "fragment",
    "hexadecimal",
    "implementation",
    "indistinguishable",
    "inheritance",
    "internet",
    "java",
    "localization",
    "microprocessor",
    "navigation",
    "optimization",
    "parameter",
    "patrick",
    "pickle",
    "polymorphic",
    "rigorously",
    "simultaneously",
    "specification",
    "structure",
    "lexical",
    "likewise",
    "management",
    "manipulate",
    "mathematics",
    "hotjava",
    "vertex",
    "unsigned",
    "traditional"
];
StaticWordLibrary.SCRAMBLED_WORD_LIST = [
    "batsartcoin",
    "maibuguos",
    "ratimhteci",
    "abkclssha",
    "ibmtpa",
    "iccrmutsnaec",
    "ocbmnitaoni",
    "ocsnqeeutnyl",
    "ocsnroitmu",
    "edrcmeneitgn",
    "edepdnneyc",
    "idasbmgiauet",
    "ydanicm",
    "neacsplutaoni",
    "qeiuaveltn",
    "xerpseisno",
    "aficilatet",
    "rfgaemtn",
    "ehaxedicalm",
    "milpmeneatitno",
    "niidtsniugsiahleb",
    "niehiratcen",
    "nietnret",
    "ajav",
    "olacilazitno",
    "imrcpoorecssro",
    "anivagitno",
    "poitimazitno",
    "aparemert",
    "aprtcki",
    "ipkcel",
    "opylomprich",
    "irogorsuyl",
    "isumtlnaoesuyl",
    "psceficitaoni",
    "tsurtcreu",
    "elixalc",
    "ilekiwse",
    "amanegemtn",
    "aminupalet",
    "amhtmetacsi",
    "ohjtvaa",
    "evtrxe",
    "nuisngde",
    "rtdatioialn"
];
StaticWordLibrary.DEFAULT = new StaticWordLibrary();
exports.StaticWordLibrary = StaticWordLibrary;

},{"./WordLibrary":3}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WordLibrary {
    constructor() { }
}
exports.WordLibrary = WordLibrary;

},{}],4:[function(require,module,exports){
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

},{"../lib/StaticWordLibrary":2}]},{},[1]);
