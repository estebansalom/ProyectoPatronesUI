import React, { useState } from "react";

export default function Popup({ showing, res }) {
  const [display, setDisplay] = useState(showing);
  console.log(res);
  let stopShowing = () => {
    setDisplay(false);
  };
  return (
    <div className={"popup__overlay popup__overlay--" + display}>
      <div className="popup__container--base">
        <div className="popup__text--base">
          {res.data
            ? "Se ha completado la accion correctamente!"
            : "Error: no se ha podido completar la accion"}
        </div>
        <div className="popup__button popup__button--ok" onClick={stopShowing}>
          Ok
        </div>
      </div>
    </div>
  );
}
