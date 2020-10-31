import React, { useEffect, useState } from 'react'
import GameBoard from './GameBoard'

function MainGame(){

    const [topLives, setTopLives] = useState(3);
    const [botLives, setBotLives] = useState(3);

    const hStyle = {
        margin: '20px auto',
        position: 'relative',
        textAlign: 'center',
        fontSize: 'medium'
    };

    const updateLives = (topNum, botNum) => {
        setTopLives(topNum);
        setBotLives(botNum);
    }

    return(
        <div>
            <h1 style={hStyle}>P1: Lives Left: {topLives}</h1>
            <GameBoard updateLives={updateLives}/>
            <h1 style={hStyle}>P2: Lives Left: {botLives}</h1>
        </div>
    );
}

export default MainGame;