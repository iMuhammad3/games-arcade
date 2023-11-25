// Main.jsx
import React from 'react'
import { useNavigate } from "react-router-dom";
import Button from "../../components/Buttons/Button";
import animation from '../../assets/animation.gif'

function Main() {
    const navigate = useNavigate();
    return (
        <main className="flex flex-col items-center flex-grow z-10 relative">
            <h1 className="mt-10">
                We've got games for you!
            </h1>
            <div className="-mt-40 flex-grow flex flex-col justify-center">
                <img className="-mt-20" src={animation} alt="" />
                <Button
                    className="px-8 text-xl bg-gradient-to-tr from-sky-600 to-blue-600"
                    // navigates to games page
                    onClick={() => navigate("/games")}
                >
                    Play Games!
                </Button>
            </div>
        </main>
    );
}

export default Main;
