const SearchInput = ({ forHeader }) => {
    const classes = forHeader ? `hidden md:block` : `md:hidden`;
    return (
        <input
            className={`${classes} bg-slate-50 border dark:border-none dark:bg-slate-700 dark:text-slate-50 w-full md:w-96 px-6 py-2 rounded-lg outline-none`}
            type="text"
            placeholder="Search for games..."
        />
    );
};

export default SearchInput