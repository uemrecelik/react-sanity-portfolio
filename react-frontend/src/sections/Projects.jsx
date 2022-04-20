import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import { client, urlFor } from '../client';


export default function Projects() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const query = '*[_type == "projects"]';
    client.fetch(query).then((data) => setProjects(data));



  }, []);

  return (
    <section id='work-section'>
      <div className='h-full bg-slate-50 pt-20 pb-20 dark:bg-gradient-to-t from-gray-700 via-gray-800/80 to-black/90'>
        <div className='flex justify-center pt-6 sm: ml-9'>
          <h2 className='text-5xl text-blue-600 dark:text-white'>Check Out <span className='text-black dark:text-indigo-600'>My Projects</span></h2>
        
        </div>
        {
          projects.map((project, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4, type: 'tween' }}
              className='ml-12 mt-20 inline-flex items-center lg:ml-28'
            >
              <div className="h-full max-w-xs overflow-hidden bg-white rounded-lg border-2 border-sky-300 shadow-lg dark:bg-gray-900 border-none">
                <div className="px-4 py-2">
                  <h1 className="text-3xl font-bold text-gray-800 uppercase dark:text-white">
                    {project.title}</h1>
                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                    {project.description}</p>
                </div>

                <img className="object-cover w-full h-48 mt-2 mb-3" src={urlFor(project.imgUrl)} alt={project.title} />
                <div className="bg-slate-50 flex items-center justify-between px-4 py-2 dark:bg-gray-900">
                  
                  <button className="bg-sky-500 mt-10 ml-44 px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform rounded dark:bg-white dark:text-black focus:bg-gray-400 focus:outline-none"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(project.projectLink, "_blank");
                    }}
                  >See Project</button>
                </div>
              </div>
            </motion.div>
          ))}
      </div>
    </section>
  )
}
