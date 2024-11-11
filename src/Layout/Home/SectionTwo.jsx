import gsap from 'gsap';

export const SectionTwo = () => {
    return(
     <section className="panel pt-[7.5rem] pb-[7.5rem] snap-start w-screen content-center lg:text-[7.5rem] sm:text-[3.75rem] xs:text-[3.75rem] bg-black text-white min-w-[30rem] flex flex-col justify-center items-center"> 
    
        <div className="w-screen h-full px-4 py-20 sm:px-6 sm:py-24 md:px-8 md:py-32 lg:px-10 lg:py-40 bg-black justify-center items-center flex">
            <div className="w-full h-full justify-center items-center gap-[0.15625rem] flex max-w-[75rem]">
                <div className="w-full h-full text-center text-white font-normal font-['Neue Montreal'] leading-[120%] text-xs/[3.75rem]">We create bespoke designs with three things in mind</div>
            </div>
        </div>
    
        <div className="w-screen h-auto flex-col justify-center items-center gap-[3rem] inline-flex">

        <div className="self-stretch h-auto flex-col justify-between items-center gap-[1.875rem] inline-flex">
            <div className="self-stretch px-10 justify-between items-center inline-flex">
                <div className="w-full sm:w-96 flex-col justify-start items-start gap-8 inline-flex">
                    <div className="self-stretch text-white text-5xl font-normal font-['Neue Montreal'] leading-[3.6rem]">01/</div>
                    <div className="self-stretch h-auto flex-col justify-start items-start gap-6 flex">
                    <div className="self-stretch h-auto flex-col justify-start items-start gap-6 flex">
                        <div className="self-stretch text-white text-6xl font-normal font-['Neue Montreal'] leading-[5rem]">Beauty</div>
                    </div>
                    </div>
                </div>
                <div className="w-[424px] sm:w-[26.5rem] text-white text-[1.75rem] font-normal font-['Neue Montreal'] leading-[2.1rem]">Developing stunning one-of-a-kind design Identity that catches people’s eyes and brings your brand to life everywhere.</div>
                </div>
                <div className="self-stretch h-[0px] border-4 border-[#d9ff00]"></div>
            </div>


            <div className="self-stretch h-auto flex-col justify-between items-center gap-[1.875rem] inline-flex">
                <div className="self-stretch px-10 justify-between items-center inline-flex">
                <div className="w-full sm:w-96 flex-col justify-start items-start gap-8 inline-flex">
                    <div className="self-stretch text-white text-5xl font-normal font-['Neue Montreal'] leading-[3.6rem]">02/</div>
                    <div className="self-stretch h-auto flex-col justify-start items-start gap-6 flex">
                    <div className="self-stretch h-auto flex-col justify-start items-start gap-6 flex">
                        <div className="self-stretch text-white text-6xl font-normal font-['Neue Montreal'] leading-[5rem]">Thought</div>
                    </div>
                    </div>
                </div>
                <div className="w-[424px] sm:w-[26.5rem] text-white text-[1.75rem] font-normal font-['Neue Montreal'] leading-[2.1rem]">As a design studio, we love to deliver meaningful and intuitive designs that build trust with your target audience.</div>
                </div>
                <div className="self-stretch h-[0px] border-4 border-[#d9ff00]"></div>
            </div>


            <div className="self-stretch h-auto flex-col justify-between items-center gap-[1.875rem] inline-flex">
                <div className="self-stretch px-10 justify-between items-center inline-flex">
                <div className="w-full sm:w-96 flex-col justify-start items-start gap-8 inline-flex">
                    <div className="self-stretch text-white text-5xl font-normal font-['Neue Montreal'] leading-[3.6rem]">03/</div>
                    <div className="self-stretch h-auto flex-col justify-start items-start gap-6 flex">
                    <div className="self-stretch h-auto flex-col justify-start items-start gap-6 flex">
                        <div className="self-stretch text-white text-6xl font-normal font-['Neue Montreal'] leading-[5rem]">Impact</div>
                    </div>
                    </div>
                </div>
                <div className="w-[424px] sm:w-[26.5rem] text-white text-[1.75rem] font-normal font-['Neue Montreal'] leading-[2.1rem]">Designing tailor made solutions that resonate with your customers and drives them to act.</div>
                </div>
                <div className="self-stretch h-[0px] border-4 border-[#d9ff00]"></div>
            </div>
        </div>
    </section>  
    );
}


