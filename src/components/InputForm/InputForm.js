import React from "react";
import FinalResultBanner from "../FinalResultBanner/FinalResultBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function InPutForm({ guessesArray, setGuessesArray, answer }) {
  const [input, setInput] = React.useState("");
  const [gameStatus, setGameStatus] = React.useState("inProgress");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length === 5) {
      const newGuessesArray = [...guessesArray, input];
      setGuessesArray(newGuessesArray);

      if (input === answer) {
        setGameStatus("won");
      } else if (newGuessesArray.length === NUM_OF_GUESSES_ALLOWED) {
        setGameStatus("lost");
      }

      setInput("");
    }
  };

  const handleInput = (e) => {
    if (guessesArray.length >= NUM_OF_GUESSES_ALLOWED) {
      return;
    }
    setInput(e.target.value.toUpperCase());
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit} method="post">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={input}
        onChange={handleInput}
        pattern="[A-Z]{5,5}"
        maxLength={5}
        disabled={gameStatus !== "inProgress"}
      />
      <FinalResultBanner
        gameStatus={gameStatus}
        answer={answer}
        numOfGuesses={guessesArray.length}
      />
    </form>
  );
}

export default InPutForm;
