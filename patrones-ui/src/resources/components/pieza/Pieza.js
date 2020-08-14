import React from 'react'

export default function Pieza({pieza}) {
    return (
        <div className="pieza__container--basic">
            <div className={"pieza__image--" + pieza}>

            </div>
        </div>
    )
}
