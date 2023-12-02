import React from "react";
import Timer from "./components/Timer";

export const GameUI = ({ handleInput, characters, userInput, textareaRef, WPM }) => {
    return (
        <>
            <Timer />
            <div>Word's Per Minute: {WPM}</div>
            <div className="bg-nightblue-700 font-serif md:w-[550px] w-full mx-2 md:mx-0 p-4 flex flex-col gap-4 rounded-md shadow-lg">
                <p className="text-lg">{characters()}</p>
                <textarea
                    ref={textareaRef}
                    value={userInput.join("")}
                    onChange={handleInput}
                    rows="7"
                    className="bg-nightblue-800 font-serif px-4 py-2 w-full rounded outline-none resize-none"
                ></textarea>
            </div>
        </>
    );
};
