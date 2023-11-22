import { Outlet } from "react-router-dom";
import logo from "../../assets/just-games.jpeg";
import Header from "../../components/Header/Header";

const Game = () => {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <Header />
            <Outlet />
        </div>
    );
};

export default Game;
