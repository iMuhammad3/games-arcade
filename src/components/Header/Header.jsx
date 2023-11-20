import { Link } from "react-router-dom";
import { HomeSVG } from "../svgs/Home";
import { GamePadSVG } from "../svgs/GamePad";
import { CustomLink } from "./CustomLink";

function Header() {
    return (
        <header className="sticky top-0 flex items-center justify-between px-6 md:px-16 py-3 bg-slate-900/95 z-50">
            <Link to="/">
                <img
                    className="aspect-square w-12 md:w-14 rounded-md"
                    src="https://firebasestorage.googleapis.com/v0/b/mask-games.appspot.com/o/just-games.jpeg?alt=media&token=a499030b-163d-48a7-b773-805819af0f98"
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
