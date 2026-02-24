import React from "react";
import ps5 from "../assets/images/ps5.svg";
import xbox from "../assets/images/xbox.svg";
import steam from "../assets/images/steam.svg";
import kid from "../assets/images/kid.png";
// import kidnap from "../assets/images/kidnap.png";
import pngegg from "../assets/images/pngegg.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FinalCard = () => {
  const badaRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      badaRef.current,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: badaRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }, []);

  return (
    <div className="relative h-[60vh] md:h-[83vh] w-full overflow-x-hidden flex items-center px-1 md:px-10 py-8">
      <div className="bg-black h-full w-full rounded-lg relative flex flex-col items-center py-28 overflow-hidden">
        <h1 className='text-white text-xs font-["thinn"]'>JOIN CALL OF DUTY</h1>
        <h1
          ref={badaRef}
          className='text-white font-["zentry"] text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] text-center leading-none md:leading-[0.82em] tracking-[-0.010em] mt-8 max-w-xs  md:max-w-3xl'
        >
          Build the foundation for dominate the warfare.
        </h1>
        <div className="w-full p-2 flex items-center gap-2 md:gap-8 mt-8 justify-center">
          <img
            src={ps5}
            className="w-24 h-6 md:w-44 md:h-14 rounded-lg border px-5 border-gray-200 shadow-xl invert brightness-0"
            alt=""
          />
          <img
            src={xbox}
            className="w-24 h-6 md:w-44 md:h-14 rounded-lg border px-5 border-gray-200 shadow-xl invert brightness-0"
            alt=""
          />
          <img
            src={steam}
            className="w-24 h-6 md:w-44 md:h-14 rounded-lg border px-5 border-gray-200 shadow-xl invert brightness-0"
            alt=""
          />
        </div>
        <div className="absolute inset-0 h-full w-full hidden md:block">
          <img
            src={pngegg}
            alt=""
            className="absolute bottom-0 left-[-2%] w-[26rem] h-auto"
          />
          <img
            src={kid}
            alt=""
            className="absolute bottom-0 right-[-5%] w-[35rem] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default FinalCard;
