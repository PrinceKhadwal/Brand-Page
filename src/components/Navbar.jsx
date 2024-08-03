import React from 'react'
import Logo from '../assets/brand_logo.png'

const Navbar = () => {
  return (
    <>
        <div className='w-screen flex justify-around items-center py-2 my-1 flex-col lg:flex-row'>
            <div className=''>
                <img src={Logo} alt='logo' className='' />
            </div>

            <ul className='uppercase flex font-semibold'>
                <li className='p-3'>Menu</li>
                <li className='p-3'>Location</li>
                <li className='p-3'>About</li>
                <li className='p-3'>Contact</li>
            </ul>

            <button className='bg-red-600 h-10 text-white px-8 py-0 hidden lg:block'>Login</button>
        </div>
    </>
  )
}

export default Navbar