
import React from 'react';

const Input = ({ name, state, type, handleChange }) => {
    return (
        <div className="form-group" >
            <label htmlFor={name}> {name}</label>
            <input
                name={name}
                id={name}
                value={state}
                className="form-control"
                type={type}
                onChange={handleChange}
            />
        </div>
    );
}


export default Input;