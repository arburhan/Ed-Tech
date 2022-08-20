import React from 'react';
import loading from '../../Media/Images/loading.gif';

const Loading = () => {
    return (
        <div className='h-screen flex items-center justify-center'>
            <figure>
                <img src={loading} alt="" />
            </figure>
        </div>
    );
};

export default Loading;