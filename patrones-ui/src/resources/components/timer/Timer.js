import React, { useState, useEffect } from "react";

export default function Timer({ onRestartFunc, onPauseFunc }) {
  const TIME_BASE = 120;
  const [going, setGoing] = useState(false);
  const [time, setTime] = useState(TIME_BASE);
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
          newTime = TIME_BASE;
          setTime(newTime);
          setPlayer(nextPlayer);
          localStorage.setItem("playing", nextPlayer);
          onRestartFunc(nextPlayer);
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
    onPauseFunc(!paused);
  };
  return (
    <div className="timer__container--base">
      <div className="timer__display--base"> {time}</div>
      <div className={"timer__player--" + player}>Player {player}</div>
      <div className="timer__button timer__button--base" onClick={toggleGoing}>
        {going ? (
          <i className="timer__button-icon--base fas fa-pause" />
        ) : (
          <i className="timer__button-icon--base fas fa-play" />
        )}
      </div>
    </div>
  );
}
