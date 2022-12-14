import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import useToken from '../../Hooks/useToken';

const SignUp = () => {
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googlEerror] = useSignInWithGoogle(auth);
    const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);
    const [sendEmailVerification, verificationError] = useSendEmailVerification(auth);
    const [token] = useToken(user || googleUser);

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        // toast.success('verification mail sent. please verify');
        await sendEmailVerification(data.email);
    };
    useEffect(() => {
        if (token) {
            navigate('/home');
        }
    }, [user, token, navigate])
    let errorMessage;
    if (error || googlEerror || UpdateError || verificationError) {
        errorMessage = <p className="text-red-600 mb-3"> {error?.message || googlEerror?.message || UpdateError?.message || verificationError?.message} </p>
    }
    return (
        <>
            <div className='flex h-screen justify-center items-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">Sign Up</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="name"
                                    placeholder="Your Name"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid Email'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters or longer'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                </label>
                            </div>

                            {errorMessage}
                            {loading || updating ? <button className="btn loading w-full max-w-xs">loading</button> : <input className='btn w-full max-w-xs text-white' type="submit" value="Sign Up" />}
                        </form>
                        <p><small>Already have an account? <Link className='text-accent' to="/login">Please Login</Link></small></p>
                        <div className="divider">OR</div>
                        {googleLoading ? <button className="btn loading">loading</button> : <button
                            onClick={() => signInWithGoogle()}
                            className="btn btn-outline"
                        >Continue with Google</button>}
                    </div>
                </div>
            </div >
        </>
    );
};

export default SignUp;