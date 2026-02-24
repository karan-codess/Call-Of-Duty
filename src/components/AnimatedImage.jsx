import React from "react";
import big from "../assets/images/big.jpg";
import Marquee from "./Marquee.jsx";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedImage = () => {

    const headingRef = useRef(null);
    const p1Ref = useRef(null);
    const p2Ref = useRef(null);
    const p3Ref = useRef(null);

    const splitText = (text) => {
        return text.split("").map((char, i) => (
            <span key={i} className="char inline-block">
                {char === " " ? "\u00A0" : char}
            </span>
        ));
    };

    useEffect(() => {
        const chars = headingRef.current.querySelectorAll('.char');

        gsap.fromTo(chars, 
            { 
                opacity: 0, 
                y: 50,
                rotateX: -90 
            }, 
            { 
                opacity: 1, 
                y: 0, 
                rotateX: 0, 
                duration: 0.9, 
                stagger: 0.01,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: "top 80%",
                    end: "top 20%", 
                    toggleActions: "play none none reverse",
                    
                }
            }
        );

        gsap.fromTo(p1Ref.current,
            {
                opacity:0,
                y:40
            },
            {
                opacity:1,
                y:0,
                duration:1.2,
                ease:"power3.out",
                scrollTrigger:{
                    trigger:p1Ref.current,
                    start:"top 80%",
                    end:"top 40%",
                    toggleActions: "play none none reverse",
                }
            }
        );
        gsap.fromTo(p2Ref.current,
            {
                opacity:0,
                y:40
            },
            {
                opacity:1.2,
                y:0,
                duration:1,
                ease:"power3.out",
                scrollTrigger:{
                    trigger:p2Ref.current,
                    start:"top 70%",
                    end:"top 40%",
                    toggleActions: "play none none reverse",
                }
            }
        );

        gsap.fromTo(p3Ref.current,
            {
                opacity:0,
                y:40
            },
            {
                opacity:1,
                y:0,
                duration:1,
                ease:"power3.out",
                scrollTrigger:{
                    trigger:p3Ref.current,
                    start:"top 80%",
                    end:"top 40%",
                    toggleActions: "play none none reverse",
                }
            }
        )
    }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden flex flex-col text-center items-center">
      <h1 className='text-black px-10 pt-24 md:pt-36 text-xs font-["thinn"]'>
        DESIGNED BY KARAN
      </h1>
      <div>
        <h1 ref={headingRef} className='text-black text-[50px] sm:text-[70px] md:text-[80px] lg:text-[100px] font-["zentry"] w-full max-w-xs md:max-w-7xl leading-none tracking-[-0.02em] mt-10'>
          {splitText("Human life powers AI")}
          <br />
          {splitText("and AI expands human potential.")}
        </h1>
      </div>
      <div id="clip" className="w-full mt-30 sm:mt-10 relative">
        <div className="mask-clip-path w-full">
          <img src={big} alt="Big Image" className="w-full h-auto" />
        </div>
        <p ref={p1Ref} className="text-gray-600 px-5 md:px-10 text-sm sm:text-base font-['thinn'] leading-tight absolute top-[2%] sm:top-[6%] md:top-10 lg:top-40 text-left max-w-xs md:max-w-xl">
          Soldiers strike hard across every battlefield. Victory awaits! Gear up. Tactical maneuvers decide domination.
        </p>

        <p ref={p2Ref} className="text-gray-600 px-10 font-['thinn'] max-md:hidden leading-tight absolute md:top-28 lg:top-60 text-left max-w-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
Soldiers storm the front lines with deadly precision. Every shot strikes true! Victory.</p>

        <p ref={p3Ref} className="text-black text-sm md:text-base px-5 md:px-10 font-['thinn'] leading-tight max-lg:hidden absolute lg:bottom-[9%] lg:right-[39%] max-w-4xl">
          Play Call of Duty: Black Ops 7 <br />
          on console, PC and cloud with <br /> Xbox Game Pass.†
        </p>

        <Marquee className="md:absolute md:bottom-[0]" />
      </div>
    </div>
  );
};

export default AnimatedImage;
