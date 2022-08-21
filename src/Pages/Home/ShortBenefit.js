import React, { useEffect, useState } from 'react';
import BenefitCard from './BenefitCard';

const ShortBenefit = () => {
    const [shortBenefit, setShortBenefit] = useState();
    useEffect(() => {
        fetch('shortBenefit.json')
            .then(res => res.json())
            .then(data => setShortBenefit(data))
    }, []);

    return (
        <div>
            <div className='text-center' >
                <h2 className="text-3xl md:text-5xl">What you get </h2>
                <p className='py-3' >Everything you will get from us after completing the course</p>
            </div>
            <div className='flex flex-col md:flex-row content-center items-center gap-y-5 md:gap-x-5 px-12 py-10' >
                {
                    shortBenefit?.map(benefit => <BenefitCard key={benefit._id} benefit={benefit} ></BenefitCard>)
                }
            </div>
        </div>
    );
};

export default ShortBenefit;