// Main.jsx
import { useNavigate } from "react-router-dom";
import Button from "./Buttons/Button";

function Main() {
    const navigate = useNavigate()
    return (
        <main className="flex flex-col items-center justify-center flex-grow z-10 relative">
            <h1 className="absolute top-8 text-3xl">We've got games for you!</h1>
            <img className="-mt-20" src="./src/assets/animation.gif" alt="" />
            <Button className="text-xl bg-gradient-to-tr from-sky-500 to-blue-600" onClick={() => navigate("/games")}>Play Games!</Button>
        </main>
    );
}

export default Main;
