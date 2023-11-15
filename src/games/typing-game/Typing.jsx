import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import { Game } from "./Game";

export default function Page() {
    const [text, setText] = useState([]);
    const [userInput, setUserInput] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const fetchQuote = async () => {
            try {
                const resp = await fetch("http://api.quotable.io/random");
                const data = await resp.json();
                setText(data.content.split(""));
                setLoaded(true);
            } catch (err) {
                console.error(err);
            }
        };
        fetchQuote();
    }, []);

    return (
        <div className="flex flex-col items-center relative">
            {loaded ? (
                <Game
                    userInput={userInput}
                    setUserInput={setUserInput}
                    text={text}
                    setLoaded={setLoaded}
                />
            ) : (
                <Circles />
            )}
        </div>
    );
}
