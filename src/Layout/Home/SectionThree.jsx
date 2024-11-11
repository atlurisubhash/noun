// components/SectionThree.js
import React, { useEffect, useRef } from 'react';
import { scrollToBottom } from 'react-scroll/modules/mixins/animate-scroll';

export const SectionThree = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loadGsap = async () => {
        try {
          const { gsap } = await import('gsap');
          const { ScrollTrigger } = await import('gsap/ScrollTrigger');
          gsap.registerPlugin(ScrollTrigger);

          const cards = gsap.utils.toArray('.card');

          // Pin the container while scrolling through all the cards
          ScrollTrigger.create({
            trigger: containerRef.current,
            pin: true,
            start: 'top top',
            end: 'top bottom',
            scrub: true,
            snap: 1 / cards.length, // Snap to each card as the user scrolls
            ease: 'none',
            markers: true,
          });

          // Animate each card to show one at a time with overlapping previous cards
          cards.forEach((card, i) => {
            gsap.fromTo(
              card,
              { zIndex: i },
              {
                zIndex: i + 1,
                scrollTrigger: {
                  trigger: card,
                  start: 'top center', // Ensure animation starts after section pins
                  end: 'bottom center',
                  scrub: true,
                  toggleActions: 'play none none reverse',
                },
              }
            );
          });
        } catch (error) {
          console.error('Error loading GSAP modules:', error);
        }
      };

      loadGsap();
    }
  }, []);

  return (
    <div ref={containerRef} className="snap max-w-screen-lg mx-auto px-6 py-16 h-screen overflow-hidden bg-black">
      
      <div className="sticky top-0 bg-white z-10 p-4 shadow-md">
        <h2 className="text-4xl font-bold text-center">Our Services</h2>
      </div>

      
      <div className="mt-8 space-y-16 relative h-screen">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="card absolute top-0 left-0 w-full h-full bg-yellow-300 p-6 rounded-lg shadow-lg flex items-center justify-center"
            style={{ zIndex: i }}
          >
            <h3 className="text-4xl font-semibold">Card {i + 1}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
