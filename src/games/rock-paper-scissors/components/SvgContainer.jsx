import React from "react";

export const SvgContainer = ({ children, computer = false, onClick }) => {
    return (
        <div onClick={onClick} className={`p-1 fill-sky-400 ${computer ? "" : "hover:scale-110 transition cursor-pointer active:scale-100"}`}>
            {children}
        </div>
    );
};
