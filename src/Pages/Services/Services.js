import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState();
    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <section className='px-5 my-10' >
            <h2 className='text-center py-5'>Services</h2>
            <div className='md:grid md:grid-cols-3 items-center gap-y-10  md:gap-8' >
                {
                    services?.slice(-6).map(service => <Service service={service} ></Service>)
                }
            </div>
        </section>
    );
};

export default Services;

