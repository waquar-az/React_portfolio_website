import React from 'react'

import { IoMail } from "react-icons/io5";
                                                    
const Contact = () => {
  return (
    <div className='flex justify-center my-5 h-full sm:h-[70vh] items-center' id='contact'>
        <div className='max-w-[1200px] mx-auto'>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2'>

                    <div className='p-6 mr-2 bg-gray-800 rounded-xl flex-col justify-around'>
                        <h1 className='text-4xl sm:text-5xl text-white'>
                            Contact <span>Me</span>
                        </h1>
                        <p className='text-normal text-lg font-medium text-gray-400 mt-2'>
                            Let's connect on LinkedIn <br />or send me an Email
                        </p>
                        <div className='flex items-center mt-2 text-gray-400'>
                            <IoMail />
                            <div className='ml-4 text-md tracking-wide font-semibold w-40'>
                                <p>Waquar azam</p>
                            </div>
                        </div>

                    </div>
                    {/* form contact */}
                    <form action="https://getform.io/f/payglqda" method='post' className='p-6 flex flex-col justify-center max-w-[700px]'>
                        <div className='flex flex-col'>
                            <input type='text' name='name' id='name' placeholder='Full Name' 
                                  className='w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border-gray-700 text-white' />
                        </div>
                        <div className='flex flex-col mt-2'>
                            <input type='email' name='email' id='email' placeholder='xyz@gmail.com' 
                                  className='w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border-gray-700 text-white' />
                        </div>
                        <div className='flex flex-col mt-2'>
                            <textarea type='text' name='message' id='message' placeholder='Your Message' 
                                  className='w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border-gray-700 text-white' />
                        </div>
                        
                            <button type='submit'
                                  className='md:w-32 bg-primary-color text-white px-6 py-3 rounded-lg mt-3'>Submit</button>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact