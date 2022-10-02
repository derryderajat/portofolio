import React from 'react';
import { motion } from 'framer-motion';
function ExperienceCard() {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 snap-center  bg-[#292929] px-8  hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden w-[400px] h-[500px] md:w-[400px] md:h-[500px] xl:w-[400px] xl:h-[500px] pt-8'>
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='w-20 h-20 rounded-full  xl:w-24 xl:h-24  object-cover object-center'
        src='https://kioslambang.files.wordpress.com/2011/11/wpid-logo_pln.jpg'
        alt=''
      />
      <div className='px-0 md:px-10'>
        <h4 className='text-3xl font-light'>IT Support</h4>
        <p className='font-bold text-xl mt-1'>Derry</p>
        <div className='flex space-x-2 my-2'>
          <img
            className='h-8 w-8 rounded-full'
            src='https://cdn-icons-png.flaticon.com/512/5968/5968292.png'
            alt=''
          />
          <img
            className='h-8 w-8 rounded-full'
            src='https://cdn-icons-png.flaticon.com/512/5968/5968292.png'
            alt=''
          />
          <img
            className='h-8 w-8 rounded-full'
            src='https://cdn-icons-png.flaticon.com/512/5968/5968292.png'
            alt=''
          />
        </div>
        <p className='upperase py-5 text-[#eee]'>Started work... - Ended</p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>SummarySummarySummarySummary SummaryS</li>
          <li>asdasd</li>
          <li>Summarymmary SummarySummary</li>
          <li>SummSummary SummarySummary SummarySummary</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
