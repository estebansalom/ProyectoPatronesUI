import React, { useState } from "react";
import Cuadro from "../cuadro/Cuadro";

export default function Tablero({ cuadros }) {
  let tablero = [];

  let generarTablero = () => {
    // let tab = [];
    // for (let y = 1; y < 21; y++) {
    //   let fila_tablero = [];
    //   for (let x = 0; x < 20; x++) {
    //     let c = {};
    //     fila_tablero[x] = c;
    //   }
    //   tab[y] = fila_tablero;
    // }
    var tab = [],
      i,
      k;
    for (i = 0, k = -1; i < cuadros.length; i++) {
      if (i % 20 === 0) {
        k++;
        tab[k] = [];
      }

      tab[k].push(cuadros[i]);
    }
    tablero = tab;
  };
  generarTablero();

  const [state, setState] = useState(tablero);

  return (
    <div className="tablero__container--basic">
      {tablero.map((fila, cont) => {
        return (
          <div className="tablero__fila--basic" key={cont}>
            {fila.map((cuadro, i) => {
              return (
                <Cuadro
                  key={cuadro.id}
                  id={cuadro.id}
                  x={cuadro.x}
                  y={cuadro.y}
                  pieza={cuadro.pieza}
                  terreno={cuadro.comprado}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
