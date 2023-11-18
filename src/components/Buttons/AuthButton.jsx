const Button = ({ className = "", children }) => {
    return (
        <button
            className={
                className +
                " px-6 py-2 rounded-md bg-sky-600 hover:bg-sky-600/70"
            }
        >
            {children}
        </button>
    );
};

export default Button