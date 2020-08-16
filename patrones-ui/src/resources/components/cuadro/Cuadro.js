import React, { state, useState } from "react";
import Pieza from "../pieza/Pieza";
import axios from "axios";

export default function Cuadro({ id, pieza, color, x, y, terreno }) {
  const [selected, setSelected] = useState(false);
  const fetchData = async () => {
    const result = await axios.get("http://localhost:8083/api/v1/cuadro/" + id);
    localStorage.setItem("info_cuadro", JSON.stringify(result.data));
    console.log(result.data);
    setSelected(true);
  };

  const postTerrain = async () => {
    let figura = "";
    let tipo = 0;
    let click = "";
    let jugador = 1;
    figura = localStorage.getItem("selected_terrain");
    tipo = localStorage.getItem("position");
    click = localStorage.getItem("selectedSquare");
    jugador = localStorage.getItem("playing");
    const result = await axios({
      method: "post",
      url: "http://localhost:8083/api/v1/terreno/",
      headers: {},
      data: {
        figura: figura,
        tipo: tipo,
        click: click,
        jugador: jugador, // This is the body part
      },
    });
    console.log(result.data);
    //localStorage.removetItem("selected_terrain");
    //localStorage.removetItem("position");
    //localStorage.removetItem("selectedSquare");
    localStorage.setItem("nextAction", "none");
    setSelected(false);
  };

  const postPiece = async () => {
    let figura = "";
    let click = "";
    let jugador = 1;
    figura = localStorage.getItem("selected_piece");
    click = localStorage.getItem("selectedSquare");
    jugador = localStorage.getItem("playing");
    const result = await axios({
      method: "post",
      url: "http://localhost:8083/api/v1/pieza/",
      headers: {},
      data: {
        figura: figura,
        click: click,
        jugador: jugador, // This is the body part
      },
    });
    console.log(result.data);
    localStorage.setItem("nextAction", "none");
    setSelected(false);
  };

  let toggleSelect = (e) => {
    if (terreno !== "unusable") {
      let isSelected = selected;
      let selectedItem = localStorage.getItem("selectedSquare");
      if (selectedItem !== null) {
        if (selectedItem === id) {
          localStorage.removeItem("selectedSquare");
          localStorage.removeItem("info_cuadro");
          setSelected(false);
        }
      } else {
        let currentAction = localStorage.getItem("nextAction");
        if (currentAction === "selectTerrainSquare") {
          localStorage.setItem("selectedSquare", id);
          postTerrain();
        } else if (currentAction === "selectPieceSquare") {
          postPiece();
        } else {
          localStorage.setItem("selectedSquare", id);
          fetchData();
        }
      }
    }
  };

  return (
    <div onClick={toggleSelect} className="cuadro__border--base">
      <div className="cuadro__container--base">
        <div
          className={
            selected
              ? "cuadro__content--selected cuadro__content--selected-base"
              : "cuadro__content--base"
          }
        >
          <div className={"cuadro__terreno cuadro__terreno--" + terreno}>
            {pieza !== null ? (
              <Pieza pieza={pieza} id={id} />
            ) : (
              <Pieza pieza="empty" id={id} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
