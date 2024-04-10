// Styles
import '../styles/header.css'
// Functions
import { Link } from 'react-router-dom'

const Header = () =>
{
    return (
        <header className='header'>
            <Link to='/games/tiktaktoe' className='game tiktaktoe'>Tik Tak Toe</Link>
            <Link to='/games' className='game home'>Games</Link>
            <Link to='/games/rain' className='game rain'>Rain</Link>
        </header>
    )
}
export default Header