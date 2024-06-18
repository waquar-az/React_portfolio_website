import React from 'react';
import certificate from '../assets/certificate.png';

const Certification = () => {
  return (
    <div className='py-10 text-white bg-[#232325] h-[80vh]' id='certificate'>
      <div className='mx-auto text-center'>
        <h3 className='text-center text-4xl font-semibold mb-5'>
          <span>Certificate</span>
        </h3>
        <div className='flex items-center justify-center'>
          <img src={certificate} alt="Certificate" className='h-84 w-194' />
        </div>
      </div>
    </div>
  );
}

export default Certification;
