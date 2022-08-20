import React from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { id } = useParams();
    console.log(id)
    return (
        <div>
            <h2>Purchase</h2>
        </div>
    );
};

export default Purchase;