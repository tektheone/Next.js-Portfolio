'use client'

import { useInView, motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import UF from '@/assets/university.jpeg';

const education = {
  university: 'University of Florida',
  location: 'Gainesville, FL',
  degree: "Bachelor's Degree in Computer Science",
  gpa: 3.88,
  start: '05/2008',
  end: '04/2011',
  src: UF
}

const Education = () => {
  const ref = React.useRef<HTMLElement>(null);

  const isInView = useInView(ref, { once: false });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className='px-4 py-32 text-white glass'
      id='education'
    >
      <div className='container mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12'>
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className='text-6xl font-bold mb-12'
          >
            Education
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className='flex flex-col'
          >
            <motion.h3
              initial={{ scale: 0.5 }}
              animate={isInView ? { scale: 1 } : { scale: 0.5 }}
              transition={{ delay: 0.6, duration: 0.4, type: 'spring' }}
              className='text-5xl font-bold text-purple-300 mb-2'
            >
              {education.university}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className='text-xl font-semibold mb-2'
            >
              {education.degree}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1, duration: 0.4 }}
              className='text-xl text-gray-400 font-semibold mb-2'
            >
              {"( " + education.start + " - " + education.end + " )"}
            </motion.p>

          </motion.div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

          </div>
        </div>

        <Image
          src={education.src}
          alt='University'
          className='rounded-xl shadow-lg transition-opacity duration-500 ease-in-out'
          width={450}
          height={400}
        />
      </div>
    </motion.section>
  )
}

export default Education