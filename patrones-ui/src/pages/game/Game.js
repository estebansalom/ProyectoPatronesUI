import React, { useEffect, useState } from "react";
import axios from "axios";
import Tablero from "../../resources/components/tablero/Tablerov2";
import SelectList from "../../resources/components/selectList/list/SelectList";
import SelectItem from "../../resources/components/selectList/item/SelectItem";
import Timer from "../../resources/components/timer/Timer";

export default function Game() {
  const [cuadros, setCuadros] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [playing, setPlaying] = useState(1);
  const [paused, setPaused] = useState(true);

  const fetchData = async () => {
    const result = await axios("http://localhost:8083/api/v1/cuadro");
    setCuadros(result.data);
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
      <div className="game__player-bar game__player-bar--base">
        <SelectList>
          <SelectItem
            text="List Item 1"
            itemLog="1"
            itemKey="item"
            img="arch"
          />
          <SelectItem
            text="List Item 2"
            itemLog="2"
            itemKey="item"
            img="tank"
          />
          <SelectItem text="List Item 3" itemLog="3" itemKey="item" img="inf" />
          <SelectItem
            text="List Item 4"
            itemLog="4"
            itemKey="item"
            img="none"
          />
        </SelectList>
      </div>
      <div className="game__board-holder game__board-holder--base">
        {paused ? (
          <div className="game__pause-overlay game__pause-overlay--base">
            Paused
          </div>
        ) : (
          <Tablero cuadros={cuadros} isPaused={paused} />
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
