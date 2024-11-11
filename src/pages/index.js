

import Head from 'next/head';
import { Header } from '@/components';
import { Footer } from '@/components';
import { HomeHero, SectionThree, SectionTwo, SectionFour, Designer, Works, TextScrollSection,clients } from '@/Layout/Index';

//import ScrollTrigger from 'gsap/ScrollTrigger';




// Register the GSAP ScrollTrigger plugin
//gsap.registerPlugin(ScrollTrigger);

const Home = () => {
 /* useEffect(() => {
    // GSAP ScrollTrigger for snapping and slide effect
    /* gsap.utils.toArray("section").forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top", 
        end: "bottom top",
        snap: 1, // Snap to each section completely
        scrub: true, // Smooth scroll between sections
        pin: false, // No pinning, just slide through sections
      });
    });
  }, []);  */ 
 
  return (
    <div>
      <Head>
        <title>Noun</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="  w-auto ">
        <Header />  
        <div className="  ">
          {/* Section Components */}
          <HomeHero />
          <SectionTwo />
          <SectionThree />
          <SectionFour />
          <Works />
          <Designer />
          <TextScrollSection />
          <clients />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Home;
