import React from "react";

export const SvgContainer = ({ children, computer = false }) => {
    return (
        <div className={`p-1 fill-sky-400 ${computer ? "" : "hover:scale-110 transition cursor-pointer active:scale-100"}`}>
            {children}
        </div>
    );
};
