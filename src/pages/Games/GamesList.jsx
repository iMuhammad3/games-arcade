import React, { useState } from "react";
import Header from "../../components/Header/Header";
import { SearchInput } from "./SearchInput";
import { Categories } from "./Categories";
import GAMES from "../../games/ALL-GAMES";
import { GameElement } from "./GameElement/GameElement";

const GamePage = () => {
    const [userInput, setUserInput] = useState("");

    const formattedName = (name) => {
        return name.split("-").join(" ").toUpperCase();
    };

    const filteredGames = GAMES.map(game =>{
        if(formattedName(game.name).includes(userInput.toUpperCase())){
            return <GameElement formattedName={formattedName} game={game} />
        }
    });

    return (
        <div className="flex flex-col">
            <Header />
            <main className="flex flex-col gap-2">
                <h1 className="text-center mt-5">Games</h1>
                <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between px-4 md:px-16">
                    <SearchInput
                        userInput={userInput}
                        setUserInput={setUserInput}
                    />
                    <Categories />
                </div>
                <ul className="mt-4 font-serif flex flex-wrap justify-center md:justify-between gap-4 px-4 md:px-16">{filteredGames}</ul>
            </main>
        </div>
    );
};

export default GamePage;
