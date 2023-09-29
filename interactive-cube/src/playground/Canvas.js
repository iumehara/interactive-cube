import { useEffect, useRef, useState } from 'react'
import './canvas.scss'
import AnimatedCube from '../three/animatedCube';

const Canvas = () => {
    const [xValue, setXValue] = useState(1)
    const [yValue, setYValue] = useState(1)
    const [zValue, setZValue] = useState(1)

    const cube = useRef()

    useEffect(() => {
        if (!cube.current) {
            cube.current = new AnimatedCube('3dcanvas')
        }
        
        cube.current.rotate()
    }, [])

    useEffect(() => cube.current.redraw({x: xValue}), [xValue])
    useEffect(() => cube.current.redraw({y: yValue}), [yValue])
    useEffect(() => cube.current.redraw({z: zValue}), [zValue])

    return (
        <div className='Canvas'>
            <div>
                <button onClick={() => setXValue(xValue + 1)}>X {xValue}</button>
                <button onClick={() => setYValue(yValue + 1)}>Y {yValue}</button>
                <button onClick={() => setZValue(zValue + 1)}>Z {zValue}</button>
            </div>
            <div id='3dcanvas'></div>
        </div>
    )
}

export default Canvas