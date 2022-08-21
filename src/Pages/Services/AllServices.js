import React, { useEffect, useState } from 'react';
import Service from './Service';

const AllServices = () => {
    const [services, setServices] = useState();
    useEffect(() => {
        fetch('https://pure-meadow-27946.herokuapp.com/courses')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <section className='px-5 my-10' >
            <h2 className='text-center py-5'>Services</h2>
            <div className='md:grid md:grid-cols-3 items-center  gap-8' >
                {
                    services?.map(service => <Service service={service} ></Service>)
                }
            </div>
        </section>
    );
};

export default AllServices;