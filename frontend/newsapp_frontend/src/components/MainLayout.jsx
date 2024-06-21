import React from 'react'
import Header from './Header'
import Footer from './Footer'
const MainLayout = ({children}) => {
  return (
    <div>
    <Header/>
    {children}
    <Footer/>
    </div>
  )
}

// Children is a prop is lies in between the header and footer
export default MainLayout
