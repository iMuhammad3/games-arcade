import React, { useEffect, useState } from "react";
import { Image } from "./components/Image";
import Logo from "../../assets/just-games.png";
import { GameSettings } from "./components/GameSettings";
import { useImages } from "./useImages";

// //duplicate images
// natureImages.push(...natureImages);
// //shuffle order of Images
// natureImages.sort(() => Math.random() - 0.5);

const Memory = () => {
    const initialMessage = "Let's test your memory!";
    const [imageCategoriesArray, isLoaded] = useImages();
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [message, setMessage] = useState(initialMessage);
    const [visibleCards, setVisibleCards] = useState(
        Array(imageCategoriesArray.natureImages.length).fill(false)
    );
    const [difficulty, setDifficulty] = useState("medium");
    const [images, setImages] = useState([]);
    const [length, setLength] = useState(2)

    const { natureImages, foodImages, footballImages } = imageCategoriesArray;

    useEffect(() => {
        if (!isLoaded) return;

        switch (difficulty) {
            case "easy": setLength(2)
            case "medium": setLength(3)
            case "hard": setLength(4)
        }
        if (flippedCards.length === 2) {
            const [firstIndex, secondIndex] = flippedCards;

            if (
                imageCategoriesArray.natureImages[firstIndex].name ===
                imageCategoriesArray.natureImages[secondIndex].name
            ) {
                setMessage("Correct!");
                setMatchedCards(prev => [...prev, firstIndex, secondIndex]);
            } else {
                setMessage("Nope!");
            }

            setTimeout(() => {
                setFlippedCards([]);
                setVisibleCards(prev =>
                    prev.map((_, index) => matchedCards.includes(index))
                );
                setMessage(initialMessage);
            }, 800);
        }

        if (matchedCards.length === imageCategoriesArray.natureImages.length) {
            // setMessage("You've got it all!");
            setMessage(
                `Matched: ${matchedCards.length}, Images: ${imageCategoriesArray.natureImages.length}, isLoaded: ${isLoaded}`
            );
        }
    }, [flippedCards, matchedCards, isLoaded]);

    const flipCard = index => {
        if (flippedCards.length === 2 || visibleCards[index]) {
            return;
        }
        setFlippedCards(prev => [...prev, index]);
        setVisibleCards(prev => {
            const newVisible = [...prev];
            newVisible[index] = true;
            return newVisible;
        });
    };

    return (
        <div className="center-game gap-5">
            <GameSettings
                difficulty={difficulty}
                setDifficulty={setDifficulty}
            />
            <h1 className="-mt-10">{message}</h1>
            <div className="grid grid-cols-4 w-full max-w-lg border">
                {imageCategoriesArray.natureImages.map((image, index) => (
                    <Image
                        key={index}
                        onClick={() => flipCard(index)}
                        src={visibleCards[index] ? image.url : Logo}
                    />
                ))}
            </div>
        </div>
    );
};

export default Memory;
