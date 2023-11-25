import React from 'react'

import TypingGame from './typing-game/Game'
import TypingVid from '../assets/game-videos/typing.mp4'

import WhacGame from './whac-a-messi/Game'
import WhacVid from '../assets/game-videos/whac-a-messi.mp4'

import TicTacToe from './tic-tac-toe/Game'
import TicVid from '../assets/game-videos/tic-tac-toe.mp4'

import RockGame from './rock-paper-scissors/Game'

const GAMES = [
    {
        id: 1,
        name: "typing-game",
        element: <TypingGame />,
        video_url: TypingVid,
    },
    {
        id: 2,
        name: "whac-a-messi",
        element: <WhacGame />,
        video_url: WhacVid,
    },
    {
        id: 3,
        name: "tic-tac-toe",
        element: <TicTacToe />,
        video_url: TicVid,
    },
    {
        id: 4,
        name: "rock-paper-scissors",
        element: <RockGame />,
        video_url: null,
    },
]

export default GAMES