import React from "react";
import { Gear } from "../Gear";

export const GearWrapper = ({onClick}) => {
    return (
        <div
            onClick={onClick}
            className="absolute left-8 top-8 fill-blue-100 cursor-pointer p-1"
        >
            <Gear />
        </div>
    );
};
