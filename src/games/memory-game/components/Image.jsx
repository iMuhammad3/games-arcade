import React from "react";

export const Image = ({ src, onClick, isPlaceholder }) => {
    const hoverClass = isPlaceholder ? " hover:brightness-125" : " rotate-[360deg]"
    return (
        <img
            className={"aspect-square object-cover border cursor-pointer saturate-200 transition duration-500 " + hoverClass}
            onClick={onClick}
            src={src}
            alt=""
        />
    );
};
