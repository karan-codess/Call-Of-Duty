import React from 'react'
import bye from '../assets/video/bye1.mp4'
import hello from '../assets/images/hello.jpg'

import anime from '../assets/video/anime.mp4'

const Glance = () => {
    return (
        <div className='relative min-h-screen w-full overflow-x-hidden flex flex-col px-1 md:px-10 py-8 bg-black'>
            <h1 className='text-white text-xs font-["thinn"] px-4 '>OUR KEY METRICES</h1>
            <h1 className='text-white font-["zentry"] text-[60px] sm:text-[70px] md:text-[90px] lg:text-[110px] leading-none tracking-[-0.02em] mt-4 px-4'>CALL OF DUTY AT <br /> A GLANCE</h1>



            <div className='mt-20 md:w-[80%] w-full m-auto'>
                <div className='grid sm:grid-cols-6 sm:grid-rows-8 gap-6 md:gap-8 px-2 md:px-6 max-w-full'>
                    <div className="sm:col-span-3 sm:row-span-1"></div>
                    <div className='h-[400px] md:h-[800px] rounded-xl overflow-hidden sm:col-span-3 group sm:row-span-4'>
                        <div className='h-full relative overflow-hidden'>
                            <video autoPlay loop muted src={bye} className='w-full h-full object-cover'></video>
                            <div className=' h-full p-4 opacity-0 group-hover:opacity-100 absolute inset-0 transition-all duration-300 ease-out'>
                                <h1 className='text-white text-xs font-["thinn"]'>CURRENT ACTIVE USERS</h1>
                                <h1 className='text-white font-["zentry"] text-[60px] sm:text-[70px] md:text-[90px] lg:text-[110px] leading-none tracking-tight md:tracking-[-0.02em] mt-1'>650K+</h1>
                            </div>
                        </div>

                    </div>
                    <div className='sm:row-span-2 rounded-lg overflow-hidden group sm:col-span-3'>
                        <div className='h-full relative overflow-hidden'>
                            <video autoPlay loop muted src={anime} className='w-full h-full object-cover'></video>
                            <div className=' h-full p-4 absolute inset-0 opacity-0 group-hover:opacity-100 absolute inset-0 transition-all duration-300 ease-out flex flex-col justify-between'>
                                <h1 className='text-black text-xs font-["thinn"]'>TOTAL UNIT SALES</h1>
                                <h1 className='text-white font-["zentry"] text-[60px] sm:text-[70px] md:text-[90px] lg:text-[110px] leading-none tracking-tight md:tracking-[-0.02em] mt-1 mix-blend-difference'>500M+</h1>
                            </div>
                        </div>
                    </div>
                    <div className='sm:col-span-1 sm:row-span-2'></div>
                    <div className='sm:col-span-2 rounded-lg overflow-hidden sm:row-span-2'>
                        <img src={hello} className='w-full h-full object-cover' alt="" />
                    </div>
                    <div className='sm:col-span-2 rounded-lg overflow-hidden sm:row-span-2 border border-gray-600'>
                        <div className='bg-black h-full p-4 flex flex-col'>
                            <h1 className='text-white text-6xl font-["zentry"]'>FIRST PERSON SHOOTING GENRE</h1>
                            <div className='w-1/2 text-right py-7 ml-auto'>
                                <h3 className='text-white text-xs font-["thinn"]'>FAST PACED ACTION</h3>
                                <h3 className='text-white text-xs font-["thinn"]'>MULTIPLAYER</h3>
                                <h3 className='text-white text-xs font-["thinn"]'>TEAM DEATHMATCH</h3>
                                <h3 className='text-white text-xs font-["thinn"]'>WEAPON CUSTOMIZATION</h3>
                                <h3 className='text-white text-xs font-["thinn"]'>MULTIPLE MAPS</h3>
                                <h3 className='text-white text-xs font-["thinn"]'>SMOOTH MOVEMENT</h3>
                                <h3 className='text-white text-xs font-["thinn"]'>HIGH FPS</h3>
                            </div>
                        </div>
                    </div>
                    <div className='sm:col-span-1 sm:row-span-2'></div>
                    <div className='sm:col-span-3 h-[300px] md:h-[600px] sm:row-span-3 rounded-lg overflow-hidden'>
                        <div className='bg-[#5542FF] h-full p-4'>
                            <h1 className='text-black text-xs font-["thinn"]'>TREASURY</h1>
                            <h1 className='text-black font-["zentry"] text-[60px] sm:text-[70px] md:text-[90px] lg:text-[100px] leading-none tracking-[-0.02em] mt-1'>100M+</h1>
                        </div>
                    </div>
                    <div className='sm:col-span-3 rounded-lg overflow-hidden sm:row-span-1'>
                        <div className='bg-white h-full p-4'>
                            <h1 className='text-black text-xs font-["thinn"]'>VALUATION</h1>
                            <h1 className='text-black font-["zentry"] text-[60px] sm:text-[70px] md:text-[90px] lg:text-[100px] leading-none tracking-[-0.02em] mt-4'>$35B+</h1>
                        </div>
                    </div>
                    <div className='sm:col-span-3 sm:row-span-1'></div>



                </div>

            </div>

        </div>
    )
}

export default Glance