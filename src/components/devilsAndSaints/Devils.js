import './devils.css'
// functions
import { useState } from 'react'
// Variables
var sOnBoat = false;
var dOnBoat = false;
var boatLeft = true;
// Objects
const boat = {x: -190, y: 260, cross: 125}
const saint = {x: -40, y: 200, Xjump: 80, Yjump: 10}
const devil = {x: 10, y: 200, Xjump: 100, Yjump: 10}
const Devils = () =>
{
    const [dx, setDx] = useState(devil.x)
    const [dy, setDy] = useState(devil.y)
    const [sx, setSx] = useState(saint.x)
    const [sy, setSy] = useState(saint.y)
    const [bx, setBx] = useState(boat.x)
    const [by, setBy] = useState(boat.y)
    const restartGame = () =>
    {
        setDx(10)
        setDy(200)
        setSx(-40)
        setSy(200)
        setBx(-190)
        setBy(260)
        sOnBoat = false;
        dOnBoat = false;
        boatLeft = true;
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
                setSx(200)
                setSy(200)
                sOnBoat = false
            }
            else if (!sOnBoat && !boatLeft)
            {
                setSx(saint.x + saint.Xjump + boat.cross)
                setSy(saint.y + saint.Yjump)
                sOnBoat = true
            }
        }
        else if (type === 'devil')
        {
            if (!dOnBoat && boatLeft)
            {
                setDx(devil.x + devil.Xjump)
                setDy(devil.y + devil.Yjump)
                dOnBoat = true
            }
            else if (dOnBoat && boatLeft)
            {
                setDx(10)
                setDy(200)
                dOnBoat = false
            }
            else if (dOnBoat && !boatLeft)
            {
                setDx(devil.x + 2*devil.Xjump + boat.cross)
                setDy(devil.y)
                dOnBoat = false
            }
            else if (!dOnBoat && !boatLeft)
            {
                setDx(devil.x + devil.Xjump + boat.cross)
                setDy(devil.y + devil.Yjump)
                dOnBoat = true
            }
            // Debug devil
            //console.log("Devil is on boat:", dOnBoat)
        } 
        else if (type === 'boat')
        {
            if (sOnBoat && dOnBoat)
            {
                if (boatLeft)
                {
                    setBx(boat.x + 125)
                    setSx(-40 + 80 + 125)
                    setDx(110 + 125)
                    boatLeft = false
                }
                else if (!boatLeft)
                {
                    setBx(boat.x)
                    setDx(110)
                    setSx(40)
                    boatLeft = true
                }
            }
            else if (sOnBoat && !dOnBoat)
            {
                if (boatLeft)
                {
                    setSx(saint.x + saint.Xjump + boat.cross)
                    setBx(boat.x + boat.cross)
                    boatLeft = false
                }
                else if (!boatLeft)
                {
                    setSx(saint.x + saint.Xjump)
                    setBx(boat.x)
                    boatLeft = true
                }
            }
            else if (!sOnBoat && dOnBoat)
            {
                if (boatLeft)
                {
                    setBx(boat.x + boat.cross)
                    setDx(devil.x + devil.Xjump + boat.cross)
                    boatLeft = false
                }
                else if (!boatLeft)
                {
                    setBx(boat.x)
                    setDx(devil.x + devil.Xjump)
                    boatLeft = true
                }
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
                style={{top: dy + "px", left: dx + "px"}}>1</button>
            <button className='cha saint' 
                onClick={() => handleClick('saint')}
                style={{top: sy + "px", left: sx + "px"}}>1</button>
            <button className='boat'
                onClick={() => handleClick('boat')}
                style={{top: by + "px", left: bx + "px"}}></button>
        </div>
        <button className='restart' onClick={restartGame}>Restart</button>
        </>

    )
}
export default Devils