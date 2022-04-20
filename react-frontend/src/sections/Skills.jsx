import React, { useEffect, useState } from 'react'
import { client, urlFor } from '../client';
import { motion } from 'framer-motion'

export default function Skills() {

  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "skills"]';
    client.fetch(query).then((data) => setSkills(data));

  }, []);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const query = '*[_type == "workExperience"]';
    client.fetch(query).then((data) => setExperiences(data));

  }, []);

  return (
    <section id='skills-section'
    className='dark:bg-slate-800 '>


      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400 dark:text-teal-500">
              Will Always Increase
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto dark:text-white">
            Skills & Expreience
          </h2>
          <p className="text-base text-gray-700 md:text-lg dark:text-gray-300">
          Learning new technologies has always been exciting for me. I look forward to adding more to my skills and experiences.
          </p>
        </div>

        <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
          <div className="grid grid-cols-3 gap-3">
            {
              skills.map((skill, index) => (
                <div>
                  <motion.div
                    
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3, type: 'tween' }}>
                    <img
                      className="object-cover w-28 h-32 rounded-2xl shadow-lg bg-sky-100 dark:bg-black/50"
                      src={urlFor(skill.icon)}
                      alt={skill.title} />
                    <span className='dark:text-gray-400 flex justify-center sm:justify-start font-semibold'>{skill.name}</span>
                  </motion.div>
                </div>
              ))}
          </div>
          <div>
          {
            experiences.map((experience, index) => (
              
              <div>
                <div className="flex-col justify-center">
                  <div className="pb-4 mb-4 border-b">
                    <h6 className="mb-2 font-semibold leading-5 dark:text-white"> 
                      {experience.company}
                      <span className='flex mt-4 text-sky-500'>
                        {experience.date}</span>
                    </h6>
                    <p className="text-sm text-gray-900 mt-3 dark:text-gray-200">
                      {experience.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            </div>
        </div>
      </div>
    </section>

  )
}
