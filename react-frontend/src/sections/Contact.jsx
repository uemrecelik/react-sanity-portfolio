import React, { useRef , useState } from 'react';
import emailjs from 'emailjs-com'
import Footer from './Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import contactme from '../../src/assets/contact-me-2.jpg';



export default function Contact() {


  const [mail, setMail] = useState();

  

  const notify = () => toast.success('Form Submitted! I will reply as soon as possible', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_MAIL_SERVICE_ID, process.env.REACT_APP_MAIL_TEMPLATE_ID, form.current, process.env.REACT_APP_MAIL_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    form.current.reset();
    notify();

  };



  return (
    <div>
      <section id='contact-section'
        className='h-full bg-slate-100 dark:bg-gray-600'>

        <div className='sm:pt-24 md:pt-0 grid grid-flow-row lg:grid-flow-col'>
          <div className="h-68 sm:h-60 max-w-md px-8 py-4 mx-auto mt-32 bg-white rounded-lg shadow-2xl dark:bg-gray-800">
            <div className="flex justify-center -mt-16 md:justify-end">
              <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" 
              alt="Me" src={contactme} />
            </div>

            <h2 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">Contact Me</h2>

            <p className="mt-2 text-gray-600 dark:text-gray-200">
            You can contact me via this form. I will get back to you as soon as possible. I hope that together we will bring out good deeds and gain new experiences. Best wishes
                  </p>

            <div className="flex justify-end mt-4">
              <h1 className="text-xl font-medium text-blue-500 dark:text-blue-300">Umut Emre Celik</h1>
            </div>
          </div>

          <div className=' my-16 w-full max-w-2xl px-6 py-5 mx-auto bg-white rounded-3xl shadow-2xl dark:bg-gray-800'>

            <div className='h-full'>


              <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3">
                <div className="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-200 transform rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500">
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>

                  <span className="mt-2">Bornova / Izmir, TR</span>
                </div>

                <div className="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-200 transform rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                 <a href="https://github.com/uemrecelik?tab=repositories" rel='noreferrer' target='_blank'>
                 <span className="mt-2">Github</span>
                   </a> 
                </div>

                <div className="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-200 transform rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500">
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>

                  <span className="mt-2">emrecelikdev@gmail.com</span>
                </div>
              </div>

              <form ref={form} onSubmit={sendEmail}>
                <div className="mt-6 ">
                  <div className="items-center -mx-2 md:flex">
                    <div className="w-full mx-2">
                      <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Name</label>

                      <input name='name' className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="text" />
                    </div>

                    <div className="w-full mx-2 mt-4 md:mt-0">
                      <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">E-mail</label>

                      <input onChange={(e) => setMail(e.target.value)} name='email' className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="email" />
                    </div>
                  </div>

                  <div className="w-full mt-4">
                    <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Message</label>

                    <textarea name='message' className="block w-full h-40 px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></textarea>
                  </div>

                  <div className="flex justify-center mt-6">
                    <button disabled={!mail} type='submit' className=" disabled:bg-gray-500 disabled:hover:bg-gray-500 px-4 py-2 text-white transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-sky-600 focus:outline-none focus:bg-gray-600">Send Message</button>
                    <ToastContainer
                      position="top-right"
                      autoClose={5000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>


        </div>



      </section>
      <Footer />
    </div>

  )
}
