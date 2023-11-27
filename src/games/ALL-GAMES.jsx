import React from 'react'

import TypingGame from './typing-game/Game'
import TypingVid from '../assets/game-videos/typing.mp4'
import TypingImg from '../assets/game-images/typing.png'

import WhacGame from './whac-a-messi/Game'
import WhacVid from '../assets/game-videos/whac-a-messi.mp4'
import WhacImg from '../assets/game-images/whac-a-messi.png'

import TicTacToe from './tic-tac-toe/Game'
import TicVid from '../assets/game-videos/tic-tac-toe.mp4'
import TicImg from '../assets/game-images/tic-tac-toe.png'

import RockGame from './rock-paper-scissors/Game'
import RockVid from '../assets/game-videos/rock-paper-scissors.mp4'
import RockImg from '../assets/game-images/rock-paper-scissors.png'

import Memory from './memory-game/Game'
import MemoryVid from '../assets/game-videos/memory.mp4'
import MemoryImg from '../assets/game-images/memory.png'

const GAMES = [
    {
        id: 1,
        name: "typing-game",
        element: <TypingGame />,
        video_url: TypingVid,
        img_url: TypingImg,
    },
    {
        id: 2,
        name: "whac-a-messi",
        element: <WhacGame />,
        video_url: WhacVid,
        img_url: WhacImg,
    },
    {
        id: 3,
        name: "tic-tac-toe",
        element: <TicTacToe />,
        video_url: TicVid,
        img_url: TicImg,
    },
    {
        id: 4,
        name: "rock-paper-scissors",
        element: <RockGame />,
        video_url: RockVid,
        img_url: RockImg,
    },
    {
        id: 5,
        name: "memory-game",
        element: <Memory />,
        video_url: MemoryVid,
        img_url: MemoryImg,
    },
]

export default GAMES