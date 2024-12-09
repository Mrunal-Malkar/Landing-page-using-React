import React from 'react'
import './navbar.css';

const Navbar = () => {
    return (
    <div className='w-full flex justify-center'>
    <div className='flex justify-between bg-white w-10/12'>
        <div className='logo'></div>
        <ul className='flex justify-between self-center gap-x-16'>
            <li>Menu</li>
            <li>Location</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='self-center'><button className='bg-red-500 py-1.5 px-5'>Login</button></div>
    </div>
    </div>
    )
}

export default Navbar
