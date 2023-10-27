import React from 'react'
import logo from "../../assets/logo.jpg"

export const Header = () => {
  return (
    <div className='h-[69px] bg-white shadow-xl sticky top-0'>
        <div className='w-[95%] md:w-[90%] xl:w-[1200px] mx-auto flex justify-between items-center h-[69px]'>
            <img className='w-[80px]' src={logo} alt="" />
            {/* <div className='md:flex hidden'>
                <li className='list-none mx-4 p-3 cursor-pointer font-semibold'>Home</li>
                <li className='list-none mx-4 p-3 cursor-pointer font-semibold'>About Us</li>
                <li className='list-none mx-4 p-3 cursor-pointer font-semibold'>Blog</li>
                <li className='list-none mx-4 p-3 cursor-pointer font-semibold'>Shop</li>
            </div> */}
            <div>
              <a href="mailto:joseph@bartholomewdevelopment.com"><button className='py-2 text-primary border-primary border hover:text-white hover:bg-primary rounded-lg px-6 shadow-lg text-[16px]'>Get A Quote</button></a>
            </div>
        </div>
    </div>
  )
}
