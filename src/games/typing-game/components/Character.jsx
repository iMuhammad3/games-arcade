export const Character = ({ char, correct }) => {
    let color = "text-red-500 underline";
    // if correct is undefined then leave the text as white
    if (correct === undefined) color = "dark:text-slate-100 text-midnightblue";
    if (correct) color = "text-green-500";
    return <span className={color}>{char}</span>;
}