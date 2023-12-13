import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import GamesList from "./pages/Games/GamesList";
import Error from "./pages/Error";
import "./index.css";
import Game from "./pages/Game/Game";
import { useGames } from "./games/useGames";



const App = () => {
    const games = useGames()
const children = games.map(game => {
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
    return <RouterProvider router={router} />;
};

export default App;
