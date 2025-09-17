// import Particles from "react-tsparticles"
// import { Container } from "./styles";
// import { Hero } from "../Hero/Hero";
// import { About } from "../About/About";
// import { Contact } from "../Contact/Contact";
// import { Project } from "../Project/Project";
// import python from "../assets/python.svg"
// import light from "../assets/light.jpeg"
// import java from "../assets/java.svg"
// import wordpress from "../assets/wordpress.svg";
// import gits from "../assets/gits.svg";
// import githubs from "../assets/githubs.svg";
// import jsons from "../assets/jsons.svg";
// import vites from "../assets/vites.png";
// import shopify from "../assets/shopify.svg";
// import htmlIcon from "../assets/html-icon.svg";
// import cssIcon from "../assets/css-icon.svg";
// import sassIcon from "../assets/sass-icon.svg";
// import jsIcon from "../assets/js-icon.svg";
// import nodeIcon from "../../assets/node-icon.svg";
// import reactIcon from "../assets/react-icon.svg";
// import typescriptIcon from "../assets/typescript-icon.svg";
// import vueIcon from "../assets/vue-icon.svg";
// import boostrapIcon from "../assets/bootstrap-icon.svg";
import "./animate.css"
// import HeroSection from "./Hero";
 
import { Project } from "./Project";
import Contact from "./Contact";
import Heroes from "./Heroes";
import Hero from "./Hero";
import { About } from "./About";
 

export default function Animate() {
 
// style={{padding:"0px 6.3rem"}}
    
  return (
    // <div className="   relative overflow-x-hidden z-0 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24
    
    //  " >
 <div className="   relative  overflow-x-hidden z-0 
    
     " >

  



          <Heroes/>
       {/* <Hero/>  */}
          <About/>
     
 
        <Project/>
        <Contact/>
  {/* <Hero />
  <About />
  <Project />
  <Contact /> */}
</div>
  )
}


 