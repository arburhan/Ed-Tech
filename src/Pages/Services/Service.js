import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, name, image, instructor, duration, price } = service;
    const navigate = useNavigate();
    const handleOrder = (id) => {
        navigate(`/purchase/${id}`);
    }
    return (
        <>
            <div class="card w-96 bg-base-200 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={image} alt="" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    <p>By <span className='text-secondary' >{instructor}  </span> </p>
                    <div className='flex gap-12 py-2' >
                        <div>
                            <i class="fas fa-clock text-secondary"></i> {duration} hr
                        </div>
                        <div className='text-[red]' >
                            <i class="fa-solid fa-dollar-sign"></i> {price}
                        </div>
                    </div>
                    <div class="card-actions">
                        <button onClick={() => { handleOrder(_id) }} class="btn btn-accent">Enroll</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;