import { useState } from "react"

const Timer = () => {
    const [time, setTime] = useState(0)
    return (
        <div className="absolute top-0 text-4xl font-bold">{time}</div>
    )
}

export default Timer