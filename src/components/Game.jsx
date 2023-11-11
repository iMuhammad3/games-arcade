function Game(){
    return (
        <div className="rounded-md overflow-hidden shadow-lg dark:shadow-gray-600/20 cursor-pointer hover:-translate-y-1 transition">
            <img className="w-[350px] aspect-video object-cover" src="./src/assets/game-previews/typing-game.png" alt="" />
            <p className="px-8 py-4 md:text-lg dark:bg-slate-950">Typing Game</p>
        </div>
    )
}

export default Game