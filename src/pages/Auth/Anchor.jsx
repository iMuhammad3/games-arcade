const Anchor = ({ children, handleClick }) => {
    return (
        <span onClick={handleClick} className="underline cursor-pointer text-center hover:text-slate-300">
            {children}
        </span>
    );
};
export default Anchor