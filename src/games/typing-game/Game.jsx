import Timer from "./Timer";

export const Game = ({userInput, setUserInput, text}) => {

    const handleInput = (e) => {
        const newUserInput = e.target.value.split("")
        setUserInput(newUserInput)
        console.log(userInputArray)
    }
    return (
        <>
            <Timer />
            <div className="bg-slate-200 dark:bg-slate-700 md:w-[450px] w-80 mt-16 p-4 flex flex-col gap-2 rounded-md shadow-lg">
                <p>
                    {text.map((char, index) => (
                        <Char correct={
                            // check if user input at text index exists.
                            // if so set value of 'correct' to result of 'userInput[index] === char'
                            // else set to undefined
                            userInput[index] ? userInput[index] === char : undefined
                        } char={char} />
                    ))}
                </p>
                <textarea
                    onChange={handleInput}
                    rows="5"
                    className="bg-slate-100 dark:bg-slate-800 px-4 py-2 w-full rounded outline-none resize-none"
                ></textarea>
            </div>
        </>
    )
}

function Char({char, correct}){
    let color = "text-red-500 underline"
    // if correct is undefined then leave the text as white
    if(correct === undefined) color = "text-slate-100"
    if(correct) color = "text-green-500"
    return <span className={color}>{char}</span>
}