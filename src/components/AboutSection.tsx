import { useState, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useScrollAnimation, useStaggeredAnimation, useParallaxScroll } from "./hooks/useScrollAnimation";

import figmaIcon from "../assets/svg/figma.svg";
import photoshopIcon from "../assets/svg/photoshop.svg";
import illustratorIcon from "../assets/svg/illustrator.svg";
import premiereProIcon from "../assets/svg/premierpro.svg";
import angularIcon from "../assets/svg/angular.svg";
import htmlIcon from "../assets/svg/html.svg";
import cssIcon from "../assets/svg/css.svg";
import tsIcon from "../assets/svg/typescript.svg";

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
      year: "2014-2019",
      role: "Matura HTBLVA, Spengergasse",
      company: "Computer science",
    },
    {
      year: "2021 -2023",
      role: "Bachlor University Technikum",
      company: "Computer science",
    },
    {
      year: "2023-2025",
      role: "Master University St.Pölten",
      company: "Graphic Design",
    },
    {
      year: "2024 - 2024",
      role: "Nanyang Technological University in Singapore",
      company: "Graphic Design (semester abroad)",
    },
  ];

  const career = [
    {
      year: "2020 - 2021",
      role: "Bearingpoint - Junior Software Engineer",
      company: "Programmer in Regulatory Technology using Java. Design and implementation of user interfaces with Vue",
    },
    {
      year: "2021 - 2023",
      role: "Raiffiesen Software - UX/UI Dual Student",
      company: "Development of websites and user interfaces with Angular. Development of documentation using Storybook",
    },
    {
      year: "2023- current",
      role: "Raiffiesen Software - UX/UI Designer",
      company: "Accessible web applications with Angular. UI component catalog for modern frontend solutions. Designing the banking app. Designing new components and web pages",
    },
  ];

  const skills = [
    "User Experience Design",
    "Interface Design",
    "Design Systems",
    "Brand Identity",
    "Prototyping",
    "User Research Methods",
    "Design Thinking and User Journey",
    "Visual Design",
  ];

  const skillsIcon = [
    figmaIcon,
    photoshopIcon,
    illustratorIcon,
    premiereProIcon,
    angularIcon,
    tsIcon,
    htmlIcon,
    cssIcon,
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
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Story Block */}
          <div className="lg:col-span-2">
            <div {...storyAnimation.animationProps} className="bg-yellow border-2 border-black p-8 brutal-shadow-lg mb-8 marble-texture hover-lift">
              <h3 className="font-grotesk font-bold text-black text-2xl mb-6">
                FROM VIENNA
              </h3>

              <div className="space-y-4 font-inter text-base leading-relaxed">
                <p>
                  I began my career as a developer, working for several years in a regulatory firm before moving to Raiffeisen Software, where I took on the role of UX/UI developer. During this time, I also completed my bachelor’s degree in Computer Science.
                </p>
                <p>
                  Soon I realized that something was missing I wanted to dive deeper into creativity and design. This led me to pursue a master’s degree in Graphic Design at FH St. Pölten. That step planted the seeds for my passion: understanding people and customers, and designing solutions that truly fit their needs.
                </p>
                <p>
                  Today, I continue to work at Raiffeisen Software, now as a designer, combining my technical foundation with a love for design and user experience.
                </p>
              </div>
            </div>

            {/* Experience Timeline */}
            <div {...experienceAnimation.animationProps} className="bg-stone-light border-2 border-black p-6 brutal-shadow hover-lift">
              <h4 className="font-grotesk font-bold text-black text-xl mb-6">
                EDUCATION JOURNEY
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

            {/* CAREER Timeline */}
            <div {...experienceAnimation.animationProps} className="bg-yellow border-2 border-black p-6 brutal-shadow hover-lift mt-6">
              <h4 className="font-grotesk font-bold text-black text-xl mb-6">
                CAREER JOURNEY
              </h4>

              <div className="space-y-4">
                {career.map((exp, idx) => (
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
                  src="../../src/assets/img/happy2.jpeg"
                  alt="Greek sculpture head - representing creative thinking"
                  className="w-full h-full object-cover opacity-95 transition-transform duration-500 hover:scale-105"
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
                    className={`bg-stone-light border border-black p-3 hover-scale transition-all duration-200 ${getItemAnimationClass(index)}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <span className="font-inter font-medium text-sm">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Icon Icon Grid */}
            <div {...skillsAnimation.animationProps}
                 className="bg-white border-2 border-black p-6 brutal-shadow hover-lift mt-3">
              <h4 className="font-grotesk font-bold text-black text-xl mb-6">
                Skills
              </h4>

              <div
                  ref={skillsContainerRef}
                  className="flex flex-wrap gap-3"
              >
                {skillsIcon.map((skill, index) => (
                    <div
                        key={index}
                        className={`flex items-center justify-center border border-black p-3 white hover-scale transition-all duration-500 ${getItemAnimationClass(index)}`}
                        style={{transitionDelay: `${index * 100}ms`}}
                    >
                      <ImageWithFallback
                          src={skill}
                          alt="Skill Icon"
                          className="w-8 h-8"
                      />
                    </div>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* Abstract Typography Element */}
        <div
            className="absolute bottom-10 left-10 text-stone text-8xl font-grotesk font-black opacity-15 select-none hover-rotate transition-transform duration-1000">
          ABOUT
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-black"/>
    </section>
  );
}

export default AboutSection;