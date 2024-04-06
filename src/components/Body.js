// Styles and Assets
import '../styles/body.css'
// Functions
import { Routes, Route } from 'react-router-dom'
// Components
import Home from './Home'
import TikTak from './TikTak'

const Body = () =>
{
    return (
        <body className='body'>
            <Routes>
                <Route path='/games' element={<Home />} />
                <Route path='/games/tiktaktoe' element={<TikTak />}/>
            </Routes>
        </body>
    )
}
export default Body