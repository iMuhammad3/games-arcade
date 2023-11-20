import { SearchSVG } from "../../components/svgs/Search";

export const SearchInput = () => {
    return (
        <div className="relative">
            <input
                className="bg-slate-750 md:w-80 px-5 py-2 rounded-lg shadow outline-none"
                type="text"
                placeholder="Search Games..."
            />
            <SearchSVG className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-1/2" />
        </div>
    );
};
