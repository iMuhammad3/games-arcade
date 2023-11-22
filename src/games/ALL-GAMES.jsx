import TypingGame from './typing-game/Game'
import TypingImg from '../assets/game-previews/typing.png'
import TypingVid from '../assets/game-videos/typing.mp4'

import WhacGame from './whac-a-messi/Game'

const GAMES = [
    {
        id: 1,
        name: "typing-game",
        element: <TypingGame />,
        img_url: TypingImg,
        video_url: TypingVid,
    },
    {
        id: 2,
        name: "whac-a-messi",
        element: <WhacGame />,
        img_url: null,
        video_url: null,
    },
]

export default GAMES