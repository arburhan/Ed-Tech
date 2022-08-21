import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner';
import ShortBenefit from './ShortBenefit';
import Statistics from './Statistics';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <Statistics></Statistics>
            <ShortBenefit></ShortBenefit>
        </>
    );
};

export default Home;