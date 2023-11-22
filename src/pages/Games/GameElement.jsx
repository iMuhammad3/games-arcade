import { Link } from "react-router-dom";

export const GameElement = ({ game, formattedName }) => {

    return (
        <li
            key={game.id}
            className="bg-gray-900 max-w-[340px] w-full px-2 pt-2 rounded-md"
        >
            <Link to={`/game/${game.name}`}>
                <video
                    onMouseEnter={e => {
                        e.target.currentTime = 0;
                        e.target.play();
                    }}
                    onMouseLeave={e => {
                        e.target.pause();
                        e.target.currentTime = 0;
                    }}
                    className=" w-full"
                    playsInline
                    loop
                    muted
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
