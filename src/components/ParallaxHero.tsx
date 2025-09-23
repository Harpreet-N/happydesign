import { useEffect, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useScrollAnimation, useParallaxScroll } from "./hooks/useScrollAnimation";

export function ParallaxHero() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Animation hooks
  //const nameAnimation = useScrollAnimation({ delay: 300, duration: 1000 });
  const subtitleAnimation = useScrollAnimation({ delay: 500, duration: 800 });
  const ctaAnimation = useScrollAnimation({ delay: 700, duration: 600 });
  const imageAnimation = useScrollAnimation({ delay: 400, duration: 1200 });
  
  // Parallax hooks
  const parallaxSlow = useParallaxScroll(0.1);
  const parallaxMedium = useParallaxScroll(0.15);
  const parallaxFast = useParallaxScroll(0.2);

  // Single source of truth for vertical start offset
  const BASE_Y = 50; // tweak to 160/200 if you want it lower

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsLoaded(true), []);

  // helper for additive translateY with parallax
  const ty = (mult = 0, extra = 0) =>
    `translateY(${BASE_Y + scrollY * mult + extra}px)`;

  // @ts-ignore
  return (
      <section
          id="hero-section"
          className="relative bg-yellow overflow-hidden py-6 md:py-20"
      >
        {/* Background Grid Pattern (shifted by BASE_Y) */}
        <div
            className="absolute left-0 right-0 bottom-0 opacity-5"
            style={{top: BASE_Y}}
        >
          <div className="grid grid-cols-12 gap-2 h-full">
            {Array.from({length: 48}).map((_, i) => (
                <div key={i} className="border-l border-black/20"/>
            ))}
          </div>
        </div>

        {/* Floating Geometric Elements (wrapper shifted by BASE_Y) */}
        <div
            className="absolute left-0 right-0 bottom-0 pointer-events-none z-0"
            style={{top: BASE_Y}}
        >
          <div
              className="absolute top-20 right-20 w-32 h-48 bg-stone border-2 border-black rotate-12 transition-transform duration-1000 hover-rotate"
              style={{
                transform: `rotate(12deg) ${ty(0.1)}`,
                ['--parallax-offset' as any]: `${parallaxSlow.offset}px`
              }}
              ref={parallaxSlow.elementRef}
          />
          <div
              className="absolute top-40 left-16 w-24 h-24 bg-black transition-transform duration-1000"
              style={{
                transform: ty(-0.05),
                ['--parallax-offset' as any]: `${parallaxMedium.offset}px`
              }}
              ref={parallaxMedium.elementRef}
          />
          <div
              className="absolute bottom-20 right-40 w-16 h-32 bg-white border-2 border-black -rotate-6 transition-transform duration-1000 hover-rotate"
              style={{
                transform: `rotate(-6deg) ${ty(0.15)}`,
                ['--parallax-offset' as any]: `${parallaxFast.offset}px`
              }}
              ref={parallaxFast.elementRef}
          />

          {/* Dotted / halftone circles */}
          <div
              className="absolute top-32 left-1/3 w-40 h-40 dotted-circle-yellow transition-transform duration-1000"
              style={{
                transform: `${ty(0.08)} rotate(${scrollY * 0.05}deg)`,
              }}
          />
          <div
              className="absolute bottom-40 left-20 w-24 h-24 dotted-circle-pink transition-transform duration-1000"
              style={{transform: ty(-0.12)}}
          />
          <div
              className="absolute top-1/2 right-1/4 w-32 h-32 halftone-circle-yellow transition-transform duration-1000"
              style={{
                transform: `${ty(0.06)} rotate(${scrollY * -0.03}deg)`,
              }}
          />
          <div
              className="absolute bottom-1/3 right-16 w-20 h-20 dotted-circle-white transition-transform duration-1000"
              style={{transform: ty(0.1)}}
          />
        </div>

        {/* Main Content Grid (shifted by BASE_Y) */}
        <div
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-8 md:px-16 max-w-7xl mx-auto items-start content-start relative z-20"
            style={{marginTop: BASE_Y}}
        >
          {/* Left: Text */}
          <div className="lg:col-span-7 space-y-8">
            <div
                className={`transform transition-all duration-1000 ease-out ${
                    isLoaded
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                }`}
            >
              {/* Tag */}
              <div className="inline-block bg-black text-white px-6 py-2 mb-8 brutal-shadow-sm hover-brutal">
                <p className="font-inter text-sm uppercase tracking-wider">
                  HARPREET NEHAR Portfolio
                </p>
              </div>


              {/* Subtitle */}
              <div {...subtitleAnimation.animationProps}
                   className="bg-white border-2 border-black p-6 mb-8 brutal-shadow max-w-lg hover-lift">
                <h2 className="font-grotesk font-bold text-black text-xl leading-tight mb-2">
                  UX/UI & BRAND DESIGNER
                </h2>
                <p className="font-inter text-base text-stone-dark leading-relaxed">
                  I merge design, technology, and culture. As a graphic designer and developer, I’m here to bring your ideas to life.
                </p>
              </div>

              {/* CTAs */}
              <div {...ctaAnimation.animationProps} className="flex flex-col sm:flex-row gap-4">
                <button
                    onClick={() => {
                      const el = document.getElementById("contact");
                      if (el)
                        el.scrollIntoView({behavior: "smooth"});
                    }}
                    className="bg-black text-white px-8 py-4 border-2 border-black font-grotesk font-bold uppercase tracking-wide hover:bg-yellow hover:text-black brutal-shadow-sm group hover-brutal transition-all duration-300"
                >
                  Let's Work Together
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right: Statue collage */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end relative">
            <div {...imageAnimation.animationProps} className="relative w-full max-w-md">
              <div className="relative hover-lift">
                <div className="absolute inset-0 bg-yellow-dark rotate-3 brutal-shadow-lg"/>
                <div className="relative w-80 h-96 border-2 border-black overflow-hidden bg-marble marble-texture">
                  <ImageWithFallback
                      src="../../src/assets/img/happy.jpg"
                      alt="Greek marble bust"
                      className="w-full h-full object-cover object-center scale-110 opacity-90 transition-transform duration-500 hover:scale-115"
                  />
                  <div
                      className="absolute top-0 right-0 w-12 h-32 bg-yellow border-l-2 border-b-2 border-black hover-rotate transition-transform duration-300"/>
                  <div
                      className="absolute bottom-0 left-0 w-22 h-20 bg-stone border-r-2 border-t-2 border-black hover-rotate transition-transform duration-300"/>
                </div>
              </div>

              <div
                  className="absolute -top-8 -left-8 text-[rgba(0,0,0,1)] text-4xl font-grotesk font-black opacity-30 -rotate-12 hover-rotate transition-transform duration-1000">
                DESIGN
              </div>

              <div
                  className="absolute -bottom-4 -right-4 bg-black text-white p-3 rotate-6 hover-brutal transition-all duration-300">
              <span className="font-grotesk font-bold text-sm">
                UX/UI
              </span>
              </div>

              {/* Small floaters (still parallax) */}
              <div
                  className="absolute top-16 -right-8 w-8 h-8 bg-black rotate-45 hover-rotate transition-transform duration-500"
                  style={{transform: `rotate(45deg) ${ty(0.08)}`}}
              />
              <div
                  className="absolute bottom-20 -left-6 w-6 h-16 bg-yellow-dark border border-black hover-scale transition-transform duration-500"
                  style={{transform: ty(-0.12)}}
              />
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-black"/>
      </section>
  );
}

export default ParallaxHero;