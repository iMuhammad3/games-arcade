import Timer from "./Timer";

export default function Game(){
    return (
        <div className="flex flex-col items-center relative">
            <h1 className="font-bold text-4xl">Typing Game</h1>
            <Timer />
        </div>
    )
}

