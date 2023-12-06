import React from "react";

export const Image = ({ src, onClick }) => {
    return (
        <img
            className="aspect-square object-cover border cursor-pointer"
            onClick={onClick}
            src={src}
            alt=""
        />
    );
};
