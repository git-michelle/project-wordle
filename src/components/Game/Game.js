import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import InputForm from "../InputForm";
import Guess from "../Guess";
// Pick a random word on every pageload.
const answer = sample(WORDS);

function Game() {
  const [guessesArray, setGuessesArray] = React.useState([]);

  return (
    <>
      <Guess guessesArray={guessesArray} answer={answer} />
      <InputForm
        guessesArray={guessesArray}
        setGuessesArray={setGuessesArray}
        answer={answer}
      />
    </>
  );
}

export default Game;
