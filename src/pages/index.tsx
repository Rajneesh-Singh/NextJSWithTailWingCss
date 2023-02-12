import React, { useState } from 'react'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Grid, TextField, Button } from '@material-ui/core';
import { classicNameResolver } from 'typescript';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [counter, setCounter] = useState(0)

  const incrementHandler = () => {
    setCounter(counter + 1)

  }
  const decrementHandler = () => {
    setCounter(counter - 1)
  }
  return (
    <div className='bg-blue-900 min-h-screen'>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="text-white ml-3 text-xl">Linear</span>
          </a>
          <nav className=" text-white md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">Features</a>
            <a className="mr-5 hover:text-gray-900">Method</a>
            <a className="mr-5 hover:text-gray-900">Customers</a>
            {/* <a className="mr-5 hover:text-gray-900">Changelog</a>
            <a className="mr-5 hover:text-gray-900">Integration</a> */}
            <a className="mr-5 hover:text-gray-900">Pricing</a>
            <a className="mr-5 hover:text-gray-900">Company</a>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"> Log in
            {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24"> */}
            {/* <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg> */}
          </button>
          <button className="lg:ml-8 md:ml-2 sm:ml-0 inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"> Sign up
            {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24"> */}
            {/* <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg> */}
          </button>
        </div>
      </header>
    <div className='lg:mt-12 md:mt-8 sm:mt-6'>
    <div className='flex items-center  text-center justify-center  flex-col'>
    <div className='mb-8'>
      <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"> Last Year You Said Next Year
            {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24"> */}
            {/* <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg> */}
          </button>
      </div>
      <div  className=' lg:w-3/5 md: w-3/5 sm: w-4/5  lg:leading-[5rem] md:leading-[5rem] sm:leading-[1.2rem] mb-12 '>
        <p className='text-white lg:text-[80px] md:text-[60px]   sm: text-[44px]'>Linear is a better way
        to build products </p>
      </div> 
      <div  className=' lg:w-2/5 md: w-4/5 sm: w-4/5 lg:leading-[1.5rem] md:leading-[2.5rem] sm:leading-[1.2rem] mb-12' >
      <p className='text-white lg:text-[22px] md:text-[22px] sm:text-[18px]'> Meet the new standard for modern software development.Streamline issues, sprints, and product roadmaps.
        </p>
        <p className='text-white lg:text-[22px] md:text-[22px] sm:text-[18px]'>
        
        </p>
      </div>
      <div>
      <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base   md:mt-0"> Get Started
            {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24"> */}
            {/* <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg> */}
          </button>
      </div>
    </div>
    </div>
    </div>


  )
}
