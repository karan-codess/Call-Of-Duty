import React from 'react'
import icon from "../assets/images/icon.png"
import icon2 from "../assets/images/icon2.png"
import icon3 from "../assets/images/icon3.png"
import {useEffect,useRef} from 'react'
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Description = () => {
        const bigRef = useRef(null);

        useEffect(()=>{
            gsap.fromTo(bigRef.current,
            {
                opacity: 0,
                y: 40
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger:{
                    trigger:bigRef.current,
                    start:"top 90%",
                    end:"top 20%",
                    toggleActions: "play none none none",
                }
            }
        )
        },[]);

    return (
        <div className='relative min-h-screen w-full overflow-x-hidden flex flex-col px-10 py-48 text-center items-center'>
            <h1 className='text-black text-xs font-["thinn"]'>WHO ARE WE</h1>
            <h1 className='text-black z-999 font-["zentry"] text-[60px] sm:text-[70px] md:text-[90px] lg:text-[110px] leading-[0.82em] tracking-[-0.010em] mt-15 md:max-w-2xl'>We're leading a new <img className='w-10 z-1 inline-block align-middle hover:scale-[5] transition-all duration-300 ease-in-out' src={icon} alt="" /> warzone that tests players <img src={icon2} className='w-10 inline-block align-middle hover:scale-[5] transition-all duration-300 ease-in-out' alt="" /> and pushes soldiers and <img src={icon3} className='w-10 inline-block align-middle hover:scale-[5] transition-all duration-300 ease-in-out' alt="" /> power to dominate</h1>

                <p ref={bigRef} className='text-gray-500 font-["thinn"] leading-tight max-w-xs md:max-w-md mt-20'>As a Call of Duty studio, we are creators, designers, and developers crafting legendary battles, iconic maps, and unforgettable warfare experiences.</p>
        </div>
    )
}

export default Description