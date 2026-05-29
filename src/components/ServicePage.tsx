import { useNavigate, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Mail, MessageCircle, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import { useLanguage } from "../context/LanguageContext";
import { getServiceBySlug, getServiceContent } from "../data/services";
import { SITE } from "../config/site";

interface ServicePageProps {
  onBack: () => void;
}

export function ServicePage({ onBack }: ServicePageProps) {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const service = slug ? getServiceBySlug(slug) : undefined;

  const headerAnimation = useScrollAnimation({ delay: 200, duration: 800 });
  const introAnimation = useScrollAnimation({ delay: 350, duration: 800 });
  const benefitsAnimation = useScrollAnimation({ delay: 500, duration: 800 });
  const processAnimation = useScrollAnimation({ delay: 650, duration: 800 });
  const ctaAnimation = useScrollAnimation({ delay: 800, duration: 800 });

  if (!service) {
    return <Navigate to="/" replace />;
  }

  const content = getServiceContent(service, language);
  const mailSubject = encodeURIComponent(
    language === "de"
      ? `Anfrage: ${content.title}`
      : `Inquiry: ${content.title}`
  );
  const mailBody = encodeURIComponent(
    language === "de"
      ? `Hallo Harpreet,\n\nich interessiere mich für ${content.title}.\n\n`
      : `Hi Harpreet,\n\nI'm interested in ${content.title}.\n\n`
  );
  const mailto = `mailto:${SITE.email}?subject=${mailSubject}&body=${mailBody}`;

  return (
    <div className="min-h-screen bg-stone-light pb-24">
      <div className="bg-yellow border-b-2 border-black">
        <div className="container mx-auto px-8 md:px-16 max-w-4xl py-8">
          <Button
            onClick={onBack}
            className="mb-6 bg-black text-white border-2 border-black font-grotesk font-bold uppercase tracking-wide hover:bg-yellow hover:text-black brutal-shadow-sm hover-brutal transition-all duration-300"
          >
            <ArrowLeft className="mr-2 size-4" />
            {language === "de" ? "Zurück zum Portfolio" : "Back to portfolio"}
          </Button>

          <div {...headerAnimation.animationProps}>
            <p className="font-inter text-sm uppercase tracking-wider text-stone-dark mb-2">
              {language === "de" ? "Leistung" : "Service"} · Wien
            </p>
            <h1 className="font-grotesk font-black text-black text-3xl md:text-5xl leading-tight">
              {content.title}
            </h1>
            <p className="font-grotesk font-bold text-black text-xl md:text-2xl mt-4 max-w-2xl leading-snug">
              {content.headline}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8 md:px-16 max-w-4xl py-12 space-y-10">
        <div
          {...introAnimation.animationProps}
          className="bg-white border-2 border-black p-8 brutal-shadow hover-lift"
        >
          <p className="font-inter text-stone-dark text-lg leading-relaxed">
            {content.intro}
          </p>
        </div>

        <div
          {...benefitsAnimation.animationProps}
          className="bg-white border-2 border-black p-8 brutal-shadow hover-lift"
        >
          <h2 className="font-grotesk font-bold text-black text-2xl mb-6">
            {language === "de" ? "Das bekommst du" : "What you get"}
          </h2>
          <ul className="space-y-3">
            {content.benefits.map((benefit) => (
              <li
                key={benefit}
                className="font-inter text-stone-dark flex gap-3 leading-relaxed"
              >
                <span className="text-yellow-dark font-grotesk font-black shrink-0">
                  →
                </span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          {...processAnimation.animationProps}
          className="bg-black text-white border-2 border-black p-8 brutal-shadow hover-lift"
        >
          <h2 className="font-grotesk font-bold text-yellow text-2xl mb-6">
            {content.process.title}
          </h2>
          <ol className="space-y-4">
            {content.process.steps.map((step, index) => (
              <li key={step} className="flex gap-4 font-inter leading-relaxed">
                <span className="font-grotesk font-black text-yellow shrink-0 w-8">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {service.relatedProjects && service.relatedProjects.length > 0 && (
          <div className="bg-white border-2 border-black p-8 brutal-shadow hover-lift">
            <h2 className="font-grotesk font-bold text-black text-2xl mb-4">
              {language === "de" ? "Passende Arbeiten" : "Related work"}
            </h2>
            <p className="font-inter text-stone-dark mb-4">
              {language === "de"
                ? "Sieh dir Beispiele aus meinem Portfolio an:"
                : "See examples from my portfolio:"}
            </p>
            <div className="flex flex-wrap gap-3">
              {service.relatedProjects.map((projectSlug) => (
                <button
                  key={projectSlug}
                  type="button"
                  onClick={() => navigate(`/project/${projectSlug}`)}
                  className="inline-flex items-center gap-2 bg-yellow text-black border-2 border-black px-4 py-2 font-grotesk font-bold text-sm uppercase tracking-wide brutal-shadow-sm hover-brutal transition-all"
                >
                  {projectSlug.replace(/-/g, " ")}
                  <ExternalLink className="size-4" />
                </button>
              ))}
            </div>
          </div>
        )}

        <div
          {...ctaAnimation.animationProps}
          id="service-contact"
          className="bg-yellow border-2 border-black p-8 md:p-10 brutal-shadow-lg"
        >
          <h2 className="font-grotesk font-black text-black text-2xl md:text-3xl mb-3">
            {content.cta}
          </h2>
          <p className="font-inter text-stone-dark mb-8 max-w-xl">
            {language === "de"
              ? "Schreib mir per E-Mail oder WhatsApp — ich melde mich zeitnah mit den nächsten Schritten."
              : "Email or WhatsApp me — I'll get back to you soon with next steps."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={mailto}
              className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 border-2 border-black font-grotesk font-bold uppercase tracking-wide hover:bg-white hover:text-black brutal-shadow-sm transition-all"
            >
              <Mail className="size-5" />
              {language === "de" ? "E-Mail senden" : "Send email"}
            </a>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 border-2 border-black font-grotesk font-bold uppercase tracking-wide hover:bg-black hover:text-white brutal-shadow-sm transition-all"
            >
              <MessageCircle className="size-5" />
              {language === "de" ? "Auf WhatsApp schreiben" : "Chat on WhatsApp"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
