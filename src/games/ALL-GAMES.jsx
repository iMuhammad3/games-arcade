import React from "react";

import TypingGame from "./typing-game/Game";

import WhacGame from "./whac-a-messi/Game";

import TicTacToe from "./tic-tac-toe/Game";

import RockGame from "./rock-paper-scissors/Game";

import Memory from "./memory-game/Game";

import Quiz from "./quiz/Game";

const getImage = (name, type = "png") => {
    return `https://firebasestorage.googleapis.com/v0/b/mask-games.appspot.com/o/images%2Fgame-previews%2F${name}.${type}?alt=media&token=e6ff09fc-2bb5-4ca0-9090-93da1ca7bfd1`;
};

const getVideo = (name, type = "mp4") => {
    return `https://firebasestorage.googleapis.com/v0/b/mask-games.appspot.com/o/videos%2F${name}.${type}?alt=media&token=3fe17cf3-3965-41a1-9aef-f88b18c62a1d`
}

const GAMES = [
    {
        id: 1,
        name: "typing-game",
        element: <TypingGame />,
        video_url: getVideo("typing"),
        img_url: getImage('typing'),
    },
    {
        id: 2,
        name: "whac-a-messi",
        element: <WhacGame />,
        video_url: getVideo("whac-a-messi"),
        img_url: getImage("whac-a-messi"),
    },
    {
        id: 3,
        name: "tic-tac-toe",
        element: <TicTacToe />,
        video_url: getVideo("tic-tac-toe"),
        img_url: getImage("tic-tac-toe"),
    },
    {
        id: 4,
        name: "rock-paper-scissors",
        element: <RockGame />,
        video_url: getVideo("rock-paper-scissors"),
        img_url: getImage("rock-paper-scissors"),
    },
    {
        id: 5,
        name: "memory-game",
        element: <Memory />,
        video_url: getVideo("memory"),
        img_url: getImage("memory"),
    },
    {
        id: 6,
        name: "quiz",
        element: <Quiz />,
        video_url: getVideo("quiz"),
        img_url: getImage("quiz"),
    },
];

export default GAMES;
