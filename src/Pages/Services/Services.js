import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState();
    useEffect(() => {
        fetch('https://pure-meadow-27946.herokuapp.com/courses')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <section className='px-5 my-10' >
            <h2 className='text-center py-5'>Services</h2>
            <div className='md:grid md:grid-cols-3 items-center gap-y-10  md:gap-8' >
                {
                    services?.slice(-6).map(service => <Service key={service._id} service={service} ></Service>)
                }
            </div>
        </section>
    );
};

export default Services;

