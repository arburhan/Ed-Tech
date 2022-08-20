import React from 'react';
import courseImage from '../../Media/Images/Course app-pana.png';

const Banner = () => {
    return (
        <section className='bg-[#003145] px-10px md:px-[20px] text-white py-[45px]' >

            <div className='flex flex-col md:flex md:flex-row items-center justify-center ' >
                <div className='py-3 px-5 md:px-[20px] order-last md:order-first'>
                    <h1 className="text-2xl pl-4 md:text-5xl border-l-[5px] border-[#FFCE5C] ">Great developers with world class content</h1>
                    <p className='py-[35px]'>
                        Come and enjoy the most effective web dev learning process. We provide unlimited coding support,
                        daily
                        concept clear sessions, real-world projects, job placement service, and many more. And 66% of our
                        successful students get hired internationally
                    </p>
                    <button className='btn bg-white text-black hover:text-white' >Participate Now</button>
                </div>
                <div className='py-3 w-[90%] mx-auto order-first md:order-last'>
                    <figure>
                        <img src={courseImage} alt="" />
                    </figure>
                </div>
            </div>

        </section>
    );
};

export default Banner;