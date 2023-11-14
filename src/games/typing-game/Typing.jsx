import { useEffect, useState } from "react";
import Timer from "./Timer";

export default function Game(){
    const [text, setText] = useState("")
    
    useEffect(() => {
        const fetchQuote = async () => {
            const resp = await fetch("http://api.quotable.io/random")
            const data = await resp.json()
            console.log(data);
            setText(data.content)
        }
        fetchQuote()
    }, [])

    return (
        <div className="flex flex-col items-center relative">
            <Timer />
            <div className="bg-slate-200 dark:bg-slate-700 md:w-[450px] w-80 mt-16 p-4 flex flex-col gap-2 rounded-md shadow-lg">
                <p>{text}</p>
                <textarea rows="5" className="bg-slate-100 dark:bg-slate-800 px-4 py-2 w-full rounded outline-none resize-none"></textarea>
            </div>
        </div>
    )
}
