import React, { useEffect, useState } from 'react'
import MainLayout from '../../components/MainLayout'
import BreadCrumbs from '../../components/BreadCrumbs'
import { images, stables } from '../../constants'
import { Link, useParams } from 'react-router-dom'
import SuggestedPosts from './container/SuggestedPosts'
import CommentsContainer from '../../components/comments/CommentsContainer'
import SocialShareButtons from '../../components/SocialShareButtons'
import { useQuery } from '@tanstack/react-query'
import { getAllNews, getSingleNews } from '../../services/index/news'
import { generateHTML } from '@tiptap/react'

import Bold from '@tiptap/extension-bold'
// Option 2: Browser-only (lightweight)
// import { generateHTML } from '@tiptap/core'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Italic from '@tiptap/extension-italic'

import parse from 'html-react-parser'
import ArticleDetailSkeleton from './components/ArticalDetailSkeleton'
import ErrorMessage from '../../components/ErrorMessage'
import { useSelector } from 'react-redux'
import parseJsonToHtml from '../../utils/parseJsonToHtml'
import Editor from '../../components/editor/MyEditor'





const ArticleDetailPage = () => {

  const { slug } = useParams();
  const userstate = useSelector( state=> state.user)
  const [breadCrumbsData, setbreadCrumbsData] = useState([]);

  const [body, setBody] = useState(null);
  //  console.log(slug)
  const { data, isSuccess, isLoading, isError } = useQuery({
    queryFn: () => getSingleNews({ slug }),
    queryKey: ['news', slug],
    onSuccess: (data) => {
      console.log("data", data);
    }
  });

  useEffect(() => {
    if (isSuccess && data) {
      setbreadCrumbsData([
        { name: "Home", link: "/" },
        { name: "News", link: "/news" },
        { name: data.title, link: `/news/${data.slug}` } // Assuming data.title is the news title
      ]);

      setBody(parseJsonToHtml(data?.body));

    }
  }, [isSuccess, data]);
  console.log(data)


  // addded data
  const { data : newsData } = useQuery({
    queryFn: () => getAllNews(),
    queryKey: ['news']
  });

  // useEffect(() => {
  //   if (isSuccess && data) {
  //     setbreadCrumbsData([
  //       { name: "Home", link: "/" },
  //       { name: "News", link: "/news" },
  //       { name: data.title, link: `/news/${data.slug}` } // Assuming data.title is the news title
  //     ]);

  //     setBody(parse(generateHTML(data?.body, [
  //       Bold, Italic, Document, Text, Paragraph
  //     ])))

  //   }
  // }, [isSuccess, data]);

  // console.log(breadCrumbsData)

  return (
    <MainLayout>
      {isLoading ? (<ArticleDetailSkeleton />) : isError ? <ErrorMessage /> : (
        <section className='container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start'>
          <article className='flex-1'>
            <BreadCrumbs data={breadCrumbsData} />
            <img className='rounded-xl w-full' src={data?.photo ? stables.UPLOAD_FOLDER_BASE_URL + data?.photo : images.samplePostImage} alt={data?.title} />

            <div className='mt-4 flex gap-2'>
              {data?.categories.map((category) => (
                <Link to={`/news?category=${category.name}`} className='text-primary text-sm font-roboto inline-block mt-4 md:text-base'>{category.name}</Link>
              ))}
            </div>


            <h1 className='text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]'>{data?.title}</h1>
          
            <div className='w-full'>
                 {!isLoading && !isError &&  <Editor content={data?.body} editable={false} /> }
               
            </div>
            <CommentsContainer className="mt-10" comments={data?.comments} logginedUserId={userstate?.userInfo?._id} postSlug={slug} />
          </article>
          <div>
            <SuggestedPosts header='Latest News' lnews={newsData?.data} tags={data?.tags} className="mt-8 lg:mt-0 lg:max-w-xs" />
            <div className='mt-7'>
              <h2 className='font-roboto font-medium text-dark-hard mb-4 md:text-xl'>Share On</h2>
              <SocialShareButtons url={encodeURI(window.location.href)} title={encodeURIComponent(data?.title)} />
            </div>
          </div>

        </section>
        
      )}

    </MainLayout>
  )
}

export default ArticleDetailPage;
