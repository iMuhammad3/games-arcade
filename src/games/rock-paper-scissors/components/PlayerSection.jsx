import React from "react";

export const PlayerSection = ({ children }) => {
    return (
        <section className="flex flex-col items-center gap-3">
            {children}
        </section>
    );
};