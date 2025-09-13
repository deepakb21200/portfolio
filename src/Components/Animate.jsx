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
    <div className="   relative overflow-x-hidden z-0 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24
    
     " >


    
    



  {/* <Particles id="tsparticles"  options={{
            "fullScreen": {
              "enable": true,
              "zIndex": 1
            },
            "detectRetina": true,
            "fpsLimit": 60,
            "interactivity": {
              "events": {
                "onClick": {
                  "enable": true,
                  "mode": "push"
                },
              
                "onHover": {
                  "enable": true,
                  "mode": "bubble",
                 
                },
                "resize": true
              },
              "modes": {
                "bubble": {
                  "distance": 100,
                  "duration": 1,
                  "opacity": 0.8,
                  "size": 25,
                },
                
            
                "push": {
                  "quantity": 2,
                
                },
                
                
              }
            },
            "particles": {
            
              "move": {
                "enable": true,
                "outMode": "out",
                "speed": 2,
                "straight": false
              },
    
              "number": {
                "density": {
                  "enable": true,
                  "area": 800
                },
              
                "value": 15,
              },
              "opacity": {
                "animation": {
                  "enable": true,
                  "minimumValue": 0.2,
                  "speed": 1,
                  "sync": false
                },
                "random": true,
                "value": 1
              },
              "rotate": {
                "animation": {
                  "enable": true,
                  "speed": 10,
                  "sync": false
                },
                "direction": "random",
                "random": true,
            
              },
              "shape": {
                
                "image": [
                  
                  
             
                  {
                    "src": htmlIcon,
                    "width": 20,
                    "height": 20
                  },
                  {
                    "src": jsIcon,
                    "width": 20,
                    "height": 20
                  },
                 
                   
                  {
                    "src": reactIcon,
                    "width": 20,
                    "height": 20
                  },
                  
                  
                   {
                    "src": gits,
                    "width": 20,
                    "height": 20
                  },
                   {
                    "src": jsons,
                    "width": 20,
                    "height": 20
                  },

                   {
                    "src": githubs,
                    "width": 20,
                    "height": 20
                  },

                    {
                    "src": vites,
                    "width": 20,
                    "height": 20
                  },

                ],
                
                
                "type": "image"
              },
              "size": {
                 
                "random": false,
                "value": 16
              }
            },
            
            "background": {
              "image": `url(${light})`,
              "position": "50% 50%",
              "repeat": "no-repeat",
              "size": "cover"
            }
          }}   /> */}

  



          <Heroes/>
       {/* <Hero/> */}
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


 