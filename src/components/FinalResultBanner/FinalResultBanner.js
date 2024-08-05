import React from "react";

function FinalResultBanner({ gameStatus, answer, numOfGuesses }) {
  if (gameStatus === "inProgress") {
    return null;
  }

  console.log("numOfGuesses", numOfGuesses);

  if (gameStatus === "won") {
    return (
      <div class="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {numOfGuesses} guesses</strong>.
        </p>
      </div>
    );
  }

  return (
    <div class="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}

export default FinalResultBanner;
