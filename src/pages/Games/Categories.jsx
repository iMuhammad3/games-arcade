import React from "react";
import { Select } from "../../components/select/Select";
export const Categories = () => {
    return (
        <Select>
            <option defaultValue={true}>All Games</option>
            <option value="Fun">Fun</option>
            <option value="Educational">Educational</option>
            <option value="Desktop">Desktop/Laptop</option>
            <option value="Others">Others</option>
        </Select>
    );
};
