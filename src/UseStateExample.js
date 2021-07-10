import React, { useState}from "react";

function UseStateExample() {    
    const [count, setCount] = useState(0)

    function decrementCount() {
        setCount(prevCount=> prevCount - 1 )
    }
    function incrementCount() {
        setCount(prevCount => prevCount + 1)
    }

    return (
        <>        
            <button style={{width: 100, height: 50, margin: 50}} onClick={decrementCount}><b>-</b></button>
            <span>{count}</span>
            <button style={{width: 100, height: 50, margin:50}} onClick={incrementCount}><b>+</b></button>
        </>
    )
}

export default UseStateExample;