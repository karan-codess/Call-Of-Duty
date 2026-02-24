import React from 'react'
import MW2 from '../assets/images/MW2.webp'
import MW3 from '../assets/images/MW3.png'
import CODW from '../assets/images/CODW.mp4'
import CODMW from '../assets/video/CODMW.mp4'
import CODBO7 from '../assets/video/CODBO7.mp4'
import {useEffect,useRef} from 'react'
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AllGames = () => {

    const firstRef = useRef(null);
    const secondRef = useRef(null);
    const thirdRef = useRef(null);
    const fourthRef = useRef(null);
    const fifthRef = useRef(null);

    useEffect(() => {

        gsap.fromTo(firstRef.current, 
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
                ease: "power4.out",
                scrollTrigger: {
                    trigger: firstRef.current,
                    start: "top 90%",
                    end: "top 20%", 
                    toggleActions: "play none none reverse",
                    
                }
            }
        );

        gsap.fromTo(secondRef.current,
            {
                opacity:0,
                y:40
            },
            {
                opacity:1,
                y:0,
                duration:0.9,
                ease:"power3.out",
                scrollTrigger:{
                    trigger:secondRef.current,
                    start:"top 80%",
                    end:"top 20%",
                    toggleActions: "play none none reverse",
                }
            }
        );
        gsap.fromTo(thirdRef.current,
            {
                opacity:0,
                y:40
            },
            {
                opacity:1,
                y:0,
                duration:0.9,
                ease:"power3.out",
                scrollTrigger:{
                    trigger:thirdRef.current,
                    start:"top 70%",
                    end:"top 20%",
                    toggleActions: "play none none reverse",
                }
            }
        );

        gsap.fromTo(fourthRef.current,
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
        gsap.fromTo(fifthRef.current,
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
                    trigger:fifthRef.current,
                    start:"top 90%",
                    end:"top 20%",
                    toggleActions: "play none none none",
                }
            }
        )
    }, []);

    return (
        <div className='relative min-h-screen w-screen overflow-x-hidden px-3 md:px-16 lg:px-20 pt-28 flex flex-col '>
            <h1 className="text-black font-['thinn'] leading-tight max-w-xl max-sm:px-5" >Explore Call Of Duty's All Games</h1>
            <p className="text-gray-500 font-['thinn'] leading-tight max-sm:px-5 max-w-xs md:max-w-xl">From Warzone’s massive battles to Modern Warfare’s tactical missions, every game delivers intense combat, epic weapons, and nonstop adrenaline.</p>

            <div  className='mt-30 md:mt-40 w-full h-[600px] md:h-[500px]'>
                <div ref={firstRef} className='rounded-2xl bg-[#D3D3E5] flex max-md:flex-col w-full h-full overflow-hidden '>
                    <div className='flex flex-col gap-1 md:gap-4 w-full md:w-[43%] px-10 h-[300px] md:h-full py-12'>
                        <h1 className="text-black text-6xl font-['zentry'] leading-tight max-w-xl" >COD : Modern Warfare 2</h1>
                        <p className="text-gray-600 text-sm font-['thinn'] leading-tight max-w-sm">The second game in the Modern Warfare series, featuring intense multiplayer action and a compelling single-player campaign.</p>
                    </div>
                    <div className='w-full md:w-[57%] h-[300px] md:h-full'>
                        <img src={MW2} alt="Modern Warfare 2" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>

            <div className='h-[1200px] md:h-[900px] w-full mt-10'>
                <div className='flex max-md:flex-col w-full h-full gap-8  '>
                    <div ref={secondRef} className='rounded-2xl bg-[#D3D3E5] h-1/2 md:h-full w-full md:w-[49%] overflow-hidden'>
                        <div className='flex flex-col'>
                            <div className='h-[300px] md:h-[350px] px-10 py-12 w-full'>
                                <h1 className="text-black text-6xl font-['zentry'] leading-tight max-w-xl" >COD : Modern Warfare 3</h1>
                                <p className="text-gray-600 text-sm font-['thinn'] leading-tight max-w-xs">The third game in the Modern Warfare series, featuring intense multiplayer action and a compelling single-player campaign.</p>
                            </div>
                            <div className='h-[300px] md:h-[550px] w-full'>
                                <img src={MW3} alt="Modern Warfare 3" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                    <div ref={thirdRef} className='rounded-2xl bg-[#D3D3E5] h-1/2 md:h-full w-full md:w-[49%] overflow-hidden'>
                        <div className='flex flex-col'>
                            <div className='h-[250px] md:h-[350px] px-10 py-12 w-full'>
                                <h1 className="text-black text-6xl font-['zentry'] leading-tight max-w-xl" >COD : Warzone</h1>
                                <p className="text-gray-600 text-sm font-['thinn'] leading-tight max-w-xs">The third game in the Modern Warfare series, featuring intense multiplayer action and a compelling single-player campaign.</p>
                            </div>
                            <div className='h-[350px] md:h-[550px] w-full'>
                                <video autoPlay muted loop src={CODW} alt="Warzone" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div ref={fifthRef} className='mt-12'>
                <h1 className="text-black font-['thinn'] font-semibold leading-tight max-sm:px-5 max-w-xl" >Explore COD's Most Popular Games</h1>
                <p className="text-gray-600 text-xs font-['thinn'] leading-tight max-sm:px-5 max-w-lg mt-2" >Dive into the action with Call of Duty’s fan-favorite titles. Experience fast-paced combat, iconic maps, and legendary weapons in every game.</p>
            </div>
            <div className='h-[1200px] md:h-[500px] w-full mt-16'>
                <div className='flex max-md:flex-col w-full h-full gap-8  '>
                    <div className='rounded-2xl bg-[#D3D3E5] h-1/2 w-full md:h-full md:w-[49%] overflow-hidden'>
                        <div className='relative w-full h-full'>
                            <video autoPlay muted loop src={CODMW} alt="Modern Warfare" className="w-full h-full object-cover" />
                            <div className='px-10 py-12 w-full absolute top-0'>
                                <h1 className="text-white text-6xl font-['zentry'] leading-tight max-w-xl" >COD : Modern Warfare</h1>
                                <p className="text-white text-sm font-['thinn'] leading-tight max-w-xs">The third game in the Modern Warfare series, featuring intense multiplayer action and a compelling single-player campaign.</p>
                            </div>
                        </div>
                    </div>
                    <div className='rounded-2xl bg-[#D3D3E5] h-1/2 w-full md:h-full md:w-[49%] overflow-hidden'>
                        <div className='relative w-full h-full'>
                            <video autoPlay muted loop src={CODBO7} alt="Black Ops 7" className="w-full h-full object-cover" />
                            <div className='px-10 py-12 w-full absolute top-0'>
                                <h1 className="text-white text-6xl font-['zentry'] leading-tight max-w-xl" >COD : Black Ops 7</h1>
                                <p className="text-white text-sm font-['thinn'] leading-tight max-w-xs">The third game in the Black Ops series, featuring intense multiplayer action and a compelling single-player campaign.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AllGames