import React, { useState, useEffect } from 'react'
import { client, urlFor } from '../client';
import { Link } from 'react-scroll'

export default function Welcome() {

    const [welcomes, setWelcomes] = useState([]);
    useEffect(() => {
        const query = '*[_type == "welcome"]';
        client.fetch(query).then((data) => setWelcomes(data));

    }, []);


    return (
        <section id='welcome-section'>
            <div className="bg-pixel bg-cover dark:bg-gaming md:bg-fixed pt-28 flex flex-col sm:px-6 py-10 mx-auto pr sm:space-y-6 h-screen lg:py-16 lg:flex-row lg:items-center dark:bg-gray-700">
                <div className="w-full lg:w-1/2" >
                    <div className="lg:max-w-lg mx-10 md:pt-14">
                        <div className='h-96 sm:w-full sm:h-full  container bg-sky-700 dark:bg-opacity-90 sm:dark:bg-opacity-80 dark:bg-black sm:m-12 py-8 px-6 rounded-3xl bg-opacity-75'>
                            <h1 className="text-3xl font-bold tracking-wide text-white dark:text-white lg:text-5xl">
                                Fullstack Developer
                            </h1>
                            <h2 className='text-xl text-white dark:text-white'>Umut Emre Celik</h2>
                            <div className="mt-8 space-y-5 text-white">

                                {
                                    welcomes.map((welcome, index) => (
                                        <div>
                                            <p className="flex items-center -mx-2  dark:text-gray-200">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span className="mx-2">{welcome.title}</span>
                                            </p>
                                        </div>
                                    ))}

                                <div className="mx-1 w-full bg-transparent rounded-md lg:max-w-sm ">

                                    <Link
                                        to='contact-section'
                                        smooth={true}
                                        duration={0}
                                        className="cursor-pointer m-0 bg-white w-28 dark:hover:bg-purple-600 hover:bg-black hover:text-white hover:transition duration-500 text-black block px-4 py-2 rounded-md text-base font-medium"
                                    >
                                        CONTACT
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                    <img className="opacity-0 object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src="https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="glasses" />
                </div>
            </div>
        </section>
    )
}
