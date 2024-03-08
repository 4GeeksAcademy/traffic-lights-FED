import React, {useState} from 'react';

const TrafficLights = () => {
    const[color,setColor]=useState("red");
    const [hasPurple, setHasPurple] = useState(false);
    
    const handleClick = (newColor) => {
        setColor(newColor);
      };
    
    const colors = hasPurple ? ['red', 'yellow', 'green', 'purple'] : ['red', 'yellow', 'green'];

    const nextColor=()=>{
        const currentIndex=colors.indexOf(color);
        const nextIndex=(currentIndex + 1) % colors.length;
        setColor(colors[nextIndex]);
    }
    
    const addPurple = () => {
        setHasPurple(true)
    };

    return(
        <div className="traffic-lights">
            <div
                className={`light red ${color==='red'?'glow':''}`}
                onClick={()=>handleClick('red')}
            />
            <div
                className={`light yellow ${color==='yellow'?'glow':''}`}
                onClick={()=>handleClick('yellow')}
            />
            <div
                className={`light green ${color==='green'?'glow':''}`}
                onClick={()=>handleClick('green')}
            />
            {hasPurple && (
            <div
                className={`light purple ${color === 'purple' ? 'glow' : ''}`}
                onClick={() => handleClick('purple')}
            />
            )}

            <button onClick={nextColor}>Cycle Through Colors</button>
            <button onClick={addPurple} disabled={hasPurple}> Add Purple Color</button>
        </div>
    );
};

export default TrafficLights;
