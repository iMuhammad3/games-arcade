import React from "react";
import Header from "../../components/Header/Header";
import { useGames } from "../../games/useGames";
import { Main } from "./components/Main/Main";
import { Loader } from "../../components/loaders/Loader";

const GamePage = () => {
    const [games, isLoaded] = useGames();

    return (
        <div className="flex flex-col">
            <Header />
            {isLoaded ? (
                <Main games={games} />
            ) : (
                <Loader>Loading games...</Loader>
            )}
        </div>
    );
};

export default GamePage;
