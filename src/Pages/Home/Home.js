import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner';
import Statistics from './Statistics';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <Statistics></Statistics>
        </>
    );
};

export default Home;