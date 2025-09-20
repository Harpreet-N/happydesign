import { useEffect, useState } from "react";
import { projects } from "../data/projects";
import { useScrollAnimation, useStaggeredAnimation, useParallaxScroll } from "./hooks/useScrollAnimation";

interface BentoGridProps {
  onProjectClick: (slug: string) => void;
}

export function BentoGrid({ onProjectClick }: BentoGridProps) {
  const [scrollY, setScrollY] = useState(0);

  // Animation hooks
  const headerAnimation = useScrollAnimation({ delay: 200, duration: 800 });
  const ctaAnimation = useScrollAnimation({ delay: 300, duration: 600 });
  const { containerRef, getItemAnimationClass } = useStaggeredAnimation(projects.length, 150);
  const parallaxSlow = useParallaxScroll(0.05);
  const parallaxMedium = useParallaxScroll(0.08);
  const parallaxFast = useParallaxScroll(0.12);

  // single source of truth for vertical start position of this section
  const BASE_Y = 40; // adjust to match your composition

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // additive translateY helper (keeps parallax while honoring BASE_Y)
  const ty = (mult = 0, extra = 0) =>
    `translateY(${BASE_Y + scrollY * mult + extra}px)`;

  return (
    <section className="relative bg-stone-light overflow-hidden py-16 md:py-24">
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          // subtle square grid using background images (no blank band)
          backgroundImage: `repeating-linear-gradient(
         to right,
         rgba(0,0,0,0.18) 0 1px,
         transparent 1px 12.5%
       ),
       repeating-linear-gradient(
         to bottom,
         rgba(0,0,0,0.18) 0 1px,
         transparent 1px 120px
       )`,
          backgroundSize: "12.5% 120px, 12.5% 120px", // 8 columns, 120px row height
          backgroundPosition: "0 0, 0 0",
        }}
      />

      {/* Floating geometric elements wrapper (also shifted by BASE_Y) */}
      <div
        className="absolute left-0 right-0 bottom-0 pointer-events-none z-0"
        style={{ top: BASE_Y }}
      >
        <div
          className="absolute top-10 left-10 w-20 h-20 bg-yellow border-2 border-black rotate-12 transition-transform duration-1000"
          style={{ 
            transform: `rotate(12deg) ${ty(0.08)}`,
            '--parallax-offset': `${parallaxSlow.offset}px`
          }}
          ref={parallaxSlow.elementRef}
        />
        <div
          className="absolute bottom-20 right-20 w-12 h-32 bg-black transition-transform duration-1000"
          style={{ 
            transform: ty(-0.06),
            '--parallax-offset': `${parallaxMedium.offset}px`
          }}
          ref={parallaxMedium.elementRef}
        />
        <div
          className="absolute top-1/2 left-1/4 w-8 h-8 bg-stone-dark border border-black -rotate-45 transition-transform duration-1000"
          style={{ 
            transform: `rotate(-45deg) ${ty(0.04)}`,
            '--parallax-offset': `${parallaxFast.offset}px`
          }}
          ref={parallaxFast.elementRef}
        />

        {/* Dotted / halftone circles */}
        <div
          className="absolute top-20 right-1/3 w-36 h-36 halftone-circle-yellow transition-transform duration-1000"
          style={{
            transform: `${ty(0.05)} rotate(${scrollY * -0.02}deg)`,
          }}
        />
        <div
          className="absolute bottom-32 left-1/3 w-28 h-28 dotted-circle-pink transition-transform duration-1000"
          style={{ transform: ty(-0.08) }}
        />
        <div
          className="absolute top-1/3 left-16 w-20 h-20 dotted-circle-white transition-transform duration-1000"
          style={{ transform: ty(0.03) }}
        />
        <div
          className="absolute bottom-16 right-16 w-24 h-24 halftone-circle-stone transition-transform duration-1000"
          style={{ transform: ty(0.07) }}
        />
      </div>

      {/* Content container (shifted down by BASE_Y) */}
      <div
        className="container mx-auto px-8 md:px-16 max-w-7xl relative z-20"
        style={{ marginTop: BASE_Y }}
      >
        {/* Section Header */}
        <div {...headerAnimation.animationProps} className="mb-16">
          <div className="inline-block bg-black text-white px-6 py-2 mb-6 brutal-shadow-sm hover-brutal">
            <p className="font-inter text-sm uppercase tracking-wider">
              Selected Work
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <h2 className="font-grotesk font-black text-black mb-6">
                Projects & Case Studies
              </h2>

              <div className="bg-white border-2 border-black p-4 brutal-shadow hover-lift">
                <p className="font-inter text-stone-dark">
                  A collection of design projects
                  spanning UX/UI, branding, rebranding.
                </p>
              </div>
            </div>

            <div className="text-right">
              <div className="text-stone text-6xl font-grotesk font-black opacity-20 select-none hover-rotate transition-transform duration-1000">
                WORK
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid - Brutalist Masonry */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const isLarge = index % 5 === 0;
            const isWide = index % 3 === 0 && !isLarge;
            const isYellow = index % 4 === 0;

            return (
              <div
                key={project.id}
                className={`${isLarge ? "md:col-span-2 lg:col-span-2" : ""} ${
                  isWide ? "md:col-span-2 lg:col-span-1" : ""
                } group cursor-pointer transition-all duration-700 ${getItemAnimationClass(index)}`}
                onClick={() => onProjectClick(project.slug)}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div
                  className={`relative border-2 border-black brutal-shadow-sm hover:brutal-shadow-lg hover-lift ${
                    isYellow ? "bg-yellow" : "bg-white"
                  }`}
                >
                  {/* Project Image with Geometric Mask */}
                  <div className="relative overflow-hidden">
                    <div
                      className={`w-full ${isLarge ? "h-80" : "h-64"} bg-marble marble-texture`}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      <div className="absolute top-0 right-0 w-16 h-4 bg-stone border-l-2 border-b-2 border-black hover-rotate transition-transform duration-300" />
                      {isLarge && (
                        <div className="absolute bottom-0 left-0 w-24 h-4 bg-yellow-dark border-r-2 border-t-2 border-black hover-rotate transition-transform duration-300" />
                      )}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="inline-block bg-black text-white px-3 py-1 text-xs font-inter uppercase tracking-wider mb-4 hover-brutal">
                      {project.category}
                    </div>

                    <h3 className="font-grotesk font-bold text-black text-xl mb-3 leading-tight">
                      {project.title}
                    </h3>

                    <p className="font-inter text-stone-dark text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags
                        .slice(0, 3)
                        .map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-stone-light border border-black px-2 py-1 text-xs font-inter font-medium hover-scale transition-transform duration-200"
                          >
                            {tag}
                          </span>
                        ))}
                    </div>
                  </div>

                  {/* Abstract accents */}
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-black opacity-60 hover-rotate transition-all duration-300" />
                  <div className="absolute -bottom-2 -right-2 w-6 h-4 bg-yellow-dark border border-black rotate-45 hover-scale transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div {...ctaAnimation.animationProps} className="mt-20 text-center">
          <div className="bg-black text-white p-8 brutal-shadow-lg inline-block hover-lift">
            <h3 className="font-grotesk font-bold text-white text-2xl mb-4">
              INTERESTED IN WORKING TOGETHER?
            </h3>
            <button
              onClick={() => {
                const element =
                  document.getElementById("contact");
                if (element)
                  element.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
              className="bg-yellow text-black px-8 py-4 border-2 border-yellow font-grotesk font-bold uppercase tracking-wide hover:bg-yellow-dark hover-brutal transition-all duration-300"
            >
              Start a Project
            </button>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-black" />
    </section>
  );
}

export default BentoGrid;