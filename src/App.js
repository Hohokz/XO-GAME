import './App.css';
import { ScoresBorad } from './scoresBorad';
import React, { useState } from 'react';
import { Borad } from './component/borad.js';
import { ResetBorad } from './component/resetBorad.js'

function App() {

  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  const [borad, setBorad] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 })
  const [isGameOver, setIsGameOver] = useState(false);

  const handleBoxClick = (boxIdx) => {

    const updatedBorad = borad.map((value, idx) => {
      if (idx === boxIdx) {
        return isX === true ? "X" : "O";
      } else {
        return value;
      }
    })

    const winner = checkWinner(updatedBorad);

    if (winner) {
      if (winner === "O") {
        let { oScore } = scores;
        oScore += 1
        setScores({ ...scores, oScore })
      } else {
        let { xScore } = scores;
        xScore += 1
        setScores({ ...scores, xScore })
      }
    }

    setBorad(updatedBorad);
    setIsX(!isX);
  }

  const checkWinner = (borad) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];
      if (borad[x] && borad[x] === borad[y] && borad[y] === borad[z]) {
        setIsGameOver(true)
        return borad[x]
      }
    }
  }

  const resetBorad = () => {
    setIsGameOver(false);
    setBorad(Array(9).fill(null))
    setIsX(true)
  }

  return (
    <div className="App">
      <ScoresBorad scores={scores} isX={isX} />
      <Borad borad={borad} onClick={isGameOver ? resetBorad : handleBoxClick} />
      <ResetBorad resetBorad={resetBorad} />
    </div>
  );
}

export default App;
