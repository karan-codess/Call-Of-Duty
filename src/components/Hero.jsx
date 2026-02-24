import React from 'react'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import video from '../assets/video/COD.mp4'

const Hero = () => {

    const loremRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(loremRef.current,
            {
                opacity: 0,
                y: 40
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power3.out",
                delay: 0.3
            }
        );
    }, []);
    

    return (
        <div className='relative h-screen w-full overflow-x-hidden px-4 sm:px-6 md:px-8 lg:px-10 pt-20 md:pt-24'>
            <video src={video} autoPlay muted loop className="absolute inset-0 w-full h-full object-cover" />
            <div className='relative h-full w-full'>
                <div>
                    <h1 className="text-[110px] sm:text-[120px] md:text-[160px] lg:text-[200px] text-white font-['zentry'] absolute top-0 leading-none">MODERN</h1>
                    <p ref={loremRef} className="text-white font-['thinn'] text-sm sm:text-base leading-tight absolute top-25 sm:top-30 md:top-40 lg:top-50 max-w-xs sm:max-w-lg">Call of Duty throws you into relentless combat where every second matters. Dominate the battlefield with brutal firepower, tactical movement, and nonstop action as elite soldiers clash in high-stakes, all-out warfare.</p>
                </div>
                <h1 className="text-[110px] sm:text-[120px] md:text-[160px] lg:text-[200px] text-white font-['zentry'] absolute bottom-0 right-0 leading-tight">COMBAT</h1>
            </div>
        </div>
    )
}

export default Hero