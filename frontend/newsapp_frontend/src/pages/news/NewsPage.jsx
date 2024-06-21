import React, { useEffect, useState } from "react";
import { getAllNews } from "../../services/index/news";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import ArticleCardSkeleton from "../../components/ArticleCardSkeleton";
import ErrorMessage from "../../components/ErrorMessage";
import NewsCard from "../../components/NewsCard";
import MainLayout from "../../components/MainLayout";




const NewsPage = () => {
  
  
  const {data, isLoading, isError} = useQuery({
    queryFn: ()=> getAllNews("",1,12),
    queryKey: ["news"],
    throwOnError: (error)=>{
      toast.error(error.message);
      console.log(error)
    }
  })

return (
  <MainLayout>
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
   

  
  </section>
  </MainLayout>
  
);
};

export default NewsPage;
