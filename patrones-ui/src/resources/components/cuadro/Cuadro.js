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
  let toggleSelect = (e) => {
    let isSelected = selected;
    let selectedItem = localStorage.getItem("selectedSquare");
    if (selectedItem !== null) {
      if (selectedItem === id) {
        localStorage.removeItem("selectedSquare");
        localStorage.removeItem("info_cuadro");
        setSelected(false);
      }
    } else {
      localStorage.setItem("selectedSquare", id);

      fetchData();
    }
  };

  return (
    <div onClick={toggleSelect} className="cuadro__border--base">
      <div className="cuadro__container--base">
        <div
          className={
            selected ? "cuadro__content--selected" : "cuadro__content--base"
          }
        >
          <div className={"cuadro__terreno cuadro__terreno--" + terreno}>
            {pieza !== null ? (
              <Pieza pieza={pieza} id={id} />
            ) : (
              <div className="cuadro__vacio--base">
                {x} - {y}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
