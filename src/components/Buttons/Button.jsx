import React from 'react'

const Button = ({ className = "", children, onClick, disabled }) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={
                "px-4 py-2 rounded-md shadow-md bg-sky-700 text-sky-100 hover:brightness-125 " +
                className + (disabled && "hover:brightness-95 cursor-not-allowed")
            }
        >
            {children}
        </button>
    );
};

export default Button;
