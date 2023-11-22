import TypingGame from './typing-game/Game'
import TypingImg from '../assets/game-previews/typing.png'
import TypingVid from '../assets/game-videos/typing.mp4'

import WhacGame from './whac-a-messi/Game'
import WhacImg from '../assets/game-previews/whac-a-messi.png'
import WhacVid from '../assets/game-videos/whac-a-messi.mp4'

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
        img_url: WhacImg,
        video_url: WhacVid,
    },
]

export default GAMES