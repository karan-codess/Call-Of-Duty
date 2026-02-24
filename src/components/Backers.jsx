import React from "react";
import Activision from "../assets/images/activision.png";
import Treyarch from "../assets/images/treyarch.png";
import Sledgehammer from "../assets/images/shg.png";
import InfinityWard from "../assets/images/infinity.png";
import HighMoon from "../assets/images/highmoon.png";
import DigitalLegends from "../assets/images/digital.png";
import Raven from "../assets/images/raven.png";
import SolidStateStudio from "../assets/images/ss.png";
import Demonware from "../assets/images/demon.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Back = [
  {
    name: "PARTNERS",
    pic: Activision,
    naam: "ACTIVISION",
  },
  {
    name: "PARTNERS",
    pic: Treyarch,
    naam: "TREYARCH",
  },
  {
    name: "PARTNERS",
    pic: Sledgehammer,
    naam: "SLEDGEHAMMER GAMES",
  },
  {
    name: "PARTNERS",
    pic: InfinityWard,
    naam: "INFINITY WARD",
  },
  {
    name: "PARTNERS",
    pic: HighMoon,
    naam: "HIGH MOON STUDIOS",
  },
  {
    name: "PARTNERS",
    pic: DigitalLegends,
    naam: "DIGITAL LEGENDS",
  },
  {
    name: "PARTNERS",
    pic: Raven,
    naam: "RAVEN SOFTWARE",
  },
  {
    name: "PARTNERS",
    pic: SolidStateStudio,
    naam: "SOLID STATE STUDIOS",
  },
  {
    name: "PARTNERS",
    pic: Demonware,
    naam: "DEMONWARE",
  },
];

const Backers = () => {
  const largeRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      largeRef.current,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: largeRef.current,
          start: "top 90%",
          end: "top 20%",
          toggleActions: "play none none none",
        },
      },
    );
  }, []);
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-black flex items-center px-4 md:px-28 pt-20 md:pt-40 md:pb-20">
      <div className="flex flex-col md:flex-row h-full w-full overflow-x-hidden">
        <div className="flex items-center h-full w-full md:w-[45%] py-4 md:py-8 mb-16">
          <p
            ref={largeRef}
            className="text-gray-500 font-['thinn'] leading-tight text-sm md:text-base px-4 md:px-12 max-w-xs md:max-w-lg"
          >
            <span className="text-white">Backers fuel every mission and support </span> the team. Their guidance, resources, and dedication build legendary battles. Honor, always.
          </p>
        </div>
        <div className="p-1 h-full w-full md:w-[55%] flex flex-col py-8">
          <div className="flex flex-col max-md:items-center gap-4">
            {Back.map((item, index) => (
              <div key={index}>
                <div className="flex gap-4">
                  <div>
                    <p className="text-white font-['thinn'] text-xs ">
                      {item.name}
                    </p>
                  </div>
                  <div>
                    <img
                      src={item.pic}
                      alt={item.name}
                      className="w-40 md:w-56 h-auto object-contain md:hidden block"
                    />
                  </div>
                  <div>
                    <h2 className="text-white font-['zentry'] text-6xl leading-[0.7] md:block hidden">
                      {item.naam}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backers;
