import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import GamesList from "./pages/Games/GamesList";
import GAMES from "./games/ALL-GAMES";
import Error from "./pages/Error";
import "./index.css";
import Game from "./pages/Game/Game";
import { Helmet } from "react-helmet";

const children = GAMES.map(game => {
    return {
        path: `/game/${game.name}`,
        element: game.element,
    };
});

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
    },
    {
        // list of games
        path: "/games",
        element: <GamesList />,
    },
    {
        // individual game
        path: "/game",
        element: <Game />,
        children: children,
    },
]);

const App = () => {
    return (
        <>
            <RouterProvider router={router} />
            <Helmet>
                <link
                    rel="preload"
                    href="./assets/fonts/Poppins-Medium.ttf"
                    as="font"
                    crossorigin
                />
            </Helmet>
        </>
    );
};

export default App;
