import React from 'react';
import { motion } from 'framer-motion';
// https://res.cloudinary.com/dwlyoi4wy/image/upload/v1664624382/private/IMG_20221001_183854_etzd5n.jpg
function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center relative h-screen'
    >
      <h3 className='absolute  top-24 uppercase tracking-[20px= text-[#444444] text-2xl'>
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        className='mb-2 mt-24 md:mt-0 md:mb-0 flex-shrink-0 w-32 h-32 rounded-full object-cover md:rounded-lg xl:w-64 xl:h-96 md:w-52 md:h-48 z-20'
        src='https://res.cloudinary.com/dwlyoi4wy/image/upload/v1664624382/private/IMG_20221001_183854_etzd5n.jpg'
      />
      <div className='space-y-10 px-10 md:px-10'>
        <h4 className='text-3xl font-semibold'>
          Here is a
          <span className='underline decoration-[#F7Ab0a]/50'> little </span>
          background
        </h4>
        <p className='text-base'>
          Hello... How&#39;s it going. My name Derry.I am studying at Serang
          Raya University (unsera) and this is my last year(2023) being in here
          with IT subject. I&#39;ve been coding for 3 years now. As a Full Stack
          developer I&#39;ve some projects that I&#39;ve done. And I&#39;ve
          experiences in intership at several state-owned enterprise (BUMN) like
          PT. PLN UPT Cilegon and Power Plant Suralaya. I really love how to
          solve challenge. And I&#39;ve some Data experience such as cleansing,
          visualization and build a model ML
        </p>
      </div>
    </motion.div>
  );
}

export default About;
