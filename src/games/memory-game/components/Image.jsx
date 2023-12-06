import React from "react";

export const Image = ({ src, onClick, isPlaceholder }) => {
    const hoverClass = isPlaceholder ? "hover:brightness-125" : ""
    return (
        <img
            className={"aspect-square object-cover border cursor-pointer " + hoverClass}
            onClick={onClick}
            src={src}
            alt=""
        />
    );
};
