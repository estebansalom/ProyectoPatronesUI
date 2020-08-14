import React, { useEffect, useState } from "react";
import axios from "axios";
import Tablero from "../../resources/components/tablero/Tablerov2";

export default function Game() {
  const [cuadros, setCuadros] = useState([]);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    if (!success) {
      const fetchData = async () => {
        const result = await axios("http://localhost:8083/api/v1/cuadro");
        setCuadros(result.data);
        setSuccess(true);
      };

      fetchData();
    }
  });
  return (
    <div className="game__container--basic">
      <div className="game__playerBar game__playerBar--basic"></div>
      <div className="game__boardHolder game__boardHolder--basic">
        <Tablero cuadros={cuadros} />
      </div>
      <div className="game__helpBar game__helpBar--basic"></div>
    </div>
  );
}
