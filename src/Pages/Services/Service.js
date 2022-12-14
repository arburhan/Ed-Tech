import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, name, image, instructor, duration, price } = service;
    const navigate = useNavigate();
    const handleOrder = (id) => {
        navigate(`/course/${id}`);
    }
    return (
        <>
            <div className="card md:w-96 bg-base-200 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>By <span className='text-sky-500' >{instructor}  </span> </p>
                    <div className='flex gap-12 py-2' >
                        <div>
                            <i className="fas fa-clock text-secondary"></i> {duration} hr
                        </div>
                        <div className='text-[red]' >
                            <i className="fa-solid fa-dollar-sign"></i> {price}
                        </div>
                    </div>
                    <div className="card-actions">
                        <button onClick={() => { handleOrder(_id) }} className="btn btn-accent">Enroll</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;