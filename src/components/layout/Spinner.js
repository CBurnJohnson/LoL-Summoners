import React from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
    return (
        <div className='spinner'>
            <img
                src={spinner}
                alt=''
                style={{
                    margin: 'auto',
                    display: 'block',
                    background: 'transparent'
                }}
            />
        </div>
    );
};

export default Spinner;
