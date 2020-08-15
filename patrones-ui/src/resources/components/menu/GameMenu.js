import React, { useState } from "react";
import SelectList from "../selectList/list/SelectList";
import SelectItem from "../selectList/item/SelectItem";
export default function Menu() {
  let currentAction = localStorage.getItem("nextAction");
  const [doing, setDoing] = useState(currentAction);

  let changeAction = () => {
    let nextAction = localStorage.getItem("nextAction");
    setDoing(nextAction);
  };

  return (
    <div className="game__player-bar game__player-bar--base">
      {
        {
          none: (
            <SelectList>
              <SelectItem
                text="Select Piece"
                itemLog="selectPiece"
                itemKey="nextAction"
                img="tank"
                nextAction="selectPiece"
                onClickFunc={changeAction}
              />
              <SelectItem
                text="Select Terrain"
                itemLog="selectTerrain"
                itemKey="nextAction"
                img="L"
                nextAction="selectTerrain"
                onClickFunc={changeAction}
              />
              <SelectItem
                text="Show Stats"
                itemLog="showStats"
                itemKey="nextAction"
                nextAction="none"
                onClickFunc={changeAction}
              />
            </SelectList>
          ),
          selectPiece: (
            <SelectList>
              <SelectItem
                text="Archer"
                itemLog="arch"
                itemKey="selected_piece"
                img="arch"
                nextAction="none"
                onClickFunc={changeAction}
              />
              <SelectItem
                text="Tank"
                itemLog="tank"
                itemKey="selected_piece"
                img="tank"
                nextAction="none"
                onClickFunc={changeAction}
              />
              <SelectItem
                text="Infantry"
                itemLog="inf"
                itemKey="selected_piece"
                img="inf"
                nextAction="none"
                onClickFunc={changeAction}
              />
              <SelectItem
                text="Back to Menu"
                img="none"
                nextAction="none"
                onClickFunc={changeAction}
              />
            </SelectList>
          ),
          selectTerrain: (
            <SelectList>
              <SelectItem
                text="Z Terrain"
                itemLog="Z"
                itemKey="selected_terrain"
                img="Z"
                nextAction="selectPositionZ"
                onClickFunc={changeAction}
              />
              <SelectItem
                text="P Terrain"
                itemLog="P"
                itemKey="selected_terrain"
                img="P"
                nextAction="selectPositionP"
                onClickFunc={changeAction}
              />
              <SelectItem
                text="U Terrain"
                itemLog="U"
                itemKey="selected_terrain"
                img="U"
                nextAction="selectPositionU"
                onClickFunc={changeAction}
              />
              <SelectItem
                text="L Terrain"
                itemLog="L"
                itemKey="selected_terrain"
                img="L"
                nextAction="selectPositionL"
                onClickFunc={changeAction}
              />
              <SelectItem
                text="T Terrain"
                itemLog="T"
                itemKey="selected_terrain"
                img="T"
                nextAction="selectPositionT"
                onClickFunc={changeAction}
              />
              <SelectItem
                text="Back to Menu"
                img="none"
                nextAction="none"
                onClickFunc={changeAction}
              />
            </SelectList>
          ),
          selectPositionZ: (
            <SelectList>
              <SelectItem
                text="Z Position 1"
                itemLog="1"
                itemKey="position"
                img="Z"
                nextAction="none"
                onClickFunc={changeAction}
              />
              <SelectItem
                text="Z Position 2"
                itemLog="2"
                itemKey="position"
                img="Z2"
                nextAction="none"
                onClickFunc={changeAction}
              />
              <SelectItem
                text="Z Position 3"
                itemLog="3"
                itemKey="position"
                img="Z3"
                nextAction="none"
                onClickFunc={changeAction}
              />
              <SelectItem
                text="Z Position 4"
                itemLog="4"
                itemKey="position"
                img="Z4"
                nextAction="none"
                onClickFunc={changeAction}
              />
              <SelectItem
                text="Back to Menu"
                img="none"
                nextAction="none"
                onClickFunc={changeAction}
              />
            </SelectList>
          ),

          selectPositionU: (
            <SelectList>
              <SelectItem
                text="U Position 1"
                itemLog="1"
                itemKey="position"
                img="U"
                nextAction="none"
                onClickFunc={changeAction}
              />
              <SelectItem
                text="U Position 2"
                itemLog="2"
                itemKey="position"
                img="U2"
                nextAction="none"
                onClickFunc={changeAction}
              />
              <SelectItem
                text="U Position 3"
                itemLog="3"
                itemKey="position"
                img="U3"
                nextAction="none"
                onClickFunc={changeAction}
              />
              <SelectItem
                text="U Position 4"
                itemLog="4"
                itemKey="position"
                img="U4"
                nextAction="none"
                onClickFunc={changeAction}
              />
              <SelectItem
                text="Back to Menu"
                img="none"
                nextAction="none"
                onClickFunc={changeAction}
              />
            </SelectList>
          ),
          selectPositionP: (
            <SelectList>
              <SelectItem
                text="P Position 1"
                itemLog="1"
                itemKey="position"
                img="P"
                nextAction="none"
                onClickFunc={changeAction}
              />
              <SelectItem
                text="P Position 2"
                itemLog="2"
                itemKey="position"
                img="P2"
                nextAction="none"
                onClickFunc={changeAction}
              />
              <SelectItem
                text="P Position 3"
                itemLog="3"
                itemKey="position"
                img="P3"
                nextAction="none"
                onClickFunc={changeAction}
              />
              <SelectItem
                text="P Position 4"
                itemLog="4"
                itemKey="position"
                img="P4"
                nextAction="none"
                onClickFunc={changeAction}
              />
              <SelectItem
                text="Back to Menu"
                img="none"
                nextAction="none"
                onClickFunc={changeAction}
              />
            </SelectList>
          ),
          selectPositionL: (
            <SelectList>
              <SelectItem
                text="L Position 1"
                itemLog="1"
                itemKey="position"
                img="L"
                nextAction="none"
                onClickFunc={changeAction}
              />
              <SelectItem
                text="L Position 2"
                itemLog="2"
                itemKey="position"
                img="L2"
                nextAction="none"
                onClickFunc={changeAction}
              />
              <SelectItem
                text="L Position 3"
                itemLog="3"
                itemKey="position"
                img="L3"
                nextAction="none"
                onClickFunc={changeAction}
              />
              <SelectItem
                text="L Position 4"
                itemLog="4"
                itemKey="position"
                img="L4"
                nextAction="none"
                onClickFunc={changeAction}
              />
              <SelectItem
                text="Back to Menu"
                img="none"
                nextAction="none"
                onClickFunc={changeAction}
              />
            </SelectList>
          ),
          selectPositionT: (
            <SelectList>
              <SelectItem
                text=" T Position 1"
                itemLog="1"
                itemKey="position"
                img="T"
                nextAction="none"
                onClickFunc={changeAction}
              />
              <SelectItem
                text="T Position 2"
                itemLog="2"
                itemKey="position"
                img="T2"
                nextAction="none"
                onClickFunc={changeAction}
              />
              <SelectItem
                text="T Position 3"
                itemLog="3"
                itemKey="position"
                img="T3"
                nextAction="none"
                onClickFunc={changeAction}
              />
              <SelectItem
                text="T Position 4"
                itemLog="4"
                itemKey="position"
                img="T4"
                nextAction="none"
                onClickFunc={changeAction}
              />
              <SelectItem
                text="Back to Menu"
                img="none"
                nextAction="none"
                onClickFunc={changeAction}
              />
            </SelectList>
          ),
        }[doing]
      }
    </div>
  );
}
