import { useState } from "react";

export function Counter(){
    const [increment, setIncrement] = useState(0);

    function add() {
        setIncrement(increment + 1);
    }

    
    return(
        <div>
            <h2>{increment}</h2>
            <button onClick={add} type="button">Add</button>
        </div>

    )

} 