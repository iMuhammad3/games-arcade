import React from "react";

export const Square = ({ onClick, messi }) => {
    return (
        <div
            onClick={onClick}
            className={`${messi ? "messi" : ""} w-full md:w-[150px] aspect-square border cursor-pointer`}
        ></div>
    );
};
