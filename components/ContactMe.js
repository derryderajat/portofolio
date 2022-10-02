import React from 'react';

function ContactMe() {
  return (
    <div className='h-screen flex flex-col text-center  md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center '>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-[#444444] text-2xl'>
        Contact
      </h3>
      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>
          I have got just what you need.
          <span className='decoration-]#F7ab0a]/50 underline'>
            Let&#39;s Talk.
          </span>
        </h4>
        {/* Goes Here */}
        <div></div>
      </div>
    </div>
  );
}

export default ContactMe;
