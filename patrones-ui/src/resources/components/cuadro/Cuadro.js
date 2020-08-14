import React, { state, useState } from 'react'
import Pieza from "../pieza/Pieza";

export default function Cuadro({id, pieza, color, x, y, terreno}) {
    return (
        <div className="cuadro__border--basic">
            <div className="cuadro__container--basic">
                <div className="cuadro__content--basic">
                    <div className={"cuadro__terreno cuadro__terreno--" + terreno}>
                        {
                            pieza !== null ? <Pieza pieza={pieza} id={id}/> : <div className="cuadro__vacio--basic" >{x} - {y}</div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
