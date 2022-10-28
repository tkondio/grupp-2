import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

type LayoutWrapperProps = {
    children: React.ReactNode
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({children}) => {
  return (
    <>
    <Navbar />
    {children}
    <Footer />    
    </>
  )
}

export default LayoutWrapper