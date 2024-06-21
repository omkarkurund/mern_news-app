import React from 'react'
import MainLayout from '../../components/MainLayout'
import Hero from './container/Hero'
import News from './container/News'
import CTA from './container/CTA'


const HomePage = () => {
  return (
    <MainLayout>
      <Hero/>
      <News/>
      <CTA/>
    </MainLayout>
  )
}

export default HomePage
