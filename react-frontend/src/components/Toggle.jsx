import React  from 'react'
import useDarkMode from './useDarkMode'


export default function Toggle() {
      
    const [colorTheme , setTheme ] = useDarkMode();

    return (
          
        <div className="flex items-center justify-center w-full sm:mx-4 mx-3">
  
        <label htmlFor="toggleB" className="flex items-center cursor-pointer">
          
          <div className="relative">

            <input onChange={() => setTheme(colorTheme)}  type="checkbox" id="toggleB" className="sr-only"/>
            
            <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
            
            <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
          </div>
          <p className='ml-1 text-sm text-zinc-800 dark:text-white'>Dark</p>
         
        </label>
      
      </div>
     
    )
}
