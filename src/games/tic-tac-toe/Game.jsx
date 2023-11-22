import React, { useState } from "react";
import { Square } from "./components/Square";
import './game.css'

const X = "x"
const O = "o"

const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(""));
    const [isXTurn, setIsXTurn] = useState(true)
    const [message, setMessage] = useState("")

    const handleClick = (index) => {
        setBoard(prevBoard => {
            
            const newBoard = [...prevBoard]
            if(isXTurn){
                newBoard[index] = X
            } else {
                newBoard[index] = O
            }
            const winner = checkForWin()
            if(winner){
                setMessage(`Player ${winner} wins!`)
                return prevBoard
            } else {
                setIsXTurn(!isXTurn)
            }
            
            return newBoard
        })

    }

    const checkForWin = () => {
        for(const comb of winningCombinations){
            const [a, b, c] = comb
            if(board[a] && board[a] === board[b] && board[a] === board[c]){
                return board[a]
            }
        }
        return null
    }

    return (
        <div className="center-game overflow-hidden">
            <h2>{message}</h2>
            <div className="grid grid-cols-3">
                {board.map((square, index) => (
                    <Square turn={square} onClick={() => handleClick(index)} />
                ))}
            </div>
        </div>
    );
};

export default Game;
