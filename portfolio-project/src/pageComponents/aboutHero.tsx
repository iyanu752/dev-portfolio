import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DecryptedText from '@/effects/Text/DecryptedText';

gsap.registerPlugin(ScrollTrigger);

export default function AboutHero() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const leftQuoteRef = useRef(null);
  const rightQuoteRef = useRef(null);
  const buttonRef = useRef(null);
  const fixedTextRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const leftQuote = leftQuoteRef.current;
    const rightQuote = rightQuoteRef.current;
    const button = buttonRef.current;
    const fixedText = fixedTextRef.current;

    // Set initial states
    gsap.set([subtitle, title, leftQuote, rightQuote, button], {
      opacity: 0,
      y: 50,
    });

    // Phase 1: Text fade-in
    const initialTl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 1,
      },
    });

    initialTl
      .to(subtitle, {
        opacity: 1,
        y: 0,
        duration: 0.2,
        ease: 'power2.out',
      })
      .to(
        title,
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: 'power2.out',
        },
        '-=0.1'
      )
      .to(
        [leftQuote, rightQuote],
        {
          opacity: 1,
          y: 0,
          duration: 0.2,
          stagger: 0.05,
          ease: 'power2.out',
        },
        '-=0.1'
      )
      .to(
        button,
        {
          opacity: 1,
          y: 0,
          duration: 0.2,
          ease: 'power2.out',
        },
        '-=0.1'
      );

    // Phase 2: Parallax shrink effect for text
    gsap.to(fixedText, {
      scrollTrigger: {
        trigger: container,
        start: 'top 50%',
        end: 'center top',
        scrub: 1.2,
      },
      scale: 0.8,
      opacity: 0.6,
      ease: 'power2.inOut',
    });

    // Phase 3: Fade text out near end
    gsap.to([fixedText, leftQuote, rightQuote, button], {
      scrollTrigger: {
        trigger: container,
        start: 'bottom 50%',
        end: 'bottom top',
        scrub: 1,
      },
      opacity: 0,
      ease: 'power2.inOut',
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-black font-future text-white overflow-hidden">
      {/* Top quote */}
      <div className="h-screen flex items-center justify-center">
        <p className="text-white/60 text-lg">
          "I always told you, you were special."
        </p>
      </div>

      {/* Hero container */}
      <div ref={containerRef} className="h-[250vh] relative">
        <div
          ref={fixedTextRef}
          className="fixed inset-0 flex flex-col items-center justify-center px-8 z-10"
        >
          {/* Subtitle */}
          <div
            ref={subtitleRef}
            className="text-white/60 text-sm tracking-[0.3em] mb-8 font-light"
          >
            FULLSTACK DEVELOPER
          </div>

          {/* Title */}
          <div ref={titleRef} className="text-center mb-16">
            <h1 className="text-7xl md:text-9xl font-black tracking-tight leading-none">
              IYANU
              <br />
              AHMED <DecryptedText text="(JACX)" />
            </h1>
          </div>

          {/* Quotes */}
          <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl mb-16 gap-8">
            <div
              ref={leftQuoteRef}
              className="text-white/80 text-sm tracking-wider font-light text-center lg:text-left"
            >
              THE FUTURE IS ALREADY HERE
            </div>

            <div
              ref={rightQuoteRef}
              className="text-white/80 text-sm tracking-wider font-light text-center lg:text-right"
            >
              IT&apos;S NOT JUST EVENLY DISTRIBUTED
            </div>
          </div>
        </div>
      </div>

      {/* Closing section */}
      <div className="h-screen flex items-center text-center justify-center">
        <p className="text-white/60 text-lg px-10 font-future max-w-4xl leading-relaxed">
          Imagination is where I start — sometimes that means coding full-stack
          apps, other times it’s sketching cartoons and creating new worlds. To
          me, building software and making art are the same thing: turning ideas
          into something real.
        </p>
      </div>
    </div>
  );
}
