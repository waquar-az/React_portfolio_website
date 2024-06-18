import React from 'react'
import profilepic from '../assets/profilepic.jpeg'
import { AiFillLinkedin,AiFillGithub } from 'react-icons/ai'

import { FaKaggle } from 'react-icons/fa6'
import { TypeAnimation } from 'react-type-animation'
const Hero = () => {
  return (
    <div>
        <div className='my-7 sm:my-0 max-w-[1200px] h-[80vh] mx-auto flex flex-col-reverse sm:flex-row justify-center align-center'>

        <div className='flex-col my-auto mx-auto'>
            <p className='md:text-5xl sm:text-xl font-bold text-gray-200'>Hi I am Freasher</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                <TypeAnimation 
                 sequence={[
                    'Python Dev',
                    1000,
                    'Full stack Dev',
                    1000,
                    'Data analyst',
                    1000,
                 ]}   
                 wrapper='span'
                 speed={50}
                 repeat={Infinity}            
                />
            </h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-3xl text-xl font-bold text-gray-500'>with no prior experience.        </p>
            </div>
            <div className='text-5xl flex justify-start gap-16 my-7 text-purple-600'>
               <a href="https://www.linkedin.com/in/md-waquar-azam-68ab371b9"><AiFillLinkedin /></a> 
                <a href="https://github.com/waquar-az?tab=repositories"><AiFillGithub /></a>
                <a href="https://www.kaggle.com/mdwaquarazam">< FaKaggle/></a>
            </div>
            {/* download button */}
        </div>
        <div className='my-auto'>
            <img className='w-[300px] sm:w-[500px] mx-auto h-auto rounded-full' src={profilepic} alt="profilepic" />
        </div>


        </div>
    </div>
  )
}

export default Hero