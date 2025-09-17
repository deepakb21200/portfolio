import React from 'react'
import Header from './Components/Header'
 
import Animate from './Components/Animate'
import { StarBackground } from './Components/StarBackground'
import Footer from './Components/Footer'
 

export default function App() {
  return (
    // <div className='w-full h-screen relative overflow-x-auto '>
    <div className='w-full h-screen relative overflow-x-hidden overflow-y-auto'>
 {/* overflow-x-hidden */}
 <StarBackground/>
       <Header/>
       <Animate/>
       <Footer/>

    
    </div>
  )
}
