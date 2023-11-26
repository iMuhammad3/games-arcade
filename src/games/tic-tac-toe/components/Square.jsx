import React from "react";

export const Square = ({onClick, turn }) => {
    return <div onClick={onClick} className={turn + " relative aspect-square border-2 cursor-pointer"}></div>;
};
