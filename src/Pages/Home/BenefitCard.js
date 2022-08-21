import React from 'react';

const BenefitCard = ({ benefit }) => {
    return (
        <>
            <div className='text-center px-5 border border-slate-200 rounded-md p-5 cursor-pointer 
            transition duration-700 ease-in-out  hover:-translate-y-1 hover:scale-105   
            ' >
                <figure class="px-10 pt-10 w-[50%] mx-auto">
                    <img src={benefit?.image} alt="" class="rounded-xl" />
                </figure>
                <h2 className='text-xl font-semibold py-3 text-white' >{benefit?.benefitName}</h2>
                <p>{benefit?.description}</p>
            </div>
        </>
    );
};

export default BenefitCard;