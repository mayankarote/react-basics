import React, { useState, useEffect } from 'react';

export default function WindowSize(){

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [ WindowHeight, setWindowHeight] = useState(window.innerHeight)

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }
    const handleResize1 = () => {
        setWindowHeight(window.innerHeight)
    }
    useEffect(() => {
            window.addEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
            window.addEventListener('resize', handleResize1)
    }, [])

    return (   
        <div>{windowWidth}, {WindowHeight}</div>
    )

}