import React from 'react'
import proj1 from '../assets/proj1.png'
import proj2 from '../assets/proj2.png'
import proj3 from '../assets/proj3.png'
import proj5 from '../assets/proj5.png'
const Work = () => {
  return (
    <div className='py-6 maxw-[1200px] mx-auto' id='work'>
        <div className='mx-auto px-4 md:px-8'>
            <div className='mb-4 flex items-center  justify-center'>
                <div className='flex fle-col gap-4'>
                    <h2 className='text-2xl lg:text-3xl text-white mb-5'>
                        My <span>Projects </span>
                    </h2>
                    <p className='text-gray-500'>
                        These are my latest projects.
                    </p>
                </div>
               
            </div>
            <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8'>
                
                <a href="https://github.com/waquar-az/PHONE_CONTACT_LIST" className='group h-48 overflow-hidden rounded-lg shadow-lg md:h-80'>
                    <img src={proj2} alt="" className='h-full w-full object-cover object-center 
                              transition duration-200 group-hover:scale-110' />
                </a>
                <a href="https://github.com/waquar-az/E-Commerce-web" className='group h-48 overflow-hidden rounded-lg shadow-lg md:h-80 md:col-span-2'>
                    <img src={proj1} alt="" className='h-full w-full object-cover object-center 
                              transition duration-200 group-hover:scale-110' />
                </a>
                <a href="/" className='group h-48 overflow-hidden rounded-lg shadow-lg md:h-80 md:col-span-2'>
                    <img src={proj3} alt="" className='h-full w-full object-cover object-center 
                              transition duration-200 group-hover:scale-110' />
                </a>
                <a href="https://github.com/waquar-az/Waquar_blog/tree/master" className='group h-48 overflow-hidden rounded-lg shadow-lg md:h-80'>
                    <img src={proj5} alt="" className='h-full w-full object-cover object-center 
                              transition duration-200 group-hover:scale-110' />
                </a>
                
            
            </div>

        </div>
    </div>
  )
}

export default Work