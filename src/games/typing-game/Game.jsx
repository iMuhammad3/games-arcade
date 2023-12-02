import React, { useEffect, useRef, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Character } from "./components/Character";
import { GameSettings } from "./components/GameSettings";
import { GameUI } from "./GameUI";
import { useWPM } from "./hooks/useWPM";

const Game = () => {
    const textareaRef = useRef();
    const [WPM, setWPM] = useState(0); // Words Per Minute
    const [userInput, setUserInput] = useState([]);
    const [charArray, setCharArray] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [colors, setColors] = useState({
      default: "#dbebfe",
      correct: "#22c55e",
      wrong: "#e84445"
    })

    const startTime = new Date().getTime();

    useEffect(() => {
        // fetches a random quote from api
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.quotable.io/random");
                const data = await response.json();
                // data is an object and data.content is the actual quote
                setCharArray(data.content.split(""));
                setIsLoaded(true);
            } catch (err) {
                console.error(err);
            } finally {
                setIsLoaded(true);
            }
        };

        if (!isLoaded) {
            fetchData();
        }

        // Check if textareaRef.current is not null before calling focus
        if (textareaRef.current) {
            textareaRef.current.focus();
        }
    }, [isLoaded]);

    const handleCorrect = async () => {
        setUserInput([]);
        // Set isLoaded to false to trigger a new fetch on the next render
        setIsLoaded(false);
    };

    const handleInput = e => {
        const inputValue = e.target.value;
        setUserInput(inputValue.split(""));

        // check if value of text in the textarea is
        // equal to the quote text
        if (inputValue === charArray.join("")) {
            const endTime = new Date().getTime();
            const wpm = useWPM(
                startTime,
                endTime,
                inputValue.split(" ").length
            );
            setWPM(wpm);
            handleCorrect();
        }
    };
    const characters = () => {
        if (isLoaded) {
            return charArray.map((char, index) => (
                <Character
                    correct={
                        userInput[index] ? userInput[index] === char : undefined
                    }
                    char={char}
                    key={index}
                    colors={colors}
                />
            ));
        }
    };

    return (
        <div className="gap-7 center-game">
            <GameSettings colors={colors} setColors={setColors} />
            {isLoaded ? (
                <GameUI
                    WPM={WPM}
                    characters={characters}
                    handleInput={handleInput}
                    textareaRef={textareaRef}
                    userInput={userInput}
                />
            ) : (
                <ThreeDots color="lightblue" />
            )}
        </div>
    );
};

export default Game;
