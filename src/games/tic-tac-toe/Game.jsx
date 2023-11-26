import React, { useState } from "react";
import { Square } from "./components/Square";
import Button from '../../components/Buttons/Button'
import "./game.css";

const X = "X";
const O = "O";

const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];

const Game = () => {
    // creates an array of size 9 with all values being empty strings
    const [board, setBoard] = useState(Array(9).fill("")); 
    const [isXTurn, setIsXTurn] = useState(true);
    const [message, setMessage] = useState("X's turn");

    const handleClick = (index) => {
        // adds a value ('x' or 'o') to the array at the clicked index
        setBoard(prevBoard => {
            const winner = checkForWin();
            if (winner) {
                setMessage(`Player ${winner} wins!`);
                return prevBoard;
            }
            if(checkDraw()){
                setMessage("Draw!")
            }
            const newBoard = prevBoard;
            // check if there's already a value at that index
            if(newBoard[index]) return prevBoard
            if (isXTurn) {
                newBoard[index] = X;
                setMessage(`${O}'s turn`)
            } else {
                newBoard[index] = O;
                setMessage(`${X}'s turn`)
            }
            // switch turns
            setIsXTurn(!isXTurn);

            return newBoard;
        });
    };

    const checkForWin = () => {
        let winner;
        winningCombinations.some(combo => {
            const [a, b, c] = combo;
            // first check if the value at 'a' is not an empty string then check if it
            // equals the other values at 'b' and 'c'
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                winner = board[a];
            }
        });
        return winner || null;
    };

    const checkDraw = () => {
        return board.indexOf("") === -1
    }

    const restartGame = () => {
        setBoard(Array(9).fill(""))
        setMessage("")
        setMessage(() => isXTurn ? "X's turn" : "O's turn")
    }

    return (
        <div className="center-game gap-4 overflow-hidden">
            <h2>{message}</h2>
            <div id="board" className="grid grid-cols-3 relative w-full max-w-md">
                {board.map((square, index) => (
                    <Square turn={square} onClick={() => handleClick(index)} />
                ))}
            </div>
            <Button onClick={restartGame}>Restart</Button>
        </div>
    );
};

export default Game;
