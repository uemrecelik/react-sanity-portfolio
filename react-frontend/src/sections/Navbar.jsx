import React from 'react'
import { useState } from 'react';
import { Transition } from '@headlessui/react'
import { Link } from 'react-scroll'
import Toggle from '../components/Toggle';




export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='fixed w-screen z-50'>
      <nav className="bg-slate-400/80 dark:bg-black/80 dark:text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link
                to='welcome-section'>
                <h1 className='cursor-pointer text-3xl text-indigo-600 font-mono font-semibold pb-1'
                >emre</h1>
                 </Link>
              </div>
              <div className="hidden md:block ml-4">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    to='welcome-section'
                    smooth={true}
                    duration={0}
                    className="cursor-pointer text-zinc-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium dark:text-slate-200"
                  >
                    Home
                  </Link>

                  <Link
                    to='about-section'
                    smooth={true}
                    duration={0}
                    className="cursor-pointer text-zinc-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium dark:text-slate-200"
                  >
                    About
                  </Link>

                  <Link
                    to='work-section'
                    smooth={true}
                    duration={0}
                    className="cursor-pointer text-zinc-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium dark:text-slate-200"
                  >
                    Works
                  </Link>

                  <Link
                    to='skills-section'
                    smooth={true}
                    duration={0}
                    className="cursor-pointer text-zinc-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium dark:text-slate-200"
                  >
                    Skills
                  </Link>

                  <Link
                    to='contact-section'
                    smooth={true}
                    duration={0}
                    className="cursor-pointer text-zinc-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium dark:text-slate-200"
                  >
                    Contact
                  </Link>

                </div>
                
              </div>
              <Toggle />
            </div>
            <div className="mr-1 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-700 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  to='welcome-section'
                  smooth={true}
                  duration={0}
                  className="cursor-pointer hover:bg-gray-700 text-zinc-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium dark:text-white"
                >
                  HOME
                </Link>

                <Link
                  to='about-section'
                  smooth={true}
                  duration={0}
                  className="cursor-pointer hover:bg-gray-700 text-zinc-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium dark:text-white"
                >
                  ABOUT
                </Link>

                <Link
                  to='work-section'
                  smooth={true}
                  duration={0}
                  className="cursor-pointer hover:bg-gray-700 text-zinc-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium dark:text-white"
                >
                  WORKS
                </Link>

                <Link
                  to='skills-section'
                  smooth={true}
                  duration={0}
                  className="cursor-pointer hover:bg-gray-700 text-zinc-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium dark:text-white"
                >
                  SKILLS
                </Link>

                <Link
                  to='contact-section'
                  smooth={true}
                  duration={0}
                  className="cursor-pointer hover:bg-gray-700 text-zinc-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium dark:text-white"
                >
                  CONTACT
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>


    </div>



  )
}
