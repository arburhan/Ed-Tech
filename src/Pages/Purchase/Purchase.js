import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';


const Purchase = () => {
    const stripePromise = loadStripe('pk_test_51L1X0aJ4uo6umqFGEVoEth2hy2Sr4y5BcNWLuQaVxL5UYEuTGt8gg3Z6cDjdh7ke6KSYmw4MtuJHdL6QBIyCfFcO00fU3nEDJi');
    const [course, setCourse] = useState();
    const { id } = useParams();
    console.log(id)
    useEffect(() => {
        fetch(`http://localhost:5000/course/${id}`)
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [id]);
    // console.log(course);

    return (
        <div>
            <h2>Purchase</h2>
            <div>
                <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                    <div className="card-body">
                        <p className="text-success font-bold">Hello, { }</p>
                        <h2 className="card-title">Please Pay for <span className='text-primary'>{course?.name}</span> </h2>
                        <p>By: <span className='text-orange-700'>{course?.instructor} </span></p>
                        <p>Total Amount: <span className='text-secondary'>${course?.price}</span></p>
                    </div>
                </div>
                <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                    <div className="card-body">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm course={course} />
                        </Elements>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Purchase;