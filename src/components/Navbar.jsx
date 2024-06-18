import React, { useState } from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
const Navbar = () => {
    const [nav,setNav]=useState(false)
    const handleNav=()=>{
        setNav(!nav)
    }                                                     
  return (
    <div className='z-10 bg-white text-gray-300 flex justify-between items-center max-w-[1340px] mx-auto h-20 px-4 text-l sticky top-0'>
        <h1 className='w-full text-3xl font-bold primary-color ml-4'>Waquar</h1>
        <ul className='hidden md:flex'>
            <li className='p-2'><a href="/">Home</a></li>
            {/* <li className='p-2'>Company</li> */}
            <li className='p-2'><a href="#about">About</a></li>
            <li className='p-2'><a href="#work">Work</a></li>
            <li className='p-2'><a href="#skills">Skills</a></li>
            <li className='p-2'><a href="#certificate">Certification</a></li>
            <li className='p-2'><a href="#contact">Contact</a></li>
        </ul>
        
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile menu  */}
        <div className={nav ? 'text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#202121] ease-in-out duration-300' : 'fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold primary-color m-4'>Waquar</h1>
            <ul className='p-8 text-2xl text-white'>
                <li className='p-2'><a href="/" className=' text-yellow-300'>Home</a></li>
                {/* <li className='p-2'>Company</li> */}
                <li className='p-2'><a href="#about" className='text-yellow-300'>About</a></li>
                <li className='p-2'><a href="#work" className=' text-yellow-300'>Work</a></li>
                <li className='p-2'><a href="#skills" className=' text-yellow-300'>Skills</a></li>
                <li className='p-2'><a href="#certificate" className=' text-yellow-300'>Certification</a></li>
                <li className='p-2'><a href="#contact" className=' text-yellow-300'>Contact</a></li>
            </ul>
        
        </div>

    </div>
  )
}

export default Navbar