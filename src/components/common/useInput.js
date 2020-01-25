import React, { useState } from 'react';


const useInput = (label, defaultState, type) => {

    const [state, setState] = useState(defaultState);

    const id = `use-input-${label.replace(" ", "").toLowerCase()}`;
    const handleChange = (e) => {
        setState(e.target.value);
    }
    const Input = () => (

        <div className="form-group">
            <label htmlFor={id}>
                {label}
                <input
                    id={id}
                    value={state}
                    onChange={handleChange}
                    onBlur={handleChange}
                    className="form-control"
                    type={type}
                />




            </label>
        </div>

    )

    return ([state, Input, setState]);

}

export default useInput;