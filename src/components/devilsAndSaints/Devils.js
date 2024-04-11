import './style.css'
// functions
import { useState } from 'react' 
const Devils = () =>
{
    var sOnBoat = false;
    var dOnBoat = false;
    var boatLeft = true;
    const [dx, setDx] = useState(10)
    const [dy, setDy] = useState(200)
    const [sx, setSx] = useState(-40)
    const [sy, setSy] = useState(200)
    const [bx, setBx] = useState(-190)
    const [by, setBy] = useState(260)
    const restartGame = () =>
    {
        setDx(10)
        setDy(200)
        setSx(-40)
        setSy(200)
        setBx(-190)
        setBy(260)
    }
    const handleClick = (type) =>
    {
        if (type === "saint" )
        {
            if (!sOnBoat && boatLeft)
            {
                setSx(-40 + 80)
                setSy(200 + 10)
                sOnBoat = true
            }
            else if (sOnBoat && boatLeft)
            {
                setSx(-40)
                setSy(200)
                sOnBoat = false
            }
            else if (sOnBoat && !boatLeft)
            {
                setSx(0)
                setSy(200)
                sOnBoat = false
            }
        }
        else if (type === 'devil')
        {
            if (!dOnBoat && boatLeft)
            {
                setDx(110)
                setDy(210)
                dOnBoat = true
            }
            else if (dOnBoat && boatLeft)
            {
                setDx(10)
                setDy(200)
                dOnBoat = false
            }
        } 
        else if (type === 'boat')
        {
            if (boatLeft && sOnBoat && dOnBoat)
            {
                setBx(-65)
                setSx(-40 + 80 + 125)
                setDx(110 + 125)
                boatLeft = false
            }
            else if (boatLeft && sOnBoat)
            {
                setBx(-65)
                setSx(-40 + 80 + 125)
                boatLeft = false
            }
            else if (!boatLeft)
            {
                setBx(-190)
                boatLeft = true
            }
            
        }
    }
    return (
        <>
        <div className='canvas'>
            <div className='land-right'></div>
            <div className='land-left'></div>
            <div className='river'></div>
            <button className='cha devil' 
                onClick={() => handleClick('devil')} 
                style={{top: dy + "px", left: dx + "px"}}></button>
            <button className='cha saint' 
                onClick={() => handleClick('saint')}
                style={{top: sy + "px", left: sx + "px"}}></button>
            <button className='boat'
                onClick={() => handleClick('boat')}
                style={{top: by + "px", left: bx + "px"}}></button>
        </div>
        <button className='restart' onClick={restartGame}>Restart</button>
        </>

    )
}
export default Devils