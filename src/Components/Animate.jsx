 
import "./animate.css"
 
 
import { Project } from "./Project";
import Contact from "./Contact";
import Heroes from "./Heroes";
 
import { About } from "./About";
import Footer from "./Footer";
 
 

export default function Animate() {
 
 
    
  return (
 
//  <div className="   relative  overflow-x-hidden z-0   w-[85%] mx-auto
    
//      " >

  <div className="
  relative 
  overflow-x-hidden 
  z-0 
  w-full 
  max-w-[90%]
 
  sm:px-6 
  md:px-8 
  lg:px-12 
  xl:px-0
  
  mx-auto
">
 


          <Heroes/>
 
          <About/>
     
 
        <Project/>
        <Contact/>
        <Footer/>
 
</div>
  )
}


 