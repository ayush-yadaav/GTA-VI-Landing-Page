import React, { useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css'

function App() {

  const [showContent, setshowContent] = useState(false)


  // it is for image and bg animation
  useGSAP(() => {
    const t1 = gsap.timeline();

    t1.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to('.vi-mask-group', {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= .9) {
          document.querySelector(".svg").remove();
          setshowContent(true);
          this.kill();
        }
      }
    })
  })

  // mouse animation 

  useGSAP(() => {

    const isMobile = window.innerWidth < 768;

    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });
    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    })
    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    })
    gsap.to(".char", {
      scale: isMobile ? 1.5 : 1.2,
      x: "-50%",
      bottom: isMobile ? "-30%" : "-80%", // ✅ Adjusted for smaller viewports
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });
    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    })

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 1   }%`,
        
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });

    })

  }, [showContent])

  return (

    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className='main md:w-full  rotate-[-10deg] scale-[1.7] '>
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className="navbar absolute top-0 z-[10] left-0 w-full py-10 px-10 ">
              <div className="logo flex gap-5 items-center ">
                <div className="lines flex flex-col gap-1 ">
                  <div className="line w-10 md:h-2 h-1 bg-white"></div>
                  <div className="line w-8 md:h-2 h-1 bg-white"></div>
                  <div className="line w-5 md:h-2 h-1 bg-white"></div>
                </div>
                <h3 className=' md:text-4xl text-3xl  -mt-[7px] leading-none text-white'>RockStar</h3>
              </div>
            </div>



            <div className="imagediv overflow-hidden relative w-full h-screen">
              <img className='w-full sky  scale-[1.5] rotate-[-20deg] h-full object-cover absolute top-0 left-0' src="./sky.png" alt="" />
              <img className='w-full bg scale-[1.8] rotate-[-3deg] h-full object-cover absolute top-0 left-0' src="./bg.png" alt="" />

              <div className="text scale-[1.4] rotate-[-10deg] text-white absolute flex  flex-col gap-2  md:top-20 left-1/2  top-50 -translate-x-1/2 ">
                <h1 className='md:text-9xl  text-7xl  leading-none md:-ml-40 ml-30  '>grand</h1>
                <h1 className='md:text-9xl text-6xl  leading-none md:ml-20'>theft</h1>
                <h1 className='md:text-9xl  text-7xl leading-none md:-ml-40'>auto</h1>
              </div>

             <img
  className='char absolute 
    bottom-[-40%] sm:bottom-[-60%] md:bottom-[-100%] 
    left-1/2 -translate-x-1/2 
    scale-[1.5] sm:scale-[2.5] md:scale-[3] 
    rotate-[-10deg] sm:rotate-[-15deg] md:rotate-[-20deg]'
  src="./girlbg.png"
  alt="character"
/>





            </div>
            <div className="bottombar absolute bottom-0 left-0 w-full px-4 sm:px-10 py-8 sm:py-16 bg-gradient-to-t from-black to-transparent">
  <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start justify-between relative">
    
    {/* Scroll Down text and icon */}
    <div className="flex items-center gap-2 sm:gap-4">
      <i className="text-white text-3xl sm:text-4xl ri-arrow-down-line"></i>
      <h3 className="font-[Helvetica_Now_Display] text-lg sm:text-xl text-white">Scroll Down</h3>
    </div>

    {/* PS5 logo */}
    <img
      className="h-12 sm:h-[40px] hidden absolute sm:static top-1/2 sm:top-auto left-1/2 sm:left-auto -translate-x-1/2 sm:translate-x-0 -translate-y-1/2 sm:translate-y-0"
      src="./ps5.png"
      alt="PS5 Logo"
    />
  </div>
</div>

          </div>
          <div className="w-full h-screen flex items-center justify-center overflow-hidden  bg-black">
            <div className="cntr md:flex flex  md:mt-2  text-white w-full h-[80%] ">
              <div className="limg relative h-full w-1/2">
                <img className='absolute w-full md:scale-[1.2] scale-[4.5] md:top-1/2 md:mt-1 md:py-3 mt-15 md:left-1/2 left-50 -translate-x-1/2 -translate-y-1/2' src="./imag.png" alt="" />
              </div>
              <div className="r md:w-[40%] md:py-20 flex  flex-col items-center justify-center md:mt-3 mt-[70%]">
                <h1 className='md:text-7xl text-5xl  '>Still Running</h1>
                <h1 className='md:text-7xl text-5xl'>Not Hunting</h1>
               <div className="px-7">
                 <p className='mt-10 md:text-xl font-[helvetica_Now_Display]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur numquam ipsa laboriosam corrupti beatae molestias voluptatum fugiat repellat doloremque vero!</p>
                <p className='mt-3 md:text-xl font-[helvetica_Now_Display]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur numquam ipsa laboriosam corrupti beatae molestias voluptatum fugiat repellat doloremque vero!</p>
                <p className='md:mt-10  md:text-xl font-[helvetica_Now_Display]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur numquam ipsa laboriosam corrupti beatae molestias voluptatum fugiat repellat doloremque vero!</p>
               </div>
                <button className=' md:mt-10 md:px-7 md:py-7 px-4 py-4 rounded-2xl mt-2 bg-yellow-500 md:text-4xl mb-3 text-black'>Download Now</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default App