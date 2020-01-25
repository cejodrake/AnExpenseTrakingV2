import React from 'react';
import Input from './Input';
import { useState } from 'react';



const InputRender = (name, label, type, ) => {
    const [state, setState] = useState();

    < Input
        name={name}
        label={label}
        type={type}
        value={state}
        onChange={e => setState(e.target.value)}
        onBlur={e => setState(e.target.value)}
    />
}


export default {
    InputRender
}