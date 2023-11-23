import TypingGame from './typing-game/Game'
import TypingVid from '../assets/game-videos/typing.mp4'

import WhacGame from './whac-a-messi/Game'
import WhacVid from '../assets/game-videos/whac-a-messi.mp4'

import TicTacToe from './tic-tac-toe/Game'
import TicVid from '../assets/game-videos/tic-tac-toe.mp4'

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
]

export default GAMES