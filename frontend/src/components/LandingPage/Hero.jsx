/* eslint-disable no-unused-vars */
import React from 'react'
import { useNavigate } from "react-router-dom";
import img from "../../assets/hero.jpg"



const Hero = () => {
  const navigate = useNavigate();
  return (
    <section>
      <div style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="w-full  h-[800px] bg-no-repeat px-4 py-28 gap-12 text-white md:px-8 md:flex">
        <div className='flex flex-col ml-20 space-y-6 max-w-xl'>
          {/* <a href="javascript:void(0)" className='inline-flex gap-x-6 items-center rounded-full p-1 pr-6 border text-sm font-medium duration-150 hover:bg-white'>
            <span className='inline-block rounded-full px-3 py-1 bg-indigo-600 text-white'>
              News
            </span>
            <p className='flex items-center'>
              Read the launch post from here
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
              </svg>
            </p>
          </a> */}
          <h1 className="text-[72px] text-white font-bold ">
            Every Good <br /> Act is a charity
          </h1>
          <p className='text-xl font-semibold'>
            Experience the Joy of Backing Extraordinary Ventures and Watching Them Flourish
          </p>
          <div className='flex items-center gap-x-3 sm:text-sm'>
            <button className='bg-white hover:bg-primary hover:text-white duration-200  p-2 rounded-md text-lg font-semibold text-primary' onClick={()=>navigate("/login")} >Support us</button>
            {/* <a href="javascript:void(0)" className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex">
              Get started
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
              </svg>
            </a> */}
            {/* <a href="javascript:void(0)" className="flex items-center justify-center gap-x-1 py-2 px-4 text-gray-700 hover:text-gray-900 font-medium duration-150 md:inline-flex">
              Contact sales
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
              </svg>
            </a> */}
          </div>
        </div>
        {/* <div className='flex-1 hidden md:block'>

          <img src="https://res.cloudinary.com/floatui/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1669333920/undraw_progressive_app_m-9-ms_oftfv5.jpg" className="max-w-xl" />
        </div> */}
      </div>
    </section>
  )
}

export default Hero

// < div className = "hero min-h-screen" style = {{ backgroundImage: `url(${img})` }}>
//     <div className="hero-overlay bg-opacity-60"></div>
//     <div className="hero-content text-center text-neutral-content">
//       <div className="max-w-md">
//         <h1 className="mb-5 text-5xl font-bold">Welcome to Better World</h1>
//         <p className="mb-5">Fundraising for the people and cause you care</p>
//         <button onClick={() => navigate("/login")} className="btn btn-primary outline-0 hover:bg-[#32bf6a] border-none bg-[#08a045]">Get Started</button>
//       </div>
//     </div>
