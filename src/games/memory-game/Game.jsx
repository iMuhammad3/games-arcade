import React, { useEffect, useState } from "react";
import { Image } from "./components/Image";
import Logo from "./placeholder.svg";
import { GameSettings } from "./components/GameSettings";
import { useImages } from "./hooks/useImages";
import { useImageCategory } from "./hooks/useImageCategory";
import { ThreeDots } from "react-loader-spinner";
import { useLength } from "./hooks/useLength";
import Button from "../../components/Buttons/Button";

const Memory = () => {
    const [_, isLoaded] = useImages();
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [imageCategory, setImageCategory] = useState("any");
    const [difficulty, setDifficulty] = useState("easy");
    const images = useImageCategory(imageCategory, difficulty);
    const [visibleCards, setVisibleCards] = useState(
        Array(useLength(difficulty) * 2).fill(false)
    );

    useEffect(() => {
        if (flippedCards.length === 2) {
            setTimeout(() => {
                const [firstIndex, secondIndex] = flippedCards;
                if (images[firstIndex].name === images[secondIndex].name) {
                    setMatchedCards(prev => [...prev, firstIndex, secondIndex]);
                }
                setFlippedCards([]);
                setVisibleCards(prev =>
                    prev.map((_, index) => matchedCards.includes(index))
                );
            }, 1500);
        }
    }, [flippedCards]);

    useEffect(() => {
        setVisibleCards(prev =>
            prev.map((_, index) => matchedCards.includes(index))
        );
    }, [matchedCards]);

    useEffect(() => {
        resetGame()
    }, [imageCategory, difficulty]) 
    
    const resetGame = () => {
        setFlippedCards([])
        setMatchedCards([])
        setVisibleCards(Array(useLength(difficulty) * 2).fill(false))
    }

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
                imageCategory={imageCategory}
                setImageCategory={setImageCategory}
                difficulty={difficulty}
                setDifficulty={setDifficulty}
            />
            {isLoaded ? (
                <>
                    <h1 className="-mt-10">Test your memory!</h1>
                    <div className="grid grid-cols-4 w-full max-w-lg border ">
                        {images.map((image, index) => {
                            const visible = visibleCards[index];
                            return (
                                <Image
                                    isPlaceholder={!visible}
                                    key={index}
                                    onClick={() => flipCard(index)}
                                    src={visible ? image.url : Logo}
                                />
                            );
                        })}
                    </div>
                    <Button onClick={resetGame}>Reset</Button>
                </>
            ) : (
                <ThreeDots />
            )}
        </div>
    );
};

export default Memory;
