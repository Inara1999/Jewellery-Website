import React, { useState } from 'react'
import {NavLink, Link} from 'react-router-dom'
import {navbar} from '../utilis/tailwind/style.js'

function Header() {
  const [cartItems, setCartItems] = useState(0)
  const [showDropdown, setDropdown] = useState(false);

  const ClickCharthandle = () => {
    setCartItems(cartItems + 1)
  }

  return (
    <div className='w-full h-[150px] '>
      <div className='flex justify-center items-center p-6'>
        <img
          src='https://websitedemos.net/jewellery-04/wp-content/uploads/sites/188/2018/04/site-logo-free-img.png'
          alt='Logo' className='relative'
        />
      </div>

      <div className='flex items-center text-[15px] cursor-pointer mt-2'>
        <div className='flex pl-[8rem] gap-x-6'>
          <NavLink to='/home' className={navbar.navLink}>Home</NavLink>
          <NavLink to='/about-us' className={navbar.navLink}>About Us</NavLink>
          <NavLink to='/store' className={navbar.navLink}>Store</NavLink>
          <NavLink to='/earrings' className={navbar.navLink}>Earrings</NavLink>
          <NavLink to='/rings' className={navbar.navLink}>Rings</NavLink>
          <NavLink to='/necklace' className={navbar.navLink}>Necklace</NavLink>

          {/* ✅ Wrap this whole block to prevent flickering */}
          <div
            className='relative hover:text-yellow-500'
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
            >
            <NavLink to='my-account' className={navbar.navLink}>
              My Account <i className="fa-solid fa-angle-down ml-1 "></i>
            </NavLink>

            {/* Dropdown Menu */}
            {showDropdown && (
              <div className='absolute top-6 left-0 bg-black/85 border rounded shadow-md w-40 z-10'>
                <ul className='flex flex-col'>
                  <Link to="my-account?signup=true" className="px-4 py-2 text-white hover:bg-gray-700 cursor-pointer">Orders</Link>
                  <Link to="my-account?signup=true" className="px-4 py-2 text-white hover:bg-gray-700 cursor-pointer">Account Details</Link>
                </ul>
              </div>
            )}
          </div>

          <NavLink to='contact-us' className={navbar.navLink}>Contact Us</NavLink>
        </div>

        <div className='pl-[16rem] flex items-center gap-2 text-yellow-500 cursor-pointer'>
          <span>Cart/$0.00</span>
          <div className="relative" onClick={ClickCharthandle}>
            <i className="fa-solid fa-basket-shopping text-yellow-500 text-lg"></i>
            <span className="absolute -top-3 -right-3 text-yellow-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartItems}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
