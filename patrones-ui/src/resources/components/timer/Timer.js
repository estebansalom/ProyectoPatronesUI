import React, { useState, useEffect } from "react";

export default function Timer() {
  const [going, setGoing] = useState(false);
  const [time, setTime] = useState(120);
  const [player, setPlayer] = useState(1);
  useEffect(() => {
    if (going) {
      setTimeout(() => {
        let timeLeft = time;
        let newTime = 0;
        let nextPlayer = 0;
        let currentPlayer = player;

        if (currentPlayer === 1) {
          nextPlayer = 2;
        } else {
          nextPlayer = 1;
        }

        if (timeLeft === 0) {
          newTime = 120;
          setTime(newTime);
          setPlayer(nextPlayer);
        } else {
          timeLeft--;
          setTime(timeLeft);
        }
      }, 1000);
    }
  });

  let toggleGoing = () => {
    let paused = true;
    paused = going;
    paused = !paused;
    setGoing(paused);
  };
  return (
    <div className="timer__container--base">
      <div className="timer__display--base">{time}</div>
      <div className="timer__player--base">Player {player}</div>
      <div className="timer__button--base" onClick={toggleGoing}>
        Go/Pause
      </div>
    </div>
  );
}
