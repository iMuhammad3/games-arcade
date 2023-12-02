import React from "react";

export const Select = ({ children, className }) => {
    return (
        <select className={"bg-nightblue-700 px-5 py-2 rounded-lg cursor-pointer outline-none " + className}>
            {children}
        </select>
    );
};
