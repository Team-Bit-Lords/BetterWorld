/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import logo from "../../assets/logo.png"

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className="navbar  bg-base-100 text-accent-content">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 hover:bg-primary rounded-box w-52">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/product'>Store</NavLink></li>
                        <li><NavLink to='/blogs'>Blogs</NavLink></li>
                        <li><NavLink to='/event'>Events</NavLink></li>
                        {/* <li><NavLink to='/leader'>LeaderBoard</NavLink></li> */}
                        <li><NavLink to='/volunteer'>Volunteer</NavLink></li>
                        <li><NavLink to='/social'>Feed</NavLink></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl" onClick={()=>{navigate('/')}}>Better World</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-base gap-8 font-semibold px-1">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/product'>Store</NavLink></li>
                    <li><NavLink to='/blogs'>Blogs</NavLink></li>
                    <li><NavLink to='/event'>Events</NavLink></li>
                    {/* <li><NavLink to='/leader'>LeaderBoard</NavLink></li> */}
                    <li><NavLink to='/volunteer'>Volunteer</NavLink></li>
                    <li><NavLink to='/social'>Feed</NavLink></li>
                </ul>
            </div>
            {/* <div className="navbar-end">
                <NavLink to="/login" className="p-2 text-base font-semibold px-4 rounded-md bg-[#08a045] mr-8 hover:bg-slate-400 hover:text-black text-[#fff]">Register</NavLink>
            </div> */}
        </div>
    )
}

export default Navbar
