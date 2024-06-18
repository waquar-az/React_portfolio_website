import React from 'react'
import aboutimg from '../assets/aboutimg.png'
const About = () => {
  return (
    <div className='py-10 text-white bg-[#232325] h-[80vh]' id='about'>
        <div className='flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-12 max-w-6xl mx-auto'>
            <div className='aboutmepic'>
                <div className='w-[400px] h-full'>
                    <img src={aboutimg} alt="about" className='object-cover rounded-xl 
                                h-[300px] filter grayscale brightness-50' />
                </div>
            </div>

            <div className='aboutme'>
                <div className='p-2'>
                    <div className='text-gray-300 my-3'>
                        <h3 className='text-4xl font-semibold mb-5'>About <span>Me</span> </h3>
                        <p className='text-justify leading-7 w-11/12 mx-auto md:text-2xl sm:text-xl'>
                        As a fresher Python full stack developer, I am motivated to use my
                        skills to build software solutions and I am looking for an opportunity
                        to do so. And I am ready to learn and work on any new technology.
                        </p>
                    </div>
                </div>

                <div className='flex mt-10 items-center gap-7'>
                    <div className='bg-[#333333]/40 p-5 rounded-lg'>   {/* /40 opacity  */}
                    <p><span className='md:text-base text-xs flex-wrap'>
                        <b>1.   </b>I am Mechanical Engineer (2016-2020) <br />
                        <b>2.   </b>I kaggle 2x expert <br />
                        <b>3.   </b>2.5 years of Teaching experience

                        </span>
                    </p><br /><br />
                    <p><span className='md:text-base w-full text-xs'>I can develop website with Django a python framework.
                        I have knowledge of Machine Learning
                        Deep Learning and NLP.I can scrape data and clean it then apply EDA to analyse it.</span> </p>
                    </div>                   
                </div>
                
            
            </div>
        </div>
    </div>
  )
}

export default About