import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import userImage from '../../Media/Images/user.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const NavBar = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }
    const navTabs = <>
        <li>
            <Link to='/home'>Home</Link>
        </li>
        <li>
            <Link to='/services'>Services</Link>
        </li>
        <li>
            <Link to=''>About Us</Link>
        </li>
        <li>
            <Link to=''>Contact Us</Link>
        </li>
        {
            user ? <li className='items-center' > {user.displayName} <button onClick={handleSignOut} >Logout <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg></button> </li> :
                <li>
                    <Link to='/logIn'>Login</Link>
                </li>
        }

        {/*  <li>
            {user ?
                <>
                    <Link to='' class="justify-between">
                        <figure style={{ width: 30 }} >

                            <img src={userImage} alt="" />
                        </figure>
                    </Link>
                    <ul class="p-2">
                        <li><Link to=''>Account</Link></li>
                        <li>
                            <button onClick={handleSignOut} >Logout <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg></button>
                        </li>
                    </ul>
                </> : <Link to='/logIn'>Login</Link>
            }
        </li> */}

    </>
    return (
        <nav>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navTabs}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Ed-Tech</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {navTabs}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;