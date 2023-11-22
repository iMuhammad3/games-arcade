import React from "react";

export const Square = ({onClick, turn }) => {
    return <div onClick={onClick} className={turn + " relative w-40 aspect-square border cursor-pointer"}></div>;
};
