import { useEffect, useRef, useState } from 'react'
import './canvas.scss'

const Canvas = (props) => {
    const [xValue, setXValue] = useState(1)
    const [yValue, setYValue] = useState(1)
    const [zValue, setZValue] = useState(1)

    useEffect(() => {
        props.animator.bindTo('3dcanvas')
        props.animator.render()
    }, [])

    useEffect(() => props.animator.redraw({x: xValue}), [xValue])
    useEffect(() => props.animator.redraw({y: yValue}), [yValue])
    useEffect(() => props.animator.redraw({z: zValue}), [zValue])

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