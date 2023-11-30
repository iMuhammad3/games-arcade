// Main.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Buttons/Button";
import "animate.css";

const Main = () => {
    const navigate = useNavigate();
    return (
        <main className="flex flex-col items-center flex-grow z-10 relative">
            <div className="flex flex-wrap justify-center gap-4 mt-10 mx-3 text-5xl">
                <Word color="from-cyan-500 to-sky-500">Eat.</Word> 
                <Word delay="animate__delay-1s" color="from-sky-500 to-blue-500">Sleep.</Word> 
                <Word delay="animate__delay-2s" color="from-blue-500 to-indigo-500">Game.</Word>
                <Word delay="animate__delay-3s" color="from-indigo-500 to-violet-500">Repeat...</Word>
            </div>
            <div className="-mt-40 flex-grow flex flex-col justify-center">
                {/* <img className="-mt-20" src={animation} alt="" /> */}
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
