import React from 'react'
import { FaReact, FaAngular, FaVuejs, FaPython, FaAws, FaGithub } from 'react-icons/fa';
import { IoLogoNodejs } from 'react-icons/io';
import { SiTypescript } from 'react-icons/si';
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
  { id: 15, name: 'AWS', icon: FaAws, color: '#4D4D4D' },
]

const Stack = () => {
  return (
    <section id='stack' className='py-16 glass'>
      <div className='max-w-[1200px] mx-auto px-4 text-center'>
        <h2 className='text-5xl text-gray-200 font-bold mb-4'>Professional Skills</h2>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2'>
          {stackItems.map((item) => (
            <div key={item.id} className='flex items-center justify-center flex-col rounded-xl p-4'>
              <div>
                {React.createElement(item.icon, {
                  className: 'w-32 h-32',
                  style: { color: item.color }
                })}
              </div>
              <p className='text-gray-400 font-semibold'>{item.name}</p>
            </div>
          ))}
        </div>

      </div>

    </section>
  )
}

export default Stack