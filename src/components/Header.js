// Styles
import '../styles/header.css'
// Functions
import { Link } from 'react-router-dom'

const Header = () =>
{
    return (
        <header className='header'>
            <Link to='/games' className='games'>
                Games
            </Link>
        </header>
    )
}
export default Header