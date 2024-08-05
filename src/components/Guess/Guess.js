import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

const GuessRow = ({ guessedWord, answer }) => {
  const guessResult = checkGuess(guessedWord, answer);

  return (
    <p className="guess">
      {range(5).map((letter, idx) => (
        <span
          className={`cell ${guessedWord && guessResult[idx].status}`}
          key={letter}
        >
          {guessedWord ? guessedWord[letter] : undefined}
        </span>
      ))}
    </p>
  );
};

function GuessedWords({ guessesArray, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((item, idx) => (
        <GuessRow key={item} guessedWord={guessesArray[idx]} answer={answer} />
      ))}
    </div>
  );
}

export default GuessedWords;
