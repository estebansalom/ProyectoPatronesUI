import React, { useState } from "react";
import Cuadro from "../cuadro/Cuadro";

export default function Tablero({ cuadros, isPaused, castillos }) {
  let tablero = [];
  localStorage.removeItem("selectedSquare");
  localStorage.removeItem("info_cuadro");

  let generarFilaCastillo = (indice, castillo) => {
    let fila_tablero = [];
    let y;
    let cuadro = {};
    let terreno = "";
    castillo == 1 ? (y = 0) : (y = 21);
    castillo == 1 ? (terreno = "taken1") : (terreno = "taken2");
    for (let x = 0; x < 20; x++) {
      if (indice === x) {
        cuadro = {
          id: "x" + x + "y" + y + "-tb1",
          x: x,
          y: y,
          pieza: "castle",
          comprado: terreno,
        };
      } else {
        cuadro = {
          id: x + "test" + y,
          x: x,
          y: y,
          pieza: "",
          comprado: "unusable",
        };
      }
      fila_tablero[x] = cuadro;
    }
    return fila_tablero;
  };

  let generarTablero = () => {
    let filaC1 = generarFilaCastillo(
      castillos[0].posicion,
      castillos[0].idDueno
    );
    let filaC2 = generarFilaCastillo(
      castillos[1].posicion,
      castillos[1].idDueno
    );
    var tab = [],
      i,
      k;
    tab[0] = filaC1;
    for (i = 0, k = 0; i < cuadros.length; i++) {
      if (i % 20 === 0) {
        k++;
        tab[k] = [];
      }

      tab[k].push(cuadros[i]);
    }
    tablero = tab;
    tab[21] = filaC2;
  };

  generarTablero();

  return (
    <div className={"tablero__container--base"}>
      {isPaused ? (
        <div className="game__pause-overlay--base">
          {tablero.map((fila, cont) => {
            return (
              <div className="tablero__fila--base" key={cont}>
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
      ) : (
        tablero.map((fila, cont) => {
          return (
            <div className="tablero__fila--base" key={cont}>
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
        })
      )}
    </div>
  );
}
