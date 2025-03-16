'use client'

import React, { useEffect } from 'react';
import Image from 'next/image';
import profilepic from '@/assets/profilepic.jpeg';
import obj from '@/assets/obj1.png';
import { FiArrowRight } from 'react-icons/fi';
import { animate, motion, useMotionTemplate, useMotionValue } from 'framer-motion'

const COLORS_TOP = ['#13FFAA', '#1E67C6', '##CE84CF', '#DD335C'];

const RoundedImage = () => {
  return (
    <>
      <Image
        src={profilepic}
        height={250}
        width={250}
        alt='Profile Picture'
        className='rounded-full aspect-square object-cover'
      />
    </>
  );
};

const Hero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror'
    })
  });

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section id='about' style={{ backgroundImage }} className='relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200'>
      <div className='z-10 flex flex-col items-center'>
        <span className='mb-1.5 inline-block rounded-full bg-green-600/50 px-3 py-1.5 text-sm'>Open to Work</span>
        <h1 className='text-white/40 text-5xl md:text-7xl font-black'>Hi, I am</h1>
        <h1 className='max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text font-black leading-tight text-transparent md:text-7xl'>Ramses Lee</h1>
        <RoundedImage />
        <div className='flex bg-white/10 shadow-xl p-3 rounded-3xl justify-center items-center space-x-2 mb-4 mt-4'>
          {
            [...Array(5)].map((index) => (
              <Image key={index} src={obj} alt='obj' width={30} className='rounded-2xl mx-auto' />
            ))
          }
        </div>
        <p className='text-4xl font-semibold text-purple-400 my-6 max-w-xl text-center'>Senior Software Engineer</p>
        <motion.button
          style={{ border, boxShadow }}
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.985 }}
          className='flex w-fit mt-4 items-center gap-2 rounded-full px-4 py-2'
        >
          Download Resume
          <FiArrowRight />
        </motion.button>
      </div>

      <div className='bg-circle-container'>
        <div className='bg-circle-background'></div>
        <div className='bg-circle'></div>
      </div>

    </motion.section>
  )
}

export default Hero