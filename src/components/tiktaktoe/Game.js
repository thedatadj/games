import Board from './Board'
// functions
import {useState} from 'react'
const Game = () =>
{
    const [xIsNext, setXIsNext] = useState(true)
    const [history, setHistory] = useState([Array(9).fill(null)])
    const currentSquares = history[history.length - 1]
    const handlePlay = (nextSquares) =>
    {

    }
    return (
        <div className='game0'>
            <div className='game-board'>
                <Board x />
            </div>
            <div className='game-info'>
                <ol>{}</ol>
            </div>
        </div>
    )
}
export default Game