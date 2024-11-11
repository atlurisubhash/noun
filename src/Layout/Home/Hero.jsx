import React, { useEffect, useRef } from 'react';
import { FlowerLogo } from '../../components/Icons';
import gsap from 'gsap';
import { CustomEase } from 'gsap/dist/CustomEase';

gsap.registerPlugin(CustomEase);
CustomEase.create('cubic-text', '0.25, 1, 0.5, 1');

export const HomeHero = () => {
    const heroInfiniteRef = useRef(null);

  useEffect(() => {
    const titles = document.querySelectorAll('.h_title');
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    titles.forEach((title, index) => {
      const el = title.querySelectorAll('span span');
      const delay = index * 0.08;

      tl.to(
        el,
        {
          y: 0,
          duration: 1.5,
          ease: 'cubic-text',
        },
        delay
      );
    });

    tl.to(
        heroInfiniteRef?.current,
        {
          marginLeft: 0,
          marginRight: 0,
          opacity: 1,
          ease: 'power1.out',
        },
        1.2
      );


    return () => {};
  }, []);

  return (
    <section id="hero" className=" min-h-screen pt-[120px] pb-[90px] lg:py-[180px] content-center max-h-screen snap-start relative">
      <div className="h_container font_apoc flex flex-col items-center  px-2 pb-[20vw]  lg:pb-[4vw]">
        <h1 className="h_title  relative w-full text-center text-[15vw] font-light uppercase leading-[90%] lg:text-[8.7vw] ">
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className=" inline-block  translate-y-full pb-1.5 pt-6 will-change-transform ">
              Brand Design Agency 
            </span>
          </span>
          
          <span className=" -mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className="flex flex-nowrap inline-block items-baseline translate-y-full pb-1.5 pt-6 will-change-transform w-64 [&>svg]:w-[11vw] lg:[&>svg]:w-[6.9vw]" >
                F<FlowerLogo />R&nbsp;
            </span>
          </span>
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
              Fearlessly
            </span>
          </span>
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
              &nbsp;
            </span>
          </span>
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
              Bold&nbsp;
            </span>
          </span>
        </h1>
        <h1 className="h_title relative  w-full text-center text-[15vw] font-light uppercase leading-[90%] lg:text-[8.7vw] ">
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className=" inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
              People &&nbsp;
            </span>
          </span>
        </h1>
       
        <h1 className="h_title relative flex w-full flex-col items-center justify-center text-center text-[15vw]  font-light uppercase leading-[90%] lg:flex-row lg:text-[8.7vw]">
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className="inline-block  translate-y-full pb-1.5 pt-6  font-medium  text-orange will-change-transform">
              Brands
            </span>
          </span>
          <div
            ref={heroInfiniteRef}
            className="font_aeonik absolute bottom-[-25vw] left-[35%] ml-10 -mr-10 h-8  w-40 overflow-hidden rounded-full border border-black text-xs font-normal uppercase  opacity-0  lg:relative lg:left-8 lg:bottom-5 lg:right-[1vw] lg:h-14 lg:w-[16vw] lg:text-xl  lg:leading-10 "
          >
            <div className="group flex h-full cursor-pointer items-center whitespace-nowrap">
              <span className=" group-hover:pause animate-loopL">
                Show Reel 2024© Show Reel 2024©&nbsp;
              </span>
              <span className=" group-hover:pause animate-loopL">
                Show Reel 2024© Show Reel 2024©&nbsp;
              </span>
            </div>
          </div>
        </h1>
        
        {/* <button className="h_button  mt-8 px-6 py-3 text-white bg-black border-2 border-black rounded-full uppercase font-apoc tracking-widest text-sm">Work with us</button> */}
      </div>
    </section>
  );
};