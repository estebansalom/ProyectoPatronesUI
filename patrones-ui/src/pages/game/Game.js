import React, { useEffect, useState } from "react";
import axios from "axios";
import Tablero from "../../resources/components/tablero/Tablerov2";
import SelectList from "../../resources/components/selectList/list/SelectList";
import SelectItem from "../../resources/components/selectList/item/SelectItem";

export default function Game() {
  const [cuadros, setCuadros] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (!loaded) {
      const fetchData = async () => {
        const result = await axios("http://localhost:8083/api/v1/cuadro");
        setCuadros(result.data);
        setLoaded(true);
      };

      fetchData();
    }
  }, [loaded]);

  return (
    <div className="game__container--basic">
      <div className="game__playerBar game__playerBar--basic">
        <SelectList>
          <SelectItem text="Item 1" itemLog="1" itemKey="item" img="arch" />
          <SelectItem text="Item 2" itemLog="2" itemKey="item" img="tank" />
          <SelectItem text="Item 3" itemLog="3" itemKey="item" img="inf" />
        </SelectList>
      </div>
      <div className="game__boardHolder game__boardHolder--basic">
        <Tablero cuadros={cuadros} />
      </div>
      <div className="game__helpBar game__helpBar--basic">
        <button type="button"></button>
      </div>
    </div>
  );
}
