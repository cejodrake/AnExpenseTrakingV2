import React, { useState } from 'react';


const useDropdown = (label, defaultState, options) => {

    const [state, setState] = useState(defaultState);
    const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;

    const Dropdown = () => (
        <label htmlFor={id}>
            <select
                id={id}
                value={state}
                onChange={e => setState(e.target.value)}
                onBlur={e => setState(e.target.value)}
            // disabled={options.length === 0}
            >
                <option>All</option>
                {options.map(item => (
                    <option key={item._id} value={item._id}>{item.name}</option>
                ))}

            </select>

        </label>
    )

    return ([state, Dropdown, setState]);

}

export default useDropdown;