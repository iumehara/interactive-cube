import { useState } from "react";
import Canvas from "./Canvas";
import Example from "../example/Example";
import AnimatedCube from '../three/animatedCube';

const Playground = () => {
    const [showCube, setShowCube] = useState(true)

    const content = () => {
        if (showCube) {
            return <Canvas animator={new AnimatedCube()}/>
        } else {
            return <Example/>
        }
    }

    return (
        <>
            <button onClick={() => setShowCube(!showCube)}>toggle</button>
            {content()}
        </>
    )
}

export default Playground;