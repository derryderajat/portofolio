import React from 'react';
import { motion } from 'framer-motion';

function Skill() {
  let directionLeft = true;
  return (
    <div className='group relative flex items-center justify-center cursor-pointer'>
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src='https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png'
        className='rounded-full border border-[#333333] object-cover w-20 h-20 md:w-24 md:h-24 filter group-hover:grayscale transition duration-300 ease-in-out '
      />
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white  w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-2xl font-bold text-[#232323] opacity-100'>100%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
