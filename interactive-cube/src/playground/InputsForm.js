import {useState } from 'react';
import './inputsForm.scss';

const CubeConfig = props => {
    const [config, setConfig] = useState(props.config)

    const valueChanged = (e, key) => {
        const updateConfig = {
            ...config,
            [key]: parseInt(e.target.value)
        }
        setConfig(updateConfig)

        props.updateConfig(updateConfig)
    }

    return (
        <div className='cube-config'>
            <label>height</label>
            <input defaultValue={config.height} onChange={e => valueChanged(e, 'height')}/>
            <label>width</label>
            <input defaultValue={config.width} onChange={e => valueChanged(e, 'width')}/>
            <label>length</label>
            <input defaultValue={config.length} onChange={e => valueChanged(e, 'length')}/>
            <label>x</label>
            <input defaultValue={config.x} onChange={e => valueChanged(e, 'x')}/>
            <label>y</label>
            <input defaultValue={config.y} onChange={e => valueChanged(e, 'y')}/>
            <label>z</label>
            <input defaultValue={config.z} onChange={e => valueChanged(e, 'z')}/>
            <button>Save</button>
        </div>
    )
}

const randomInt = () => {
    return Math.floor(Math.random() * 10000)
}

const InputsForm = () => {
    const [defaultConfig, setDefaultConfig] = useState({
        id: randomInt(),
        height: 100,
        width: 100,
        length: 100,
        x: 0,
        y: 0,
        z: 0
    })
    const [cubeConfigs, setCubeConfigs] = useState([])

    const addButtonClicked = () => {
        setCubeConfigs([
            ...cubeConfigs,
            defaultConfig
        ])
        setDefaultConfig({
            ...defaultConfig,
            id: randomInt(),
            x: defaultConfig.x + 200
        })
    }

    const configUpdated = (updatedConfig) => {
        const untouchedConfigs = cubeConfigs.filter(config => config.id != updatedConfig.id)

        console.log('untouched', untouchedConfigs);
        console.log('config to update', updatedConfig);

        setCubeConfigs([
            ...untouchedConfigs,
            updatedConfig
        ])
    }

    return (
        <div className='InputsForm'>
            <button className='button' onClick={() => addButtonClicked()}>Add</button>

            <div className='inputs'>
                {cubeConfigs.map(config => <CubeConfig config={config} updateConfig={configUpdated}/>)}
            </div>

        </div>
    )
}

export default InputsForm