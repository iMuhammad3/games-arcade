// Main.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Buttons/Button";
import players from "../../assets/players.svg"
import "animate.css";

const Main = () => {
    const navigate = useNavigate();
    return (
        <main className="flex flex-col items-center flex-grow z-10 relative">
            <div className="max-w-[800px] w-full ">
                <img className="w-full" src={players} alt="" />
                </div>
            <div className=" flex-grow flex flex-col justify-center">
                <Button
                    className="px-8 text-xl bg-gradient-to-tr from-sky-600 to-blue-600 "
                    onClick={() => navigate("/games")}
                >
                    Play Games!
                </Button>
            </div>
        </main>
    );
};

const Word = ({ children, delay, color }) => {
    return (
        <div className={`bg-gradient-to-r text-transparent bg-clip-text inline-block animate__animated animate__rubberBand ${delay} ${color}`}>
            {children}
        </div>
    );
};

export default Main;
