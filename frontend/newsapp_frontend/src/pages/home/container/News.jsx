// import React from 'react'

// import NewsCard from './../../../components/NewsCard'
// const News = () => {
//   return (
//     <section className='container mx-auto flex flex-wrap md:gap-x-5 gap-y-5 px-5 py-10'>
//      <NewsCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33% - 21px)]"/>
//      <NewsCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33% - 21px)]"/>
//      <NewsCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33% - 21px)]"/>
//       {/* <NewsCard className="w-full" />
//       <NewsCard className="w-full" />
//       <NewsCard className="w-full" /> */}
//     </section>
//   )
// }

// export default News


import React from 'react';
import {FaArrowRight} from 'react-icons/fa'
import NewsCard from './../../../components/NewsCard';
import { useQuery } from '@tanstack/react-query';
import { getAllNews } from '../../../services/index/news';
import toast from 'react-hot-toast';
import ArticleCardSkeleton from '../../../components/ArticleCardSkeleton';
import ErrorMessage from '../../../components/ErrorMessage';
import { Link } from 'react-router-dom';
// redux

const News = () => {

    const {data, isLoading, isError} = useQuery({
      queryFn: ()=> getAllNews("",1,6),
      queryKey: ["news"],
      throwOnError: (error)=>{
        toast.error(error.message);
        console.log(error)
      }
    })

  return (
    <section className=' flex flex-col container mx-auto px-5 py-10'>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-10'>

      {isLoading ?  [ ...Array(3)].map((item,index)=>(
        <ArticleCardSkeleton key={index} className="w-full"/>
      )) : isError ? <ErrorMessage message="Couldn't fetch the posts data"/> : data?.data.map((lnews)=>(
        <NewsCard key={lnews._id} news={lnews} className="w-full" />
      ))}
     
      
      {/* <NewsCard className="w-full" />
      <NewsCard className="w-full" />  */}

     </div>
     <Link
        to="/news"
        className="mx-auto flex items-center gap-x-2 font-bold text-primary border-2 border-primary px-6 py-3 rounded-lg"
      >
        <span>More News</span>
        <FaArrowRight className="w-3 h-3" />
      </Link>

    
    </section>
  );
}

export default News;

