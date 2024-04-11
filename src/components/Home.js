// Styles and Assets
import '../styles/home.css'
// Functions
import { Link } from 'react-router-dom'

const Home = () =>
{
    return (
        <main className='games-page'>
            <Link to='/games/tiktaktoe' id='games-title'>Tik Tak Toe</Link>
            <Link to='/games/rain' id='games-title'>Rain</Link>
            <Link to='/games/devils' id='games-title'>Devils vs Saints</Link>
        </main>
    )
}
export default Home