import React, {useState} from 'react';

const Rectangle = () => {

    const [rgb, setRGB] = useState({
        red: 0,
        green: 0,
        blue: 0
    });

    const [flag, setFlag] = useState(true);

    let rectangleStyle = {
        height: '255px',
        width: '255px',
        border: 'solid 1px black',
        backgroundColor: `rgb(${rgb.red},${rgb.green},${rgb.blue})`
    }

    const changeColor = ()=> {
        if(flag)
            setRGB({
                red: Math.random()*255,
                green: Math.random()*255,
                blue: Math.random()*255})
    }

    return (
        <div onMouseOver={changeColor} onDoubleClick={()=>setFlag(!flag)} style={rectangleStyle}>
            
        </div>
    );
}

export default Rectangle;
