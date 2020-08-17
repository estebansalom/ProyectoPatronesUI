import React from "react";
import DiceBox from "../dice-box/DiceBox";

export default function PlayArea({ playing, player }) {
  return (
    <div className="playarea__container">
      <div
        className={
          "playarea__stat-container playarea__stat-container--" + playing
        }
      >
        <div className={"playarea-player-stats--" + playing}></div>
      </div>
      <div
        className={
          "playarea__piece-container playarea__piece-container--" + playing
        }
      ></div>
      <div
        className={
          "playarea__dice-container playarea__dice-container--" + playing
        }
      >
        <DiceBox playing={playing}></DiceBox>
      </div>
    </div>
  );
}
