import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Logo from '../assets/logos/Group_1329.png'
const AdminLayout = () => {
    return (
        <div className='md:flex gap-8'>
            <div className='left-sidebar w-1/4 p-8 bg-gray-100'>
                <img src={Logo}></img>
                <ul className="menu w-56 p-2 my-20">
                    <li>
                        <Link to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                            Home Page
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/users">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                            List All Users
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/addevent">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            Add An Event
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='main-section w-[100%]'>
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default AdminLayout