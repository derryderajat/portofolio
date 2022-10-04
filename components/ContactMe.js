import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
function ContactMe() {
  return (
    <div className='h-screen relative flex flex-col text-center  md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center '>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-[#444444] text-2xl'>
        Contact
      </h3>
      <div className='flex flex-col space-y-10 mt-12'>
        <h4 className='text-4xl font-semibold text-center'>
          I have got just what you need.
          <span className='decoration-[#F78b0a]/50 underline'>
            Let&#39;s Talk.
          </span>
        </h4>
        {/* Goes Here */}
        <div>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-[#F7ab0a] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>+62 8967-781-6465</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#F7ab0a] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>recruit.derryderajat@gmail.com</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-[#F7ab0a] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>Cilegon, Banten, Indonesia</p>
          </div>
        </div>
        <form className='flex caret-red flex-col space-y-2 w-fit mx-auto'>
          <div className='flex space-x-2 '>
            <input
              placeholder='Name'
              className='contactInput  mr-2'
              type={'text'}
            />
            <input
              placeholder='Email'
              className='contactInput  '
              type={'email'}
            />
          </div>
          <input
            placeholder='Subject'
            className='contactInput  '
            type={'text'}
          />
          <textarea placeholder='Message' className='contactInput'></textarea>
          <button
            className='bg-[#F7AB0a] py-5 px-10 rounded-md text-black font-bold text-lg'
            type='submit'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
