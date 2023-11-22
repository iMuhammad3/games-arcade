import { useEffect, useState } from "react";

const Timer = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(prevTime => prevTime + 1)
        }, 1000)
        return () => clearInterval(intervalId);
    }, []);

    return <div className="text-4xl font-bold -mt-10">{time}</div>;
};

export default Timer;
