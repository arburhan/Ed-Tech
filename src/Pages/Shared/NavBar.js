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
            <Link to=''>Services</Link>
        </li>
        <li>
            <Link to=''>About Us</Link>
        </li>
        <li>
            <Link to=''>Contact Us</Link>
        </li>
        <li>
            {user ? <button onClick={handleSignOut} >Logout</button> : <Link to='/logIn'>Login</Link>}
        </li>
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