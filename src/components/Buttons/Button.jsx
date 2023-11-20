const Button = ({ className = "", children, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={
                "px-4 py-2 rounded-md shadow-md bg-sky-600 text-sky-100 hover:brightness-125 " +
                className
            }
        >
            {children}
        </button>
    );
};

export default Button;
