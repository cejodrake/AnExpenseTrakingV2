import React, { useState } from 'react';



const useButton = (label, defaultState, type) => {

    const [state, setState] = useState(defaultState);
    const id = `use-input-${label.replace(" ", "").toLowerCase()}`;

    const Button = () => (
        <div className="form-group login">
            <label htmlFor={label}>

                <button
                    value={state}
                    className="btn btn-lg btn-primary"
                    type={type}
                   /* disabled={this.validate()}*/ >
                    {label}</button >


            </label>
        </div>
    )

    return ([state, Button, setState]);

}

export default useButton;