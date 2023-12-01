import React from 'react'
import { SearchSVG } from "../../components/svgs/Search";

export const SearchInput = ({ userInput, setUserInput }) => {
    return (
        <div className="relative">
            <input
                value={userInput}
                onChange={e => setUserInput(e.target.value)}
                className="bg-nightblue-700 placeholder:text-slate-300 w-full md:w-80 px-5 py-2 rounded-lg shadow outline-none"
                type="text"
                placeholder="Search Games..."
            />
            <SearchSVG className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-1/2" />
        </div>
    );
};
