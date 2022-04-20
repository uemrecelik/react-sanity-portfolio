import React, { useState, useEffect } from 'react'
import { client, urlFor } from '../client';



export default function About() {

  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => setAbouts(data));

  }, []);
  return (
    <section id='about-section'>
      <div className=' h-full dark:bg-gradient-to-b from-slate-800 via-gray-800/90 to-black/80'>
        <h1 className='mb-11 pt-20 flex justify-center text-3xl font-bold dark:text-white'>About Me</h1>
        <div className='flex justify-center'>
          <div className='bg-slate-300 shadow-2xl mb-36 container dark:bg-indigo-900/90 h-full rounded-3xl lg: mx-52'>
            <div className="container px-6 py-12 mx-auto ">
              {
                abouts.map((about, index) => (

                  <div key={index} className="inline-flex  w-64 h-full ml-6 my-3 lg:ml-20 2xl:ml-40">
                    <div>
                      <div className="inline-block p-3 text-white bg-white dark:bg-blue-600 rounded-lg">
                        <img src={urlFor(about.imgUrl)} className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" />
                      </div>

                      <div>
                        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{about.title}</h1>

                        <p className="w-15 mt-2 text-sm text-gray-700 dark:text-gray-300">
                          {about.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

            </div>
           
          </div>
         
        </div>
      </div>
    </section>

  )
}
