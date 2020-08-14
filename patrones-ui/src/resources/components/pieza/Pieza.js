import React from "react";

export default function Pieza({ pieza }) {
  return (
    <div className="pieza__container--base">
      <div className={"pieza__image--" + pieza}></div>
    </div>
  );
}
