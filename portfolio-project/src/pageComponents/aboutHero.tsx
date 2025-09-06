import  { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DecryptedText from '@/effects/Text/DecryptedText';
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function AboutHero() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const imageRef = useRef(null);
  const leftQuoteRef = useRef(null);
  const rightQuoteRef = useRef(null);
  const buttonRef = useRef(null);
  const fixedTextRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const image = imageRef.current;
    const leftQuote = leftQuoteRef.current;
    const rightQuote = rightQuoteRef.current;
    const button = buttonRef.current;
    const fixedText = fixedTextRef.current;

    // Set initial states
    gsap.set([subtitle, title, leftQuote, rightQuote, button], {
      opacity: 0,
      y: 50
    });

    gsap.set(image, {
      y: '100vh', // Start below viewport
      scale: 0.5,
      opacity: 0
    });

    // Phase 1: Initial text reveals (text stays fixed in position)
    const initialTl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
        markers: false
      }
    });

    initialTl.to(subtitle, {
      opacity: 1,
      y: 0,
      duration: 0.2,
      ease: "power2.out"
    })
    .to(title, {
      opacity: 1,
      y: 0,
      duration: 0.3,
      ease: "power2.out"
    }, "-=0.1")
    .to([leftQuote, rightQuote], {
      opacity: 1,
      y: 0,
      duration: 0.2,
      stagger: 0.05,
      ease: "power2.out"
    }, "-=0.1")
    .to(button, {
      opacity: 1,
      y: 0,
      duration: 0.2,
      ease: "power2.out"
    }, "-=0.1");

    // Phase 2: Image scrolls up and overlaps while text zooms out
    const overlapTl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 50%",
        end: "center top",
        scrub: 1.2,
        markers: false
      }
    });

    overlapTl.to(image, {
      y: 0, // Move to center
      scale: 2.8, // Grow large
      opacity: 1,
      duration: 1,
      ease: "power2.inOut"
    })
    .to(fixedText, {
      scale: 0.6, // Text zooms out but stays in position
      opacity: 0, // Hide text completely instead of just reducing opacity
      duration: 1,
      ease: "power2.inOut"
    }, 0) // Start at the same time
    .to([leftQuote, rightQuote, button], {
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      ease: "power2.inOut"
    }, 0.1);

    // Phase 3: Move image out of view when container ends
    const exitTl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "bottom 50%",
        end: "bottom top",
        scrub: 1,
        markers: false
      }
    });

    exitTl.to(image, {
      y: '-100vh', // Move image up and out of view
      opacity: 0,
      duration: 1,
      ease: "power2.inOut"
    })
    .to(fixedText, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut"
    }, 0);

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-black font-future text-white overflow-hidden">
      <div className="h-screen flex items-center justify-center">
        <p className="text-white/60 text-lg">"I always told you, you were special."</p>
      </div>
      
      <div 
        ref={containerRef}
        className="h-[300vh] relative" 
      >
        <div 
          ref={fixedTextRef}
          className="fixed inset-0 flex flex-col items-center justify-center px-8 z-10"
        >
       
          <div 
            ref={subtitleRef}
            className="text-white/60 text-sm tracking-[0.3em] mb-8 font-light"
          >
            FULLSTACK DEVELOPER
          </div>

      
          <div 
            ref={titleRef}
            className="text-center mb-16"
          >
            <h1 className="text-7xl md:text-9xl font-black tracking-tight leading-none">
              IYANU<br />
              AHMED <DecryptedText text="(JACX)" />
            </h1>
          </div>

     
          <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl mb-16 gap-8">
            <div 
              ref={leftQuoteRef}
              className="text-white/80 text-sm tracking-wider font-light text-center lg:text-left"
            >
              THE FUTURE IS ALREADY HERE<br />
            </div>
            
            <div 
              ref={rightQuoteRef}
              className="text-white/80 text-sm tracking-wider font-light text-center lg:text-right"
            >
              IT'S NOT JUST EVENLY DISTRIBUTED<br />
              
            </div>
          </div>
        </div>
        <div 
          ref={imageRef}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 rounded-2xl overflow-hidden"
          style={{
            width: '200px',
            height: '250px',
            background: 'linear-gradient(45deg, #8B4513, #D2691E, #CD853F)',
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div 
                className="w-32 h-40 rounded-full opacity-80"
                style={{
                  background: 'linear-gradient(180deg, #654321 0%, #8B4513 50%, #A0522D 100%)',
                  transform: 'rotate(-5deg)'
                }}
              />
              <div className="absolute inset-0">
                <div className="absolute top-4 left-4 w-8 h-2 bg-cyan-400 opacity-70 blur-sm rounded transform rotate-12"></div>
                <div className="absolute top-8 right-6 w-6 h-3 bg-blue-300 opacity-60 blur-sm rounded transform -rotate-45"></div>
                <div className="absolute bottom-12 left-8 w-4 h-6 bg-cyan-300 opacity-80 blur-sm rounded transform rotate-30"></div>
                <div className="absolute bottom-8 right-4 w-10 h-2 bg-blue-400 opacity-70 blur-sm rounded transform -rotate-15"></div>
                <div className="absolute top-16 left-12 w-3 h-8 bg-cyan-200 opacity-60 blur-sm rounded transform rotate-60"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen flex items-center text-center justify-center">
        <p className="text-white/60 text-lg px-10 font-future">
        Imagination is where I start — sometimes that means coding full-stack apps, other times it’s sketching cartoons and creating new worlds. To me, building software and making art are the same thing: turning ideas into something real.

Whatever you need, I dey for you.</p>
      </div>
    </div>
  );
}