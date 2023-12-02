import React, { useEffect, useState } from "react";
import { Image } from "./components/Image";
import Logo from "../../assets/just-games.png";
import { GameSettings } from "./components/GameSettings";

const images = [
    {
        name: "donut",
        url: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzc2VydHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        name: "veggies",
        url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        name: "pizza",
        url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHx8MHx8fDA%3D",
    },
    {
        name: "cake",
        url: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHx8MHx8fDA%3D",
    },
    {
        name: "watch",
        url: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHwwfDB8fHww",
    },
    {
        name: "rugby",
        url: "https://images.unsplash.com/photo-1576181384620-ba96e6856719?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "orange",
        url: "https://images.unsplash.com/photo-1494253109108-2e30c049369b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8MHwwfHx8MA%3D%3D",
    },
    {
        name: "flower",
        url: "https://images.unsplash.com/photo-1494894194458-0174142560c0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHJhbmRvbXxlbnwwfDB8MHx8fDA%3D",
    },
];

//duplicate images
images.push(...images);
//shuffle order of images
images.sort(() => Math.random() - 0.5);

const Memory = () => {
    const initialMessage = "Let's test your memory!";
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [message, setMessage] = useState(initialMessage);
    const [visibleCards, setVisibleCards] = useState(
        Array(images.length).fill(false)
    );

    useEffect(() => {
        if (flippedCards.length === 2) {
            const [firstIndex, secondIndex] = flippedCards;

            if (images[firstIndex].name === images[secondIndex].name) {
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

        if (matchedCards.length === images.length) {
            setMessage("You've got it all!");
        }
    }, [flippedCards, matchedCards]);

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
            <GameSettings />
            <h1 className="-mt-10">{message}</h1>
            <div className="grid grid-cols-4 w-full max-w-lg border">
                {images.map((image, index) => (
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


export default Memory