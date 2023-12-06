import React from "react";

export const useLength = (difficulty) => {
    switch (difficulty) {
        case "easy":
            return 4;
        case "medium":
            return 6;
        case "hard":
            return 8;
    }
};
