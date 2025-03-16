'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { CiPhone } from 'react-icons/ci';
import { MdOutlineMail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id='contact' className='overflow-x-clip py-32 text-white max-w-[1200px] mx-auto px-4'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='grid lg:grid-cols-1.5 gap-16'
      >
        <div className='space-y-12'>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-7xl font-bold text-gray-300'
          >
            Get in <span className='text-purple-500'>touch</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='glass p-8 rounded-2xl space-y-8 w-[300]'
          >
            <div className='space-y-2'>
              {React.createElement(CiPhone, { className: 'w-15 h-15', style: { borderColor: '#0021A5' } })}
              <div className='col-span-2'>
                <a
                  href='tel:8503538895'
                  className='text-2xl font-semibold hover:text-purple-400 transition duration-300 flex items-center gap-2'
                >
                  (850) 353-8895
                  <span className='font-semibold'>↗</span>
                </a>
              </div>
            </div>

            <div className='space-y-2'>
              {React.createElement(MdOutlineMail, { className: 'w-15 h-15', style: { borderColor: '#0021A5' } })}
              <a
                href='mailto:ramses.lee.dev@gmail.com'
                target='_blank'
                className='text-2xl font-semibold hover:text-purple-400 transition duration-300 flex items-center gap-2'
              >
                ramses.lee.dev@gmail.com
                <span className='font-semibold'>↗</span>
              </a>
            </div>

            <div className='space-y-2'>
              {React.createElement(FaLinkedin, { className: 'w-15 h-15', style: { borderColor: '#0021A5' } })}
              <a
                href='https://www.linkedin.com/in/ramses-lee5541'
                className='text-2xl font-semibold hover:text-purple-400 transition duration-300 flex items-center gap-2'
              >
                https://www.linkedin.com/in/ramses-lee5541
                <span className='font-semibold'>↗</span>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className='w-full h-full min-h-[400px] rounded-2xl overflow-hidden'
        >

        </motion.div>
      </motion.div>

    </section>
  )
}

export default Contact