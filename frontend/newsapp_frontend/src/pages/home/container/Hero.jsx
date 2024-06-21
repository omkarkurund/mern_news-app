import React from 'react'
import {FiSearch} from 'react-icons/fi'
import { images } from '../../../constants'


const Hero = () => {
  return (
   <section className='container mx-auto flex flex-col px-5 py-5 lg:flex-row'>
    <div className='mt-10 lg:w-1/2'>
        <h1 className='font-roboto text-3xl text-center font-bold text-dark-soft md:text-5xl lg:text-4xl xl:text-5xl lg:text-left lg:max-w-[540px]'>Read the Breaking News and Top Headlines</h1>
        <p className='text-dark-light mt-4 text-center lg:text-base xl:text-xl md:text-xl lg:text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, sit eligendi illo odio voluptate dolorem eius dignissimos veritatis reprehenderit voluptatum!</p>

        {/* for search bar */}

        <div className='flex flex-col gap-y-2.5 mt-10 lg:mt-6 xl:mt-10 relative'>
            <div className='relative'>
            <FiSearch className='absolute left-3 top-4 -transalte-y-1/2 w-6 h-6 text-[#959EAD]'/>
                <input className="placeholder:font-bold font-semibold text-dark-soft placeholder:text-[#959EAD] rounded-lg pl-12 pr-3 w-full py-3 focus:outline-none shadow-[rgba(13,_38,_76,_0.19)_0_9px_20px] md:py-4" type="text" placeholder='Search news'/>
                
            </div>
            <button className='bg-primary text-white font-semibold rounded-lg px-5 py-3 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 mid:w-fit md:py-2'>Search</button>
        </div>

        <div className='flex mt-4 flex-col lg:flex-row lg:flex-nowrap lg:items-start lg:gap-x-4 lg:mt-7 '>
            <span className='text-dark-light font-semibold italic lg:mt-4 lg:text-sm xl:text-base '>Popular Tags</span>
            <ul className='flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base'>
                <li className='rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold'>Election</li>
                <li className='rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold'>Education</li>
                <li className='rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold'>Sport</li>
            </ul>
        </div>
    </div>
    <div className='hidden lg:block lg:1/2 ml-20 mt-3'>
     <img className="w-[700px] h-[450px]" src={images.HeroImage} alt="users are reading news" />
    </div>
   </section>
  )
}

export default Hero
