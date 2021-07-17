export abstract class WordLibrary {
    protected constructor() {}
    
     /**
     * Gets the word at a given index.
     * @param idx index of required word
     * @return word at that index in its natural form
     */
      public abstract getWord(idx:number): string;

      /**
       * Gets the word at a given index in its scrambled form.
       * @param idx index of required word
       * @return word at that index in its scrambled form
       */
      public abstract getScrambledWord(idx:number): string;
  
      /**
       * Gets the number of words in the library.
       * @return the total number of plain/scrambled word pairs in the library
       */
      public abstract getSize(): number;
  
      /**
       * Checks whether a user's guess for a word at the given index is correct.
       * @param idx index of the word guessed
       * @param userGuess the user's guess for the actual word
       * @return true if the guess was correct; false otherwise
       */
      public abstract isCorrect(idx:number, userGuess: string): boolean;
}