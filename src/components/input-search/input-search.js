import React from 'react';

function InputSearch({placeholder,inputHandler}) {
    return (
        <div>
            <input 
                type='search' 
                onChange={inputHandler}
                placeholder={placeholder}

            />
        </div>
    )
}

export default InputSearch;
