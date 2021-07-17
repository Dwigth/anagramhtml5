import { WordLibrary } from "./WordLibrary";
export class StaticWordLibrary extends WordLibrary {
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
//# sourceMappingURL=StaticWordLibrary.js.map