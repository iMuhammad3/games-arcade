import { Outlet } from "react-router-dom"
import Header from "../../components/Header/Header"

const Game = () => {
  return (
    <div className="min-h-[100dvh]">
        <Header />
        <Outlet />
    </div>
  )
}

export default Game