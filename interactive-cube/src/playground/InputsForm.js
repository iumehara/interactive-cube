import './inputsForm.scss';

const InputsForm = () => {
    return (
        <div className='InputsForm'>
            <div className='inputs'>
                <label>height</label>
                <input/>
                <label>width</label>
                <input/>
                <label>length</label>
                <input/>
                <label>elevation</label>
                <input/>
            </div>

            <button className='button'>Update</button>
        </div>
    )
}

export default InputsForm