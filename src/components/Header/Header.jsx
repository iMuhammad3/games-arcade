import React from 'react'
import { Link } from "react-router-dom";
import { HomeSVG } from "../svgs/Home";
import { GamePadSVG } from "../svgs/GamePad";
import { CustomLink } from "./CustomLink";
import logo from '../../assets/just-games.png'

function Header() {
    return (
        <header className="sticky top-0 flex items-center justify-between px-6 md:px-16 py-3 bg-nightblue-900/95 z-40">
            <Link to="/">
                <img
                    className="aspect-square w-12 md:w-14 rounded-md"
                    src={logo}
                    alt=""
                />
            </Link>
            <ul className="flex gap-3 ">
                <CustomLink title="Home" to="/">
                    <HomeSVG />
                    <LinkName>Home</LinkName>
                </CustomLink>
                <CustomLink title="Games" to="/games">
                    <GamePadSVG />
                    <LinkName>Games</LinkName>
                </CustomLink>
            </ul>
        </header>
    );
}

const LinkName = ({ children }) => {
    return <p className="hidden md:block">{children}</p>;
};

export default Header;
