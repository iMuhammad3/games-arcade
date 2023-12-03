import React from "react";
import messi from '../messi.png'

export const Square = ({ onClick, hasImage, file }) => {
    const image = file ? URL.createObjectURL(file) : messi
    const style = {
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "50%",
    };
    return (
        <div
            style={hasImage ? style : {}}
            onClick={onClick}
            className="w-full md:w-[150px] aspect-square border cursor-pointer"
        ></div>
    );
};
