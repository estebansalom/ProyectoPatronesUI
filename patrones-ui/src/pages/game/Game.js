import React, { useEffect, useState } from "react";
import axios from "axios";
import Tablero from "../../resources/components/tablero/Tablerov2";

import Timer from "../../resources/components/timer/Timer";
import GameMenu from "../../resources/components/menu/GameMenu";

export default function Game() {
  const CASTLE_BASE = { posicion: 0, idDueno: 0 };
  let C1 = CASTLE_BASE;
  let C2 = CASTLE_BASE;

  localStorage.setItem("nextAction", "none");
  const [cuadros, setCuadros] = useState([]);
  const [castillos, setCastillos] = useState([C1, C2]);
  const [loaded, setLoaded] = useState(false);
  const [playing, setPlaying] = useState(1);
  const [paused, setPaused] = useState(true);

  const fetchData = async () => {
    const resCuadros = await axios("http://localhost:8083/api/v1/cuadro");
    setCuadros(resCuadros.data);

    const resCastillos = await axios("http://localhost:8083/api/v1/castillo");
    setCastillos(resCastillos.data);
    setLoaded(true);
    localStorage.removeItem("selectedSquare");
    localStorage.removeItem("info_cuadro");
    localStorage.removeItem("player_going");
  };

  let updatePlayerTurn = (nowPlaying) => {
    setPlaying(nowPlaying);
    fetchData();
  };

  let togglePauseGame = (currentState) => {
    setPaused(currentState);
  };

  useEffect(() => {
    if (!loaded) {
      fetchData();
    }
  }, [playing]);

  return (
    <div className="game__container--base">
      <GameMenu />
      <div className="game__board-holder game__board-holder--base">
        {paused ? (
          <div className="game__pause-overlay game__pause-overlay--base">
            Paused
          </div>
        ) : (
          <Tablero cuadros={cuadros} castillos={castillos} isPaused={paused} />
        )}
      </div>
      <div className="game__help-bar game__help-bar--base">
        <Timer
          onRestartFunc={updatePlayerTurn}
          onPauseFunc={togglePauseGame}
        ></Timer>
      </div>
    </div>
  );
}
