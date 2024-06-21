// import { useQuery } from '@tanstack/react-query';
// import React, { useState } from 'react'
// import { getAllNews } from '../../../../services/index/news';
// import { images, stables } from '../../../../constants';
// import Pagination from '../../../../components/Pagination';

// const ManageNews = () => {

//     const [searchKeyword, setSearchKeyword] = useState("");
//     const [currentPage, setCurrentPage] = useState(1);

//   const {data: newsData, isLoading, isFetching,refetch} = useQuery({
//     queryFn: ()=> getAllNews(searchKeyword,currentPage),
//     queryKey: ["news"],
//   });

//   const searchKeywordHandler=(e)=>{
//         const {value}= e.target;
//         setSearchKeyword(value)

//   }

//   const submitSearchKeywordHandler=(e)=>{

//     e.preventDefault();
//     refetch();

//   }

//   return (
//     <div>
      
//       <h1 className='text-2xl font-semibold'>Manage News</h1>
//       <div className=" w-full px-4 mx-auto">
//     <div className="py-8">
//         <div className="flex flex-row justify-between w-full mb-1 sm:mb-0">
//             <h2 className="text-2xl leading-tight">
//                 Users
//             </h2>
//             <div className="text-end">
//                 <form onSubmit={submitSearchKeywordHandler} className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
//                     <div className=" relative ">
//                         <input type="text" id="&quot;form-subscribe-Filter" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="News title...." onChange={searchKeywordHandler} value={searchKeyword}/>
//                         </div>
//                         <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
//                             Filter
//                         </button>
//                     </form>
//                 </div>
//             </div>
//             <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
//                 <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
//                     <table className="min-w-full leading-normal">
//                         <thead>
//                             <tr>
//                                 <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
//                                     Title
//                                 </th>
//                                 <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
//                                     Category
//                                 </th>
//                                 <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
//                                     Created at
//                                 </th>
//                                 <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
//                                     Tags
//                                 </th>
//                                 <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
//                                 </th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                           {isLoading || isFetching? (
//                             <tr>
//                               <td colSpan={5} className='text-cneter py-10 w-full'>
//                               Loading.....
//                               </td>
//                             </tr>
//                           ) : (
//                             newsData?.data.map((news)=>(
//                               <tr>
//                               <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
//                                   <div className="flex items-center">
//                                       <div className="flex-shrink-0">
//                                           <a href="#" className="relative block">
//                                               <img alt={news.title} src={news?.image ? stables.UPLOAD_FOLDER_BASE_URL + news.image : images.samplePostImage} className="mx-auto object-cover rounded-lg  w-10 aspect-square " />
//                                           </a>
//                                       </div>
//                                       <div className="ml-3">
//                                           <p className="text-gray-900 whitespace-no-wrap">
//                                               {news.title}
//                                           </p>
//                                       </div>
//                                   </div>
//                               </td>
//                               <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
//                                   <p className="text-gray-900 whitespace-no-wrap">
//                                       {news.categories.length > 0 ? news.categories[0] : "Uncategorized"}
//                                   </p>
//                               </td>
//                               <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
//                                   <p className="text-gray-900 whitespace-no-wrap">
//                                       {new Date(news.createdAt).toLocaleDateString("en-US",{
//                                         day: 'numeric',month: 'short',year:'numeric'
//                                       })}
//                                   </p>
//                               </td>
//                               <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
//                                   <div className='flex gap-x-2'>
//                                       {news.tags.length > 0 ? news.tags.map((tag,index)=>(
//                                        <p>{tag}{news.tags.length - 1 !== index && ',' }</p>
//                                       )): "No tags"}
//                                   </div>
//                               </td>
//                               <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
//                                   <a href="#" className="text-indigo-600 hover:text-indigo-900">
//                                       Edit
//                                   </a>
//                               </td>
//                           </tr>
//                             ))
                            
//                           )}
                           
                        
//                         </tbody>
//                     </table>
//                     {!isLoading &&  <Pagination onPageChange={(page)=> setCurrentPage(page) } currentPage={currentPage} totalPageCount={JSON.parse(newsData?.headers?.['x-totalpagecount'])}/>
//                     }
                  
//                 </div>
//             </div>
//         </div>
//     </div>

//     </div>
//   )
// }

// export default ManageNews

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import { deleteNews, getAllNews } from '../../../../services/index/news';
import { images, stables } from '../../../../constants';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import Pagination from '../../../../components/Pagination';

const ManageNews = () => {
    const queryClient = useQueryClient();
    const [searchKeyword, setSearchKeyword] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const userstate = useSelector((state) => state.user);

    const { data: newsData, isLoading, isFetching, error, refetch } = useQuery({
        queryFn: () => getAllNews(searchKeyword, currentPage),
        queryKey: ["news", searchKeyword, currentPage],
        keepPreviousData: true,
    });

    const { mutate:mutateDeleteNews, isLoading:isLoadingDeleteNews } = useMutation({
        mutationFn: ({ slug, token }) => {
          return deleteNews({
            slug,token,
        
          });
        },
        onSuccess: (data) => {
          queryClient.invalidateQueries(["news"]);
          toast.success("News is Deleted");
        },
        onError: (error) => {
          toast.error(error.message);
          console.log(error);
        },
      });
   
    // console.log(newsData?.headers['x-totalpagecount']);
    const searchKeywordHandler = (e) => {
        const { value } = e.target;
        setSearchKeyword(value);
    }

    const submitSearchKeywordHandler = (e) => {
        e.preventDefault();
        refetch();
    }


    const deleteNewsHandler =({slug,token})=>{
        mutateDeleteNews({slug,token})
    }

    return (
        <div>
            <h1 className='text-2xl font-semibold'>Manage News</h1>
            <div className="w-full px-4 mx-auto">
                <div className="py-8">
                    <div className="flex flex-row justify-between w-full mb-1 sm:mb-0">
                        <h2 className="text-2xl leading-tight">
                            Users
                        </h2>
                        <div className="text-end">
                            <form onSubmit={submitSearchKeywordHandler} className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
                                <div className="relative">
                                    <input type="text" id="form-subscribe-Filter" className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="News title..." onChange={searchKeywordHandler} value={searchKeyword} />
                                </div>
                                <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                                    Filter
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
                        <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                            Title
                                        </th>
                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                            Category
                                        </th>
                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                            Created at
                                        </th>
                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                            Tags
                                        </th>
                                        <th scope="col" className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {isLoading || isFetching ? (
                                        <tr>
                                            <td colSpan={5} className='text-center py-10 w-full'>
                                                Loading...
                                            </td>
                                        </tr>
                                    ) : newsData?.data?.length === 0 ?(
                                        <tr>
                                            <td colSpan={5} className='text-center py-10 w-full'>
                                                No News Found...
                                            </td>
                                        </tr>
                                    ) : 
                                    (
                                        newsData?.data.map((news) => (
                                            <tr key={news.id}>
                                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0">
                                                            <a href="/" className="relative block">
                                                                <img alt={news.title} src={news?.photo ? stables.UPLOAD_FOLDER_BASE_URL + news.photo : images.samplePostImage} className="mx-auto object-cover rounded-lg w-10 aspect-square" />
                                                            </a>
                                                        </div>
                                                        <div className="ml-3">
                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                {news.title}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {news.categories.length > 0 ? news.categories[0] : "Uncategorized"}
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {new Date(news.createdAt).toLocaleDateString("en-US", {
                                                            day: 'numeric', month: 'short', year: 'numeric'
                                                        })}
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                    <div className='flex gap-x-2'>
                                                        {news.tags.length > 0 ? news.tags.map((tag, index) => (
                                                            <p key={index}>{tag}{news.tags.length - 1 !== index && ','}</p>
                                                        )) : "No tags"}
                                                    </div>
                                                </td>
                                                <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 space-x-5">
                                                    <button disabled={isLoadingDeleteNews} type='button' className='text-red-600 hover:text-red-900 disabled:opacity-70 disabled:cursor-not-allowed' onClick={()=>{ deleteNewsHandler({slug: news?.slug, token: userstate.userInfo.token })}}>

                                                     Delete
                                                     </button>
                                                    <Link to={`/admin/news/manage/edit/${news?.slug}`} className="text-green-600 hover:text-green-900">
                                                        Edit
                                                    </Link>
                                                    
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                            {/* {!isLoading && newsData && (
                                <Pagination
                                    onPageChange={(page) => setCurrentPage(page)}
                                    currentPage={currentPage}
                                    // totalPageCount={newsData ? JSON.parse(newsData.headers['x-totalpagecount']) : 10}
                                    totalPageCount={newsData.headers['x-totalpagecount']} 
                                />
                            )} */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ManageNews;
