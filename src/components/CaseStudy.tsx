import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {type Project, projects } from "../data/projects";
import { Button } from "./ui/button";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CaseStudyProps {}

export function CaseStudy({}: CaseStudyProps) {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Single source of truth for vertical start offset
  const BASE_Y = 40; // keep consistent with other sections

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!slug) return;
    
    const foundProject = projects.find((p) => p.slug === slug);
    setProject(foundProject || null);
    setIsLoaded(false);
    setTimeout(() => setIsLoaded(true), 100);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  // additive translateY helper honoring BASE_Y + optional parallax multiplier
  const ty = (mult = 0, extra = 0) =>
    `translateY(${BASE_Y + scrollY * mult + extra}px)`;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-yellow">
        <div className="text-center">
          <div className="bg-white border-2 border-black p-8 brutal-shadow-lg">
            <h1 className="font-grotesk text-black mb-4">
              Project Not Found
            </h1>
            <Button
              onClick={() => navigate('/')}
              className="bg-black text-white border-2 border-black font-grotesk font-bold uppercase tracking-wide hover:bg-yellow hover:text-black transition-all duration-300 brutal-shadow-sm"
            >
              <ArrowLeft className="mr-2 size-4" />
              Back to Work
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const currentIndex = projects.findIndex(
    (p) => p.slug === slug,
  );
  const prevProject =
    currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1
      ? projects[currentIndex + 1]
      : null;

  return (
    <article
      className={`min-h-screen bg-white relative overflow-hidden transition-all duration-700 ${
        isLoaded
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4"
      }`}
    >
      {/* Background Greek image (shifted by BASE_Y) */}
      <div
        className="absolute right-0 w-96 h-full opacity-5 pointer-events-none"
        style={{ top: BASE_Y, bottom: 0 }}
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1571115764595-644a1f56a55c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
          alt="Greek columns"
          className="w-full h-full object-cover object-left"
        />
      </div>

      {/* Floating geometric elements wrapper (shifted by BASE_Y) */}
      <div
        className="absolute left-0 right-0 bottom-0 pointer-events-none z-0"
        style={{ top: BASE_Y }}
      >
        <div
          className="absolute top-32 left-16 w-20 h-48 bg-yellow border-2 border-black -rotate-12"
          style={{ transform: `rotate(-12deg) ${ty(0.05)}` }}
        />
        <div
          className="absolute bottom-40 right-20 w-32 h-32 bg-stone-dark border-2 border-black"
          style={{ transform: ty(-0.04) }}
        />

        {/* Dotted circles */}
        <div
          className="absolute top-1/4 right-1/4 w-36 h-36 dotted-circle-yellow"
          style={{
            transform: `${ty(0.03)} rotate(${scrollY * 0.01}deg)`,
          }}
        />
        <div
          className="absolute bottom-1/3 left-1/4 w-28 h-28 halftone-circle-stone"
          style={{ transform: ty(-0.06) }}
        />
      </div>

      {/* Header (shifted by BASE_Y) */}
      <header
        className="pt-24 pb-12 px-8 md:px-16 max-w-7xl mx-auto relative z-20"
        style={{ marginTop: BASE_Y }}
      >
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-8 -ml-4 bg-black text-white border-2 border-black font-grotesk font-bold uppercase tracking-wide hover:bg-yellow hover:text-black transition-all duration-300 brutal-shadow-sm"
        >
          <ArrowLeft className="mr-2 size-4" />
          Back to Work
        </Button>

        <div className="space-y-8">
          {/* Tags */}
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <div
                key={tag}
                className="bg-stone-light border-2 border-black px-4 py-2 brutal-shadow-sm"
              >
                <span className="font-inter font-medium text-black text-sm uppercase tracking-wider">
                  {tag}
                </span>
              </div>
            ))}
          </div>

          {/* Title Block */}
          <div className="bg-yellow border-2 border-black p-8 brutal-shadow-lg marble-texture max-w-4xl">
            <h1 className="font-grotesk font-black text-black mb-4">
              {project.title}
            </h1>

            <p className="font-inter text-lg text-black leading-relaxed mb-6">
              {project.summary}
            </p>

            <div className="flex items-center gap-8">
              <div className="bg-black text-white px-4 py-2">
                <span className="font-inter text-xs uppercase tracking-wider">
                  Category
                </span>
                <div className="font-grotesk font-bold text-yellow">
                  {project.category}
                </div>
              </div>
              <div className="bg-black text-white px-4 py-2">
                <span className="font-inter text-xs uppercase tracking-wider">
                  Year
                </span>
                <div className="font-grotesk font-bold text-yellow">
                  {project.year}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="mb-16 px-8 md:px-16 max-w-7xl mx-auto relative z-20">
        <div className="relative">
          <div className="absolute inset-0 bg-stone rotate-1 brutal-shadow-lg" />
          <div className="relative overflow-hidden border-2 border-black">
            <ImageWithFallback
              src={project.heroImage}
              alt={project.title}
              className="w-[80vw] h-[41vh] group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 right-0 w-24 h-32 bg-yellow border-l-2 border-t-2 border-black" />
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="px-8 md:px-16 max-w-6xl mx-auto space-y-16 relative z-20">
        {/* Overview */}
        <section>
          <div className="bg-white border-2 border-black p-8 brutal-shadow-lg">
            <h2 className="font-grotesk font-bold text-black mb-6">
              OVERVIEW
            </h2>
            <p className="font-inter text-base text-stone-dark leading-relaxed">
              {project.overview}
            </p>
          </div>
        </section>

        {/* Problem */}
        <section>
          <div className="bg-yellow border-2 border-black p-8 brutal-shadow-lg marble-texture">
            <h2 className="font-grotesk font-bold text-black mb-6">
              THE PROBLEM
            </h2>
            <p className="font-inter text-base text-black leading-relaxed">
              {project.problem}
            </p>
          </div>
        </section>

        {/* Gallery PROBLEM */}
        {project.problemGallery && project.problemGallery.length > 1 && (
            <section>
              <div className="bg-white border-2 border-black p-6 mb-8 brutal-shadow">
                <h2 className="font-grotesk font-bold text-black mb-6">
                  OLD DESIGN GALLERY
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {project.problemGallery.map((image, index) => (
                    <div key={index} className="relative">
                      <div className="bg-yellow-dark brutal-shadow-lg">
                        <div className="overflow-hidden border-2 border-black">
                          <ImageWithFallback
                              src={image}
                              alt={`${project.title} gallery image ${index + 1}`}
                              className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </div>
                    </div>
                ))}
              </div>
            </section>
        )}



        {/* Process */}
        <section>
          <div className="bg-stone-light border-2 border-black p-8 brutal-shadow-lg">
            <h2 className="font-grotesk font-bold text-black mb-6">
              PROCESS
            </h2>
            <p className="font-inter text-base text-stone-dark leading-relaxed">
              {project.process}
            </p>
          </div>
        </section>

        {/* Gallery */}
        {project.gallery.length > 1 && (
          <section>
            <div className="bg-white border-2 border-black p-6 mb-8 brutal-shadow">
              <h2 className="font-grotesk font-bold text-black mb-6">
                PROJECT GALLERY
              </h2>
              <p className="font-inter text-base text-black leading-relaxed">
                The project gallery offers a comprehensive view of the design process, including the brand style, mockups, logo development, landing page, and additional visual assets that illustrate the project outcome.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {project.gallery.map((image, index) => (
                  <div key={index} className="relative">
                  <div className="bg-yellow-dark brutal-shadow-lg">
                    <div className="overflow-hidden border-2 border-black">
                      <ImageWithFallback
                        src={image}
                        alt={`${project.title} gallery image ${index + 1}`}
                        className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Solution */}
        <section>
          <div className="bg-white border-2 border-black p-8 brutal-shadow-lg">
            <h2 className="font-grotesk font-bold text-black mb-6">
              SOLUTION
            </h2>
            <p className="font-inter text-base text-stone-dark leading-relaxed">
              {project.solution}
            </p>
          </div>
        </section>

        {/* Results */}
        <section>
          <div className="bg-black text-white p-8 brutal-shadow-lg">
            <h2 className="font-grotesk font-bold text-yellow mb-6">
              RESULTS
            </h2>
            <p className="font-inter text-base text-stone leading-relaxed">
              {project.results}
            </p>
          </div>
        </section>

        {/* Links & Files */}
        {((project.links && project.links.length > 0) || (project.files && project.files.length > 0)) && (
          <section>
            <div className="bg-stone-light border-2 border-black p-8 brutal-shadow-lg">
              <h2 className="font-grotesk font-bold text-black mb-6">
                LINKS & FILES
              </h2>
              <div className="flex flex-wrap gap-4">
                {/* Links */}
                {project.links && project.links.map((link, index) => {
                  const isLikelyFile = /\.(pdf|zip|rar|doc|docx|png|jpe?g)$/i.test(link) || link.startsWith('/') || link.startsWith('..');
                  if (isLikelyFile) {
                    const fileName = link.split('/').pop() || `file-${index + 1}`;
                    return (
                      <a
                        key={`link-file-${index}`}
                        href={link}
                        download={fileName}
                        className="bg-black text-white border-2 border-black px-6 py-3 font-grotesk font-bold uppercase tracking-wide hover:bg-stone-dark transition-all duration-300 brutal-shadow-sm inline-flex items-center gap-2"
                      >
                        <ExternalLink className="size-4" />
                        Download File
                      </a>
                    );
                  }
                  return (
                    <a
                      key={`link-${index}`}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-yellow text-black border-2 border-black px-6 py-3 font-grotesk font-bold uppercase tracking-wide hover:bg-yellow-dark transition-all duration-300 brutal-shadow-sm inline-flex items-center gap-2"
                    >
                      <ExternalLink className="size-4" />
                      {link.includes('instagram') ? 'Instagram' : 
                       link.includes('behance') ? 'Behance' :
                       link.includes('dribbble') ? 'Dribbble' :
                       link.includes('github') ? 'GitHub' :
                       'Visit Site'}
                    </a>
                  );
                })}
                
                {/* Files */}
                {project.files && project.files.map((file, index) => {
                  const fileName = file.split('/').pop() || `file-${index + 1}`;
                  
                  return (
                    <a
                      key={`file-${index}`}
                      href={file}
                      download={fileName}
                      className="bg-black text-white border-2 border-black px-6 py-3 font-grotesk font-bold uppercase tracking-wide hover:bg-stone-dark transition-all duration-300 brutal-shadow-sm inline-flex items-center gap-2"
                    >
                      <ExternalLink className="size-4" />
                      Download File
                    </a>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Navigation */}
      <nav className="py-16 px-8 md:px-16 max-w-7xl mx-auto border-t-4 border-black mt-16 bg-stone-light relative z-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Back to Work */}
          <div className="bg-white border-2 border-black p-6 brutal-shadow">
            <h3 className="font-grotesk font-bold text-black mb-4">
              VIEW ALL WORK
            </h3>
            <Button
              onClick={() => navigate('/')}
              className="bg-yellow text-black border-2 border-black font-grotesk font-bold uppercase tracking-wide hover:bg-yellow-dark transition-all duration-300 brutal-shadow-sm"
            >
              <ExternalLink className="mr-2 size-4" />
              All Projects
            </Button>
          </div>

          {/* Project Navigation */}
          <div className="flex flex-col sm:flex-row gap-4">
            {prevProject && (
              <div className="bg-black text-white p-4 brutal-shadow">
                <span className="font-inter text-xs uppercase tracking-wider text-stone mb-2 block">
                  Previous
                </span>
                <Button
                  variant="ghost"
                  onClick={() =>
                    navigate(`/project/${prevProject.slug}`)
                  }
                  className="text-white hover:text-yellow font-grotesk font-bold p-0 h-auto"
                >
                  <ArrowLeft className="mr-2 size-4" />
                  {prevProject.title}
                </Button>
              </div>
            )}

            {nextProject && (
              <div className="bg-black text-white p-4 brutal-shadow">
                <span className="font-inter text-xs uppercase tracking-wider text-stone mb-2 block">
                  Next
                </span>
                <Button
                  variant="ghost"
                  onClick={() =>
                    navigate(`/project/${nextProject.slug}`)
                  }
                  className="text-white hover:text-yellow font-grotesk font-bold p-0 h-auto"
                >
                  {nextProject.title}
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Abstract Typography Element */}
      <div className="absolute bottom-20 right-16 text-stone text-9xl font-grotesk font-black opacity-15 select-none pointer-events-none z-0">
        CASE
      </div>
    </article>
  );
}

export default CaseStudy;