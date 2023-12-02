import React from "react";
export const Character = ({ char, correct, colors }) => {
    let color = colors.default;
    let className
    // if correct is undefined then leave the text as white
    if (correct === false) {
        color = colors.wrong;
        className = "underline";
    }
    if (correct) color = colors.correct;
    return (
        <span style={{ color: color }} className={className}>
            {char}
        </span>
    );
};
