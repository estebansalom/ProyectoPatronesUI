import React, { useEffect, useState } from "react";
import axios from "axios";
import Tablero from "../../resources/components/tablero/Tablerov2";

import Timer from "../../resources/components/timer/Timer";
import GameMenu from "../../resources/components/menu/GameMenu";
import PlayArea from "../../resources/components/playarea/PlayArea";

export default function Game() {
  const CASTLE_BASE = { posicion: 0, idDueno: 0 };
  let C1 = CASTLE_BASE;
  let C2 = CASTLE_BASE;
  localStorage.removeItem("info_cuadro");
  localStorage.removeItem("selectedSquare");
  localStorage.setItem("nextAction", "none");
  const [cuadros, setCuadros] = useState([]);
  const [castillos, setCastillos] = useState([C1, C2]);
  const [loaded, setLoaded] = useState(false);
  const [playing, setPlaying] = useState(1);
  const [playerChanged, setPlayerChanged] = useState(false);
  const [paused, setPaused] = useState(true);
  const [player, setPlayer] = useState({});
  const [currentAction, setCurrentAction] = useState("none");

  const fetchData = async () => {
    const resCuadros = await axios("http://localhost:8083/api/v1/cuadro");
    setCuadros(resCuadros.data);
    console.log(resCuadros.data);

    const resCastillos = await axios("http://localhost:8083/api/v1/castillo");
    setCastillos(resCastillos.data);
    console.log(resCastillos.data);

    const resJugador = await axios(
      "http://localhost:8083/api/v1/jugador/" + playing
    );
    setPlayer(resJugador.data);
    localStorage.setItem("player", JSON.stringify(resJugador.data));
    setLoaded(true);
    localStorage.removeItem("player_going");
  };

  let updatePlayerTurn = (nowPlaying) => {
    setPlaying(nowPlaying);
    setPlayerChanged(true);
    fetchData();
  };

  let togglePauseGame = (currentState) => {
    setPaused(currentState);
  };

  let reloadBoard = () => {
    setLoaded(false);
  };

  useEffect(() => {
    if (!loaded || playerChanged) {
      let nextMenuAction = localStorage.getItem("nextAction");
      if (nextMenuAction === null || nextMenuAction === undefined) {
        localStorage.setItem("nextAction", "none");
        setCurrentAction(nextMenuAction);
      } else {
        setCurrentAction(nextMenuAction);
      }
      fetchData();
      setPlayerChanged(false);
    }
  }, [playing]);

  return (
    <div className="game__container--base">
      <GameMenu currentAction={currentAction} />
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
        <Timer onRestartFunc={updatePlayerTurn} onPauseFunc={togglePauseGame} />
        <PlayArea playing={playing} player={player} />
      </div>
    </div>
  );
}
