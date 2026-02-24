import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AnimatedImage = () => {
    const headingRef = useRef(null);

    useEffect(() => {
        // Heading ke andar ke saare letters (.char) ko select karo
        const chars = headingRef.current.querySelectorAll('.char');

        gsap.fromTo(chars, 
            { 
                opacity: 0, 
                y: 100,           // 100px niche se aayega
                rotateX: -90,      // 3D rotation effect
            }, 
            { 
                opacity: 1, 
                y: 0, 
                rotateX: 0,
                duration: 1, 
                stagger: 0.02,     // Letters ke beech ka gap
                ease: "power4.out", // Smooth professional ending
                delay: 0.2
            }
        );
    }, []);

    // Text ko letters mein todne ka function
    const splitText = (text) => {
        return text.split("").map((char, i) => (
            <span key={i} className="char inline-block overflow-hidden">
                {char === " " ? "\u00A0" : char}
            </span>
        ));
    };

    return (
        <div className='relative min-h-screen w-full flex flex-col items-center text-center'>
            
            {/* Headline Section */}
            <div className="overflow-hidden p-2"> 
                <h1 
                    ref={headingRef}
                    className='text-black text-[50px] sm:text-[70px] md:text-[80px] lg:text-[100px] font-["zentry"] w-full max-w-xs md:max-w-7xl leading-none tracking-[-0.02em] mt-10 perspective-1000'
                >
                    {/* Humne line-break (<br/>) ko maintain karne ke liye text ko do parts mein split kiya */}
                    <div className="block">
                        {splitText("Human life powers AI")}
                    </div>
                    <div className="block">
                        {splitText("and AI expands human potential.")}
                    </div>
                </h1>
            </div>

            {/* Baaki ka content... */}
        </div>
    );
}

export default AnimatedImage;