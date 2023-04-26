import React from 'react';
import './scoreBorad.css';

export const ScoresBorad = ({ scores, isX }) => {
    const { xScore, oScore } = scores;
    return (
        <div className='scoreborad'>
            <span className={`score x-score ${!isX && "inactive"}`}>X - {xScore}</span>
            <span className={`score o-score ${isX && "inactive"}`}>O - {oScore}</span>

        </div >
    )
}
