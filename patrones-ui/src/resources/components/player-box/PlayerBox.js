import React, { useState, useEffect } from "react";

export default function PlayerBox({ player }) {
  const [currentPlayer, setCurrentPlayer] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) {
      setCurrentPlayer(player);
      setLoaded(true);
    }
  });
  return (
    <div className="player-box__container--base">
      <div className="player-box__stat-bar player-box__stat-bar--base">
        <div className="player-box__attacks--base">
          <i className="fas fa-fist-raised"></i> Attacks:{" "}
          {player.cantidadAtaques}
        </div>
        <div className="player-box__ultis--base">
          <i className="fas fa-meteor"></i> Specials:{" "}
          {player.cantidadAtaquesEspeciales}
        </div>
        <div className="player-box__movements--base">
          <i className="fas fa-arrows-alt"></i> Moves:{" "}
          {player.cantidadMovimientos}
        </div>
      </div>
    </div>
  );
}
