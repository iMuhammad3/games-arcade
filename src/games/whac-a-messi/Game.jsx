import { useState, useEffect } from "react";
import { Square } from "./components/Square";
import "./game.css";

const Game = () => {
    const [score, setScore] = useState(0);
    const [time, setTime] = useState(30);
    const [squares, setSquares] = useState([]);
    const [gameActive, setGameActive] = useState(true);

    useEffect(() => {
        // Initialize squares when the component mounts
        const initialSquares = Array(9)
            .fill(null)
            .map(() => ({ messi: false }));
        setSquares(initialSquares);

        const countDownId = setInterval(() => {
            setTime(prevTime => {
                // Ensure the countdown doesn't go below 0
                const newTime = prevTime > 0 ? prevTime - 1 : 0;
                if (newTime === 0) {
                    clearInterval(countDownId);
                    clearInterval(randomId);
                    setGameActive(false);
                }
                return newTime;
            });
        }, 1000);

        const randomId = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * 9);
            setSquares(prevSquares => {
                const newSquares = [...prevSquares];
                newSquares.forEach(square => (square.messi = false));
                newSquares[randomIndex] = { messi: true };
                return newSquares;
            });
        }, 600);

        if (time == 0) {
            clearInterval(countDownId);
            clearInterval(randomId);
        }

        return () => {
            clearInterval(countDownId);
            clearInterval(randomId);
        };
    }, []);

    const handleClick = index => {
        if (gameActive && squares[index].messi) {
            setScore(prev => prev + 1);
        }
    };

    return (
        <div className="center-game gap-4">
            <section className="flex flex-col md:flex-row justify-between gap-2 md:w-[450px] border rounded p-2">
                <h2>Time Left: {time}</h2>
                <h2>Score: {score}</h2>
            </section>
            <ul className="grid grid-cols-3 w-full md:w-[450px] aspect-square border">
                {squares.map((square, i) => {
                    return (
                        <Square
                            key={i}
                            messi={square.messi}
                            onClick={() => handleClick(i)}
                        />
                    );
                })}
            </ul>
        </div>
    );
};

export default Game;
