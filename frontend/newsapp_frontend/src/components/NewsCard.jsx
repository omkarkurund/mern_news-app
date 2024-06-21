import React from 'react'
import { MdCheck } from "react-icons/md";
import { images, stables } from '../constants'
import {AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-router-dom';


const NewsCard = ({ news, className }) => {
  return (
    <div className={`rounded-xl overflow-hidde shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className}`}>
      <Link to={`/news/${news.slug}`}>
      <img src={news.photo ? stables.UPLOAD_FOLDER_BASE_URL + news.photo :images.samplePostImage } alt="title" className='w-full rounded-lg object-cover object-center h-auto md:h-52' />
      </Link>
   
      <div className='p-5'>
      <Link to={`/news/${news.slug}`}>
      <h2 className='font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]'>{news.title}</h2>
      <p className='text-dark-light mt-3 text-sm md:text-lg '>{news.caption}</p>
      </Link>
     
        <div className='flex justify-between flex-nowrap items-center mt-6'>
          <div className='flex items-center gap-x-2 md:gap-x-2.5'>
            <img className='w-[30px] md:w-[30px] rounded-full' src={news.user.avatar ? stables.UPLOAD_FOLDER_BASE_URL + news.user.avatar :images.userImage } alt="post profile" />
            <div className='flex flex-col'>
              <h4 className='font-bold italic text-dark-soft text-sm md:text-base'>{news.user.name}</h4>
              <div className='flex items-center gap-x-2'>
                <span className={`${news.user.verified ? "bg-[#36B37E]" : "bg-red-500"} w-fit bg-opacity-20 p-1.5 rounded-full`}>
                  {news.user.verified ? <MdCheck className='w-3 h-3 text-[#36B37E]' /> : <AiOutlineClose className='w-3 h-3 text-red-500' />}
                  </span>
                <span className='italic text-dark-light text-xs md:text-sm'>{news.user.verified ? "Verified" : "Unverified"} writer</span>
              </div>
            </div>
          </div>
          <span className='font-bold text-dark-light italic text-sm md:text-base'> {new Date(news.createdAt).getDate()} {new Date(news.createdAt).toLocaleString("default", {month : 'long'})} </span>
        </div>
      </div>
    </div>
  )
}

export default NewsCard
