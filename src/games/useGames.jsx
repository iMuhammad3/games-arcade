import React, { useEffect, useState } from "react";

// import game components
import TypingGame from "./typing-game/Game";
import WhacGame from "./whac-a-messi/Game";
import TicTacToe from "./tic-tac-toe/Game";
import RPS from "./rock-paper-scissors/Game";
import Memory from "./memory-game/Game";
import Quiz from "./quiz/Game";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase.config";

const elements = {
    "typing-game": <TypingGame />,
    "memory-game": <Memory />,
    "quiz": <Quiz />,
    "rock-paper-scissors": <RPS />,
    "whac-a-messi": <WhacGame />,
    "tic-tac-toe": <TicTacToe />,
};

export const useGames = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const fetchGames = async () => {
            const querySnapshot = await getDocs(collection(db, "games"));
            const data = querySnapshot.docs.map(doc => {
                return {
                    ...doc.data(),
                    element: elements[doc.data().name],
                };
            });
            setGames(data);
        };
        fetchGames();
    }, []);

    return games;
};
