import React from "react";
import { Select } from "../../../../components/select/Select";

export const Categories = ({categories, category, setCategory}) => {
    const format = (string) => {
        return string.toUpperCase().slice(0, 1) + string.slice(1)
    }
    return (
        <Select className="border-none !py-2" value={category} onChange={e => setCategory(e.target.value)}>
            <option defaultValue={true} value="">All Games</option>
            {categories.map(category => {
                return <option value={category}>{format(category)}</option>
            })}
        </Select>
    );
};
