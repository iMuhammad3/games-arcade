import TypingGame from './typing-game/Game'
import TypingImg from '../assets/game-previews/typing.png'
import TypingVid from '../assets/game-videos/typing.mp4'


const GAMES = [
    {
        id: 1,
        name: "typing-game",
        element: <TypingGame />,
        img_url: TypingImg,
        video_url: TypingVid,
    }
]

export default GAMES