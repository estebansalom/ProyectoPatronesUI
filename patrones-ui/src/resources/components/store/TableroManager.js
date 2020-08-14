import React, {useEffect, useState} from 'react'

export function getListaCuadros() {
    const [boardIds, setBoardIds] = usestate([]);
    const [loading, setLoding] = usestate(true);
    useEffect(() => {
        await axios({
            method: 'GET',
            url: 'http://localhost:8083/api/v1/cuadro'
        }.then(res => {
            setBoardIds(res.data);
        }
        ))
    })
    return (
        boardIds
    )
}
