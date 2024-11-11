import React from 'react'
//import banner from "../../assets/Images/banner.jpg"
//import rightImage from "../../assets/Images/right1.jpg"

export const Works = () => {
    return(
        <section id="works"  className="panel snap-start w-screen h-screen content-center lg:text-[8.7vw] bg-black text-white"> 
              <>
    <div id="noun-recent-works">
    <div className="container mx-auto px-4">
        <div className="row justify-center text-center">
            <div className="lg:w-2/3">
                <h2 className="mb-3 text-lg font-bold">Noun Recent Works</h2>
                <p className="text-base">We’re not here to create designs or logos that look good; we’re here to craft brands that connect deeply with your audience. From purposeful positioning to iconic visuals, we guide you through every stage to build a brand with a story that inspires the right people.
                    Let’s face it, first impressions matter. Your brands identity  an opportunity to wow your audience, so why choose bad design? Brands win over fans when they’re brave enough to go beyond their creative comfort zone.</p>
            </div>
        </div> 
        <div className="row justify-center">
           <div className="lg:w-5/6">
            <div className="row justify-between mb-3">
                <div className="text-3xl lg:w-1/16">Brand</div>
                <div className="text-3xl lg:w-1/6  text-right">See project</div>
            </div>
            <div className="row">
                <div className="lg:w-full mb-5">
                    <img src={""} alt="Banner" className="w-full h-auto"/>
                </div>
                <div className="text-center mb-5"><button className="btn bg-white rounded-lg px-8 py-2 font-bold shadow-lg">Work with us</button></div>
            </div>
           </div>
        </div>
    </div>
</div>
<div id="great-work">
    <div className="container mx-auto px-4">
       
        <div className="row justify-center mt-3 mb-5">
            <div className="lg:w-5/6">
                <div className="row justify-between items-center">
                    <div className="lg:w-1/2">
                        <h2 className="text-lg font-bold">Great Work for Great Clients</h2>
                        <p className="text-base ">We put people first, understanding that a well-crafted product significantly impacts the lives of those who use it. By empowering users, we’re able to solve unique problems, accelerate progress and unlock potential for our clients.
                            Our independent spirit drives our creative energy and approach to technology, allowing us to ensure quality and consistently deliver outstanding outcomes.
                            At our branding studio, we believe that every brand has a unique story waiting to be told. Our innovative approach combines creativity and strategy to create impactful identities that connect with your audience.</p>
                        <button className="btn bg-white rounded-lg px-8 py-2 font-bold shadow-lg">Work with us</button>
                    </div>
                    <div className="lg:w-5/12">
                        <img src={""} alt="Discover Call" className="w-full h-auto"/>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</div>
<div id="make-your-brand">
    <div className="container mx-auto px-4">
        <div className="row justify-center mb-5 text-center">
            <div className="lg:w-2/3">
                <h2 className="text-lg font-bold">Let's make your own Brand.</h2>
                <p className="mb-5 text-base">Ready to elevate your brand? Let's create something extraordinary together. Contact us now!</p>
                <button className="btn bg-white rounded-lg px-8 py-2 font-bold shadow-lg">Work with us</button>
            </div>
        </div>
     
    </div> 
</div>
</>
       </section>  
       );
    
}