'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaAngular, FaVuejs, FaPython, FaAws, FaGithub, FaDocker } from 'react-icons/fa';
import { IoLogoNodejs } from 'react-icons/io';
import { SiTypescript, SiKubernetes, SiTerraform } from 'react-icons/si';
import { SiMongodb, SiGithubactions } from 'react-icons/si';
import { TbBrandNextjs, TbBrandCSharp } from 'react-icons/tb';
import { AiOutlineJava } from 'react-icons/ai';
import { BiLogoSpringBoot } from 'react-icons/bi';
import { VscAzure } from 'react-icons/vsc';

const stackItems = [
  { id: 1, name: 'React', icon: FaReact, color: '#61DAFB' },
  { id: 2, name: 'Node.js', icon: IoLogoNodejs, color: '#339933' },
  { id: 3, name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { id: 4, name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { id: 5, name: 'Next.js', icon: TbBrandNextjs, color: '#000000' },
  { id: 6, name: 'Angular', icon: FaAngular, color: '#BE002D' },
  { id: 7, name: 'Java', icon: AiOutlineJava, color: '#E95047' },
  { id: 8, name: 'Spring Boot', icon: BiLogoSpringBoot, color: '#69AF2C' },
  { id: 9, name: 'Vue.js', icon: FaVuejs, color: '#3FB27F' },
  { id: 10, name: 'Python', icon: FaPython, color: '#2F6595' },
  { id: 11, name: 'C#', icon: TbBrandCSharp, color: '#6D287E' },
  { id: 12, name: 'GitHub Actions', icon: SiGithubactions, color: '#3D80F7' },
  { id: 13, name: 'GitHub', icon: FaGithub, color: '#22262A' },
  { id: 14, name: 'Azure', icon: VscAzure, color: '#2886D8' },
  { id: 15, name: 'AWS', icon: FaAws, color: '#EF931E' },
  { id: 16, name: 'Kubernetes', icon: SiKubernetes, color: '#3069DD' },
  { id: 17, name: 'Docker', icon: FaDocker, color: '#2F97E5' },
  { id: 18, name: 'Terraform', icon: SiTerraform, color: '#5A40DC' },
]

const LogoAnimation = () => {
  return (
    <div className='py-8 bg-purple-200/10 glass opacity-80'>
      <div className='container mx-auto'>
        <div className='overflow-hidden [mask-image:linear-gradient(to_right, _transparent, _black_25%, _black_75%, _transparent'></div>
        <motion.div
          className='flex gap-14 flex-none pr-14'
          animate={{ translateX: '-50%' }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop'
          }}>
          {
            stackItems.map((stack) => (
              React.createElement(stack.icon, {
                className: 'w-32 h-32',
                style: { color: stack.color }
              })
            ))
          }

        </motion.div>
      </div>
    </div>
  )
}

export default LogoAnimation