import React from "react";

export const Option = ({ children, onClick, number }) => {
    return (
        <li
            className="cursor-pointer px-3 py-1 rounded hover:bg-slate-600 transition"
            onClick={onClick}
        >
            {number}. {children}
        </li>
    );
};
