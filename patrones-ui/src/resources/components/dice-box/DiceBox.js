import React, { useState, useEffect } from "react";
import axios from "axios";

export default function DiceBox({ playing }) {
  const [clickedA, setClickedA] = useState(false);
  const [clickedS, setClickedS] = useState(false);
  const [resA, setResA] = useState("");
  const [resF, setResF] = useState("");

  useEffect(() => {
    if (clickedA) {
      const fetchAction = async () => {
        const result = await axios.get(
          "http://localhost:8083/api/v1/dadoA/" + playing
        );
        console.log(result.data);
        setResA(result.data);
        setClickedA(false);
      };
      fetchAction();
    } else if (clickedS) {
      const fetchSpawn = async () => {
        const result = await axios.get(
          "http://localhost:8083/api/v1/dadoF/" + playing
        );
        console.log(result.data);
        setResF(result.data);
        setClickedS(false);
      };
      fetchSpawn();
    } else {
    }
  });

  let throwActionDice = () => {
    setClickedA(true);
  };

  let throwSpawnDice = () => {
    setClickedS(true);
  };

  return (
    <div className="dicebox__main-grid--base">
      <div className="dicebox__action-result--base">{resA}</div>
      <div className="dicebox__spawn-result--base">{resF}</div>
      <div className="dicebox__action-dice--base" onClick={throwActionDice}>
        Action
      </div>
      <div className="dicebox__spawn-dice--base" onClick={throwSpawnDice}>
        Spawn
      </div>
    </div>
  );
}
