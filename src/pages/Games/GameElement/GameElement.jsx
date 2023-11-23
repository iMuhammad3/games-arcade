import { Link } from "react-router-dom";
import { Video } from "./Video";

export const GameElement = ({ game, formattedName }) => {

    return (
        <li
            key={game.id}
            className="bg-gray-900 max-w-[340px] w-full px-2 pt-2 rounded-md relative"
        >
            <Link to={`/game/${game.name}`}>
                <div className="relative rounded overflow-hidden">
                    <Video video={game.video_url} />
                </div>
                <p className="text-lg md:text-xl py-3">
                    {formattedName(game.name)}
                </p>
            </Link>
        </li>
    );
};
