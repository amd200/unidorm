import React from 'react'
import { NavLink } from 'react-router-dom'
import { CiGrid41 } from "react-icons/ci";
import { MdOutlineCompareArrows } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { CiCircleAlert } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { CiViewList } from "react-icons/ci";

function MenuProfile() {
  return (
    <div className='menu-profile bg-white rounded bg-white border'>
        <ul className='list-unstyled'>
            <li className='nav-item mb-2'><NavLink to={"/user/dashboard"} className={"nav-link"}><CiGrid41 className='me-2 fs-4' />Dashboard</NavLink></li>
            <li className='nav-item mb-2 bg-white'><NavLink to={"booksuser"} className={"nav-link"}><CiViewList className='me-2 fs-4' />Bookings</NavLink></li>
            <li className='nav-item mb-2 bg-white'><NavLink to={"requestuser"} className={"nav-link"}><MdOutlineCompareArrows className='me-2 fs-4' />Requests</NavLink></li>
            <li className='nav-item mb-2 bg-white'><NavLink to={"wishlistuser"} className={"nav-link"}><CiHeart className='me-2 fs-4' />Wishlist</NavLink></li>
            <li className='nav-item mb-2 bg-white'><NavLink to={"/user/profileuser"} className={"nav-link"}><CiCircleAlert className='me-2 fs-4' />My profile </NavLink></li>
            <li className='nav-item mb-2 bg-white'><NavLink to={"/logout"} className={"nav-link"}><CiLogout className='me-2 fs-4' />Log-out</NavLink></li>
        </ul>
       
    </div>
  )
}

export default MenuProfile