import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import GamesList from "./pages/Games/GamesList";
import Error from "./pages/Error";
import "./index.css";
import Game from "./pages/Game/Game";
import { useGames } from "./games/useGames";
import { Login } from "./pages/Auth/Login";

const App = () => {
    const [games] = useGames();

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
            path: "/login",
            element: <Login />,
        },
        {
            // individual game
            path: "/game",
            element: <Game />,
            children: games.map(game => {
                return {
                    path: `/game/${game.name}`,
                    element: game.element,
                };
            }),
        },
    ]);
    
    return <RouterProvider router={router} />;
};

export default App;
