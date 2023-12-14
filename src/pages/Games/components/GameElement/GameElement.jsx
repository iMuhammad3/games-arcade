import React from 'react'
import { Link } from "react-router-dom";
import { Preview } from "./Preview";

export const GameElement = ({ game, formattedName }) => {

    return (
        <li
            key={game.id}
            className="bg-nightblue-700 max-w-[340px] w-full px-2 pt-2 rounded-md relative"
        >
            <Link to={`/game/${game.name}`}>
                <div className="relative rounded overflow-hidden">
                <Preview video={game.video_url} img={game.img_url} />
                </div>
                <p className="text-lg md:text-xl py-3">
                    {formattedName(game.name)}
                </p>
            </Link>
        </li>
    );
};
