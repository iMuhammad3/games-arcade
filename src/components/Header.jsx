

function Header(){
    return (
        <header className="flex items-center justify-between bg-slate-100 dark:bg-slate-850 py-3 px-10 md:px-16 w-full shadow-lg">
            <img className="w-16 rounded-md aspect-square cursor-pointer" src="./src/assets/just-games.jpeg" alt="" />
            <input className="bg-slate-50 dark:bg-slate-700 dark:text-slate-50 md:w-96 px-6 py-2 rounded-lg outline-none" type="text" placeholder="Search for games..." />
            <div className="w-12 rounded-full cursor-pointer">
                <img src="./src/assets/blank-profile.png" alt="" />
            </div>
        </header>
    )
}

export default Header