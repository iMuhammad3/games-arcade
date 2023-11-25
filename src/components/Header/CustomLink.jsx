import React from 'react'
import { Link } from "react-router-dom";

export const CustomLink = ({ to, children, title }) => {
    return (
        <Link title={title} to={to} className="flex items-center gap-2 hover:underline">
            {children}
        </Link>
    );
};