import { useState } from "react";
import SearchInput from "./Inputs/SearchInput";

function Header({setSelectedGame, selectedGame}) {
    const [isDarkMode, setIsDarkMode] = useState(true);

    // add dark class to the body is 'isDarkMode' is true
    if(isDarkMode){
        document.body.classList.add('dark')
    } else if(!isDarkMode){
        document.body.classList.remove('dark')
    }

    // change the select game from "selected-game" to "Selected Game" format
    const formattedName = selectedGame?.split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1, word.length))
    .join(" ")

    const currentGame = () => {
        return <div className="text-4xl hidden md:block">{formattedName}</div>
    }

    return (
        <header className="sticky top-0 flex items-center justify-between bg-slate-100 dark:bg-slate-850 text-midnightblue dark:text-slate-50 py-3 px-10 md:px-16 w-full shadow-lg">
            <img
                // simulates "going back to home page"
                onClick={() => setSelectedGame(null)}
                className="w-12 rounded-md aspect-square cursor-pointer"
                src="./src/assets/just-games.jpeg"
                alt=""
            />
            {/* if there's a selected game, display the name. Else display the search input */}
            {(selectedGame && currentGame()) || <SearchInput forHeader={true} />}
            <div className="w-10 rounded-full cursor-pointer">
                <img className="w-8" src="./src/assets/blank-profile.png" alt="" />
            </div>
        </header>
    );
}

export default Header;
