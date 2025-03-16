'use client'

import React, { useEffect, useState } from 'react';
import { useMotionTemplate, useMotionValue, motion, animate } from 'framer-motion';

const COLORS_TOP = ['#13FFAA', '#1E67C6', '##CE84CF', '#DD335C'];

const experiences = [
  {
    id: 1,
    start: '2017.8',
    end: '2025.1',
    title: 'Senior Software Engineer',
    description: `At Amazon, I led the migration to React/Angular microfrontends 
                  and engineered Java/Spring Boot APIs with Kafka for real-time inventory tracking,
                  reducing deployment time by 25% and stockouts by 30%, while driving an 18% revenue boost
                  via data-driven React/TypeScript dashboards, achieving 99.99% uptime with Docker/Kubernetes
                  on AWS EKS, and enhancing seller satisfaction by 35% through WebSocket notifications and
                  collaborative UX innovations.`,
    company: 'Amazon'
  },
  {
    id: 2,
    start: '2014.5',
    end: '2017.6',
    title: 'Senior Software Engineer',
    description: `At Walmart, I engineered Java/Spring Boot logistics APIs and React Native mobile interfaces 
                that drove $1.5B+ annual sales while competing with Amazon Prime, developed Redis-backed
                real-time inventory systems and React frontend updates to boost customer satisfaction by 20%,
                and built geolocation routing (Google Maps API/Node.js) with React dashboards to reduce delivery times
                by 30%.`,
    company: 'Walmart'
  },
  {
    id: 3,
    start: '2011.5',
    end: '2014.3',
    title: 'Software Engineer',
    description: `At Pfizer, I architected a HIPAA-compliant React and Java/Spring Boot application 
                  for secure patient data-sharing permissions (adopted by 500K+ users),
                  while engineering WebSocket-based end-to-end encrypted messaging (Node.js/React) that
                  increased patient engagement by 25%.`,
    company: 'Pfizer'
  }
]

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);

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

  return (
    <motion.section style={{ backgroundImage }} id='experience' className='py-32 text-white' >
      <div className='max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12'>
        <div>
          <h2 className='text-6xl font-bold mb-10'>My <span className='text-purple-400'>Experience</span></h2>
          {
            experiences.map((experience) => (
              <div
                key={experience.id}
                onClick={() => setSelectedExperience(experience)}
                className='cursor-pointer mb-8 group'>
                <div className='col-end-2'>
                  <h3 className='text-3xl font-semibold gruop-hover: text-purple-400 transition-colors'>{experience.company}</h3>
                  <h5 className={`text-2xl font-semibold gruop-hover:text-purple-400 transition-colors ${selectedExperience.id === experience.id ? 'text-purple-200' : ''} duration-300`}>
                    {experience.title + " ( " + experience.start + "-" + experience.end + " )"}
                  </h5>
                </div>

                {
                  selectedExperience.id === experience.id && (
                    <div className='border-b-2 border-purple-200 my-4'></div>
                  )
                }
              </div>
            ))
          }
        </div>

        <div className='text-2xl self-center font-semibold justify-around'>
          {selectedExperience.description}
        </div>
      </div>
    </motion.section>
  )
}

export default Experience;