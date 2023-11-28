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
                    href="https://firebasestorage.googleapis.com/v0/b/mask-games.appspot.com/o/fonts%2FPoppins%2FPoppins-Regular.ttf?alt=media&token=15315456-c4fc-4d55-8cf5-9e2afbfe3e01"
                    as="font"
                    crossorigin
                />
                <link
                    rel="preload"
                    href="https://firebasestorage.googleapis.com/v0/b/mask-games.appspot.com/o/fonts%2FNunito%2FNunito-VariableFont_wght.ttf?alt=media&token=72ab0014-2d49-4533-a7f8-50e7f199880a"
                    as="font"
                    crossorigin
                />
                <link
                    rel="preload"
                    href="https://firebasestorage.googleapis.com/v0/b/mask-games.appspot.com/o/fonts%2FPoppins%2FPoppins-Light.ttf?alt=media&token=fceca6b1-4bbd-45c7-980b-69e53ef122df"
                    as="font"
                    crossorigin
                />
                <link
                    rel="preload"
                    href="https://firebasestorage.googleapis.com/v0/b/mask-games.appspot.com/o/fonts%2FPoppins%2FPoppins-Medium.ttf?alt=media&token=5157132f-d05c-4387-868d-78a51461afb0"
                    as="font"
                    crossorigin
                />
            </Helmet>
        </>
    );
};

export default App;
