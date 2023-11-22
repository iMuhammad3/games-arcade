import { Link } from "react-router-dom";

export const GameElement = ({ game, formattedName }) => {
    const playVideo = e => {
        e.target.currentTime = 0;
        e.target.play();
    };

    return (
        <li key={game.id} className="bg-gray-900 max-w-[340px] w-full px-2 pt-2 rounded-md group">
            <Link to={`/game/${game.name}`}>
                <img
                    className="group-hover:hidden hidden md:block w-full"
                    src={game.img_url}
                    alt={game.name}
                />
                <video
                    onMouseOver={playVideo}
                    className="md:hidden group-hover:block w-full"
                    playsInline
                    loop
                    muted
                    autoPlay
                >
                    <source src={game.video_url} type="video/mp4" />
                </video>
                <p className="text-lg md:text-xl py-3">
                    {formattedName(game.name)}
                </p>
            </Link>
        </li>
    );
};
