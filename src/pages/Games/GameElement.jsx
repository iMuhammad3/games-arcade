import { Link } from "react-router-dom";

export const GameElement = ({ game, formattedName }) => {
    

    const playVideo = (e) => {
        e.target.currentTime = 0
        e.target.play()
    }

    return (
        <li key={game.id} className="bg-gray-900 px-2 rounded-md group">
            <Link to={`/game/${game.name}`}>
                <img className="group-hover:hidden w-64 md:w-80" src={game.img_url} alt={game.name} />
                <video onMouseOver={playVideo} className="hidden group-hover:block w-64 md:w-80" playsInline loop muted autoPlay>
                    <source src={game.video_url} type="video/mp4" />
                </video>
                <p className="text-lg md:text-xl py-3">
                    {formattedName(game.name)}
                </p>
            </Link>
        </li>
    );
};
