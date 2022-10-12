import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <div>
            <button className='mt-4 btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-cyan-500 to-blue-500'>{ children }</button>
        </div>
    );
};

export default PrimaryButton;