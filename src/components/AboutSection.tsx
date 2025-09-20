import { useState, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useScrollAnimation, useStaggeredAnimation, useParallaxScroll } from "./hooks/useScrollAnimation";

interface AboutSectionProps {
  onNavigate: (page: string) => void;
}

export function AboutSection({
  onNavigate,
}: AboutSectionProps) {
  const [scrollY, setScrollY] = useState(0);

  // Animation hooks
  const headerAnimation = useScrollAnimation({ delay: 200, duration: 800 });
  const storyAnimation = useScrollAnimation({ delay: 400, duration: 1000 });
  const experienceAnimation = useScrollAnimation({ delay: 600, duration: 800 });
  const portraitAnimation = useScrollAnimation({ delay: 300, duration: 1200 });
  const skillsAnimation = useScrollAnimation({ delay: 800, duration: 600 });
  const { containerRef: skillsContainerRef, getItemAnimationClass } = useStaggeredAnimation(8, 100);
  
  // Parallax hooks
  const parallaxSlow = useParallaxScroll(0.08);
  const parallaxMedium = useParallaxScroll(0.06);
  const parallaxFast = useParallaxScroll(0.1);

  // Single source of truth for vertical start offset for this section
  const BASE_Y = 40; // tweak (e.g., 160/200) to match your composition

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  // helper: additive translateY honoring BASE_Y + optional parallax multiplier
  const ty = (mult = 0, extra = 0) =>
    `translateY(${BASE_Y + scrollY * mult + extra}px)`;

  const experience = [
    {
      year: "2018-2020",
      role: "UX Designer",
      company: "Vienna Design Studio",
    },
    {
      year: "2020-2022",
      role: "Senior UX/UI Designer",
      company: "Singapore Tech Corp",
    },
    {
      year: "2022-2024",
      role: "Lead Designer",
      company: "European Fintech",
    },
    {
      year: "2024-Present",
      role: "Building Echo",
      company: "Web3 Social dApp",
    },
  ];

  const skills = [
    "User Experience Design",
    "Interface Design",
    "Design Systems",
    "Brand Identity",
    "Prototyping",
    "User Research",
    "Information Architecture",
    "Visual Design",
  ];

  return (
    <section
      id="about"
      className="relative bg-white overflow-hidden py-8 md:py-24"
    >
      {/* Background Greek Column Fragment (shifted by BASE_Y) */}
      <div
        className="absolute right-0 w-80 h-full opacity-5 transition-transform duration-1000"
        style={{ top: BASE_Y, bottom: 0 }}
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1564506761284-733118aa8249?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
          alt="Greek column architecture"
          className="w-full h-full object-cover object-left"
        />
      </div>

      {/* Floating geometric elements wrapper (shifted by BASE_Y) */}
      <div
        className="absolute left-0 right-0 bottom-0 pointer-events-none z-0"
        style={{ top: BASE_Y }}
      >
        <div
          className="absolute top-20 left-20 w-16 h-40 bg-yellow border-2 border-black -rotate-12 transition-transform duration-1000 hover-rotate"
          style={{ 
            transform: `rotate(-12deg) ${ty(0.08)}`,
            '--parallax-offset': `${parallaxSlow.offset}px`
          }}
          ref={parallaxSlow.elementRef}
        />
        <div
          className="absolute bottom-40 right-32 w-24 h-24 bg-stone-dark border-2 border-black transition-transform duration-1000"
          style={{ 
            transform: ty(-0.06),
            '--parallax-offset': `${parallaxMedium.offset}px`
          }}
          ref={parallaxMedium.elementRef}
        />

        {/* Dotted / halftone circles */}
        <div
          className="absolute top-40 right-20 w-32 h-32 dotted-circle-yellow transition-transform duration-1000"
          style={{
            transform: `${ty(0.05)} rotate(${scrollY * 0.02}deg)`,
          }}
        />
        <div
          className="absolute bottom-20 left-32 w-28 h-28 halftone-circle-stone transition-transform duration-1000"
          style={{ 
            transform: ty(-0.08),
            '--parallax-offset': `${parallaxFast.offset}px`
          }}
          ref={parallaxFast.elementRef}
        />
        <div
          className="absolute top-1/3 left-1/2 w-20 h-20 dotted-circle-pink transition-transform duration-1000"
          style={{ transform: ty(0.06) }}
        />
      </div>

      {/* Content container (shifted by BASE_Y) */}
      <div
        className="container mx-auto px-8 md:px-16 max-w-7xl relative z-20"
        style={{ marginTop: BASE_Y }}
      >
        {/* Section Header */}
        <div {...headerAnimation.animationProps} className="mb-16">
          <div className="inline-block bg-black text-white px-6 py-2 mb-6 brutal-shadow-sm hover-brutal">
            <p className="font-inter text-sm uppercase tracking-wider">
              About Designer
            </p>
          </div>

          <h2 className="font-grotesk font-black text-black mb-8">
            Creating Digital Experiences
            <br />
            That Bridge Cultures
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Story Block */}
          <div className="lg:col-span-2">
            <div {...storyAnimation.animationProps} className="bg-yellow border-2 border-black p-8 brutal-shadow-lg mb-8 marble-texture hover-lift">
              <h3 className="font-grotesk font-bold text-black text-2xl mb-6">
                FROM VIENNA TO SINGAPORE
              </h3>

              <div className="space-y-4 font-inter text-base leading-relaxed">
                <p>
                  With 6+ years of experience across Austria,
                  Singapore, Asia & Europe, I've developed a
                  unique perspective on creating digital
                  experiences that resonate across cultures and
                  contexts.
                </p>

                <p>
                  My approach combines systematic design
                  thinking with cultural sensitivity, resulting
                  in products that are both functionally
                  excellent and emotionally compelling.
                </p>

                <p>
                  Currently building <strong>Echo</strong>, a
                  Web3 social dApp that reimagines how
                  communities form and interact in decentralized
                  spaces.
                </p>
              </div>
            </div>

            {/* Experience Timeline */}
            <div {...experienceAnimation.animationProps} className="bg-stone-light border-2 border-black p-6 brutal-shadow hover-lift">
              <h4 className="font-grotesk font-bold text-black text-xl mb-6">
                CAREER JOURNEY
              </h4>

              <div className="space-y-4">
                {experience.map((exp, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 pb-4 border-b border-black/20 last:border-b-0 transition-all duration-500 hover-scale"
                    style={{ transitionDelay: `${idx * 150}ms` }}
                  >
                    <div className="bg-black text-white px-3 py-1 text-xs font-inter font-bold hover-brutal transition-all duration-300">
                      {exp.year}
                    </div>
                    <div className="flex-1">
                      <h5 className="font-grotesk font-bold text-black text-sm">
                        {exp.role}
                      </h5>
                      <p className="font-inter text-stone-dark text-sm">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills & Portrait Column */}
          <div className="space-y-8">
            {/* Portrait with Greek aesthetic */}
            <div {...portraitAnimation.animationProps} className="relative">
              <div className="absolute inset-0 bg-yellow-dark rotate-3 brutal-shadow-lg" />
              <div className="relative bg-marble marble-texture border-2 border-black w-full h-80 overflow-hidden hover-lift">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1601119738659-8c7e517dac49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Greek sculpture head - representing creative thinking"
                  className="w-full h-full object-cover opacity-80 transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-0 left-0 w-20 h-24 bg-stone border-r-2 border-b-2 border-black hover-rotate transition-transform duration-300" />
                <div className="absolute bottom-0 right-0 w-16 h-20 bg-yellow border-l-2 border-t-2 border-black hover-rotate transition-transform duration-300" />
              </div>

              {/* Abstract text overlay */}
              <div className="absolute -bottom-4 -left-4 bg-black text-white p-2 -rotate-6 hover-brutal transition-all duration-300">
                <span className="font-grotesk font-bold text-xs">
                  CREATIVE
                </span>
              </div>
            </div>

            {/* Skills Grid */}
            <div {...skillsAnimation.animationProps} className="bg-white border-2 border-black p-6 brutal-shadow hover-lift">
              <h4 className="font-grotesk font-bold text-black text-xl mb-6">
                EXPERTISE
              </h4>

              <div ref={skillsContainerRef} className="grid grid-cols-1 gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className={`bg-stone-light border border-black p-3 hover-scale transition-all duration-500 ${getItemAnimationClass(index)}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <span className="font-inter font-medium text-sm">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Abstract Typography Element */}
        <div className="absolute bottom-10 left-10 text-stone text-8xl font-grotesk font-black opacity-15 select-none hover-rotate transition-transform duration-1000">
          ABOUT
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-black" />
    </section>
  );
}

export default AboutSection;