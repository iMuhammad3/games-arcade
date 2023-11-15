import { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Game } from "./Game";

export default function Page() {
    const [loaded, setLoaded] = useState(false);
    const [text, setText] = useState([]);

    useEffect(() => {
        const fetchQuote = async () => {
            try {
                const resp = await fetch("http://api.quotable.io/random");
                const data = await resp.json();
                setText(data.content.split(""));
                console.log(data.content);
                setLoaded(true)
            } catch (err) {
                console.error(err);
            }
        };
        fetchQuote()
    }, []);

    const handleCorrect = async () => {
        setLoaded(false)
        try {
            const resp = await fetch("http://api.quotable.io/random");
            const data = await resp.json();
            setText(data.content.split(""));
            setLoaded(true)
          } catch (err) {
            console.error(err);
          }
    }

    return (
        <div className="flex flex-col items-center relative">
            {loaded ? (
                <Game handleCorrect={handleCorrect} text={text} />
            ) : (
                <ThreeDots color="lightblue" />
            )}
        </div>
    );
}
