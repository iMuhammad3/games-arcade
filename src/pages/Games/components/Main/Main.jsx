import React, { useState } from "react";
import { SearchInput } from "./SearchInput";
import { Categories } from "./Categories";
import { GameElement } from "../GameElement/GameElement";

export const Main = ({ games }) => {
    const [userInput, setUserInput] = useState("");

    const formattedName = name => {
        return name.split("-").join(" ").toUpperCase();
    };

    const filteredGames = games.filter(game =>
        formattedName(game.name).includes(userInput.toUpperCase())
    );

    return (
        <main className="flex flex-col gap-2">
            <h1 className="text-center mt-5">Games</h1>
            <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between px-4 md:px-16">
                <SearchInput
                    userInput={userInput}
                    setUserInput={setUserInput}
                />
                <Categories />
            </div>
            <ul className="my-8 font-serif flex flex-wrap justify-center gap-8 px-4 md:px-16">
                {filteredGames.length > 0 ? (
                    filteredGames.map(game => {
                        return (
                            <GameElement
                                key={game.id}
                                formattedName={formattedName}
                                game={game}
                            />
                        );
                    })
                ) : (
                    <p>{`No results for ${userInput.slice(0, 20)}...`}</p>
                )}
            </ul>
        </main>
    );
};
