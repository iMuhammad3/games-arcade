import React from "react";
import Header from "../../components/Header/Header";
import { SearchInput } from "./SearchInput";
import { Categories } from "./Categories";
import GAMES from "../../games/ALL-GAMES";
import { GameElement } from "./GameElement";

const GamePage = () => {

    

    return (
        <div className="flex flex-col">
            <Header />
            <main className="flex flex-col gap-2">
                <h1 className="text-center mt-5">Games</h1>
                <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between px-4 md:px-16">
                    <SearchInput />
                    <Categories />
                </div>
                <ul className="flex border px-4 md:px-16">
                    {GAMES.map(game => {
                        return (
                            <GameElement game={game} />
                        )
                    })}
                </ul>
            </main>
        </div>
    );
};

export default GamePage;
