import React, { useState, useEffect } from "react";
import axios from "axios";

export default function DiceBox({ playing }) {
  const [actionR, setActionR] = useState("");
  const [rolledA, setRolledA] = useState(false);
  const [spawnR, setSpawnR] = useState("");
  const [rolledS, setRolledS] = useState(false);

  useEffect(() => {
    if (rolledA) {
      fetchAction();
      //setRolledA(false);
    } else if (rolledS) {
      fetchSpawn();
      //setRolledS(false);
    }
  });

  let throwActionDice = () => {
    //setRolledA(true);
  };

  let throwSpawnDice = () => {
    //setRolledS(true);
  };
  const fetchAction = async () => {
    if (rolledA) {
      const result = await axios.get(
        "http://localhost:8083/api/v1/dadoA/" + playing
      );
      setActionR(result.data);
      setRolledA(false);
    }
  };

  const fetchSpawn = async () => {
    if (rolledS) {
      const result = await axios.get(
        "http://localhost:8083/api/v1/dadoF/" + playing
      );
      setSpawnR(result.data);
      setRolledS(false);
    }
  };

  return (
    <div className="dicebox__main-grid--base">
      <div className="dicebox__action-result--base">{actionR}</div>
      <div className="dicebox__spawn-result--base">{spawnR}</div>
      <div className="dicebox__action-dice--base" onClick={throwActionDice()}>
        Action
      </div>
      <div className="dicebox__spawn-dice--base" onClick={throwSpawnDice()}>
        Spawn
      </div>
    </div>
  );
}
