import React from 'react'
import { Square } from './components/Square'

const Game = () => {
    const board = Array(9).fill("")
  return (
    <div className='center-game'>
        {board.map(square => <Square>{square}</Square>)}
    </div>
  )
}

export default Game