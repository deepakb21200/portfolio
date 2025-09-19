 
import React from 'react'
import deepak from "../assets/ed.jpg";
import "./try.css"
function ThreeDCube() {
  return (
    <div className='w-full h-screen border-4 border-red-400'>
<svg width="0" height="0" aria-hidden="true">
  <filter id="glow-0" x="-.25" y="-.25" width="1.5" height="1.5">
    <feComponentTransfer>
      <feFuncA type="table" tableValues="0 2 0"></feFuncA>
    </feComponentTransfer>
    <feGaussianBlur stdDeviation="2"></feGaussianBlur>
    <feComponentTransfer result="rond">
      <feFuncA type="table" tableValues="-2 3"></feFuncA>
    </feComponentTransfer>
    <feMorphology operator="dilate" radius="3"></feMorphology>
    <feGaussianBlur stdDeviation="6"></feGaussianBlur>
    <feBlend in="rond" result="glow"></feBlend>
    <feComponentTransfer in="SourceGraphic">
      <feFuncA type="table" tableValues="0 0 1"></feFuncA>
    </feComponentTransfer>
    <feBlend in2="glow"></feBlend>
  </filter>

  <filter id="glow-1" x="-.25" y="-.25" width="1.5" height="1.5">
    <feComponentTransfer in="SourceGraphic" result="grad">
      <feFuncA type="table" tableValues="0 2 0"></feFuncA>
    </feComponentTransfer>
    <feMorphology operator="dilate" radius="3"></feMorphology>
    <feGaussianBlur stdDeviation="6" result="glow"></feGaussianBlur>
    <feTurbulence type="fractalNoise" baseFrequency="7.13"></feTurbulence>
    <feDisplacementMap in="glow" scale="12" yChannelSelector="R"></feDisplacementMap>
    <feComponentTransfer>
      <feFuncA type="linear" slope=".8"></feFuncA>
    </feComponentTransfer>
    <feBlend in="grad" result="out"></feBlend>
    <feComponentTransfer in="SourceGraphic">
      <feFuncA type="table" tableValues="0 0 1"></feFuncA>
    </feComponentTransfer>
    <feBlend in2="out"></feBlend>
  </filter>
</svg>
 <div className="relative flex  justify-center items-center mt-[200px]">
            <img
              src={deepak}
              alt="Deepak Bisht"
              className="  object-fill block w-[360px]  
              h-auto  
             "
  //             style={{
  //   "--l": "#0000 0% 85%, #936bff7f 0%, #b892ff7f, #ffc2e27f, #ff90b37f",
  //   borderRadius: "12px",
  //   border: "6px solid transparent",
  //   filter: "url(#glow-1)",
  //   animation: "rotateA 2s linear infinite",
  //   width: "360px",
  //   aspectRatio: "1",
  //   objectFit: "cover",
  // }}

 style={{
    "--l": "#0000 0%, #f7258520, #7209b740, #3a0ca360, #4361ee7f"
  }}
            />
          </div>

    </div>



 
 





  )
}

export default ThreeDCube