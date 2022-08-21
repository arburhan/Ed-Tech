import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import CheckoutForm from './CheckoutForm';


const Purchase = () => {
    const [user] = useAuthState(auth);
    const stripePromise = loadStripe('pk_test_51L1X0aJ4uo6umqFGEVoEth2hy2Sr4y5BcNWLuQaVxL5UYEuTGt8gg3Z6cDjdh7ke6KSYmw4MtuJHdL6QBIyCfFcO00fU3nEDJi');
    const [course, setCourse] = useState();
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/course/${id}`)
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [id]);


    return (
        <div className='py-8 md:py-14' >
            <h2 className='text-center'>Purchase</h2>

            <div className='px-5 md:px-12' >
                <div className="card mx-auto w-50 max-w-md bg-base-100 shadow-xl my-12">
                    <figure class="px-10 pt-10 w-[80%] mx-auto">
                        <img src={course?.image} alt="" class="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <p className="text-success font-bold">Hello, {user.displayName}</p>
                        <h2 className="card-title">Please Pay for <span className='text-primary'>{course?.name}</span> </h2>
                        <p>By: <span className='text-orange-700'>{course?.instructor} </span></p>
                        <p>Total Amount: <span className='text-secondary'>${course?.price}</span></p>
                    </div>
                </div>
                <div className="card mx-auto flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
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