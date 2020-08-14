import React, { useEffect, useState } from "react";
import Cuadro from "../cuadro/Cuadro";

export default function Tablero({ cuadros }) {
  let tablero = [];

  let [matriz, setMatriz] = useState(cuadros);

  let getRandomInt = (max, min) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  let cas1 = getRandomInt(19, 0);
  let cas2 = getRandomInt(19, 0);

  let generarFilaCastillo = (indice, castillo) => {
    let fila_tablero = [];
    let y;
    let cuadro = {};
    let terreno = "";
    castillo === 1 ? (y = 0) : (y = 21);
    castillo === 1 ? (terreno = "taken1") : (terreno = "taken2");
    for (let x = 0; x < 20; x++) {
      if (indice === x) {
        cuadro = {
          id: x + "test" + y,
          x: x,
          y: y,
          pieza: "castle",
          terreno: terreno,
        };
      } else {
        cuadro = {
          id: x + "test" + y,
          x: x,
          y: y,
          pieza: "",
          terreno: "unusable",
        };
      }
      fila_tablero[x] = cuadro;
    }
    return fila_tablero;
  };

  //tablero[0] = generarFilaCastillo(cas1, 1);
  // for (let y = 1; y < 21; y++) {
  //   let fila_tablero = [];
  //   for (let x = 0; x < 20; x++) {
  //     let cuadro = {
  //       id: x + "test" + y,
  //       x: x,
  //       y: y,
  //       pieza: "",
  //       terreno: "basic",
  //     };
  //     fila_tablero[x] = cuadro;
  //   }
  //   tablero[y] = fila_tablero;
  // }
  //tablero[21] = generarFilaCastillo(cas2, 2);
  console.log(tablero);

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
                  terreno={cuadro.terreno}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
