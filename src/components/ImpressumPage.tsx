import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import { useLanguage } from "../context/LanguageContext";

interface ImpressumPageProps {
  onBack: () => void;
}

export function ImpressumPage({ onBack }: ImpressumPageProps) {
  const { language } = useLanguage();
  // Animation hooks
  const headerAnimation = useScrollAnimation({ delay: 200, duration: 800 });
  const legalAnimation = useScrollAnimation({ delay: 400, duration: 1000 });
  const disclaimerAnimation = useScrollAnimation({ delay: 600, duration: 800 });
  const copyrightAnimation = useScrollAnimation({ delay: 800, duration: 600 });

  return (
    <div className="min-h-screen bg-stone-light">
      {/* Header */}
      <div className="bg-yellow border-b-2 border-black">
        <div className="container mx-auto px-8 md:px-16 max-w-4xl py-8">
          <Button
            onClick={onBack}
            className="mb-6 bg-black text-white border-2 border-black font-grotesk font-bold uppercase tracking-wide hover:bg-yellow hover:text-black brutal-shadow-sm hover-brutal transition-all duration-300"
          >
            <ArrowLeft className="mr-2 size-4" />
            {language === "de" ? "Zurück" : "Back"}
          </Button>
          
          <div {...headerAnimation.animationProps}>
            <h1 className="font-grotesk font-black text-black">
              Impressum
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-8 md:px-16 max-w-4xl py-16">
        <div className="space-y-12">
          {/* Legal Information Block */}
          <div {...legalAnimation.animationProps} className="bg-white border-2 border-black p-8 brutal-shadow hover-lift">
            <h2 className="font-grotesk font-bold text-black mb-6">
              {language === "de" ? "Rechtliche Informationen" : "Legal Information"}
            </h2>
            
            <div className="space-y-6 font-inter text-stone-dark">
              <div>
                <h3 className="font-grotesk font-bold text-black text-lg mb-2">
                  {language === "de" ? "Webseitenbetreiber" : "Website Owner"}
                </h3>
                <p>Harpreet</p>
                <p>UX/UI & Brand Designer</p>
              </div>

              <div>
                <h3 className="font-grotesk font-bold text-black text-lg mb-2">
                  {language === "de" ? "Kontaktinformationen" : "Contact Information"}
                </h3>
                <p>Email: harpreetneharyt@gmail.com</p>
                <p>{language === "de" ? "Standort: Wien, Österreich & Singapur" : "Location: Vienna, Austria & Singapore"}</p>
              </div>

              <div>
                <h3 className="font-grotesk font-bold text-black text-lg mb-2">
                  {language === "de" ? "Berufliche Tätigkeit" : "Professional Activity"}
                </h3>
                <p>{language === "de" ? "Freiberufliche Design-Dienstleistungen" : "Freelance Design Services"}</p>
                <p>{language === "de" ? "UX/UI Design, Brand Design, Web3 Produktentwicklung" : "UX/UI Design, Brand Design, Web3 Product Development"}</p>
              </div>
            </div>
          </div>

          {/* Disclaimer Block */}
          <div {...disclaimerAnimation.animationProps} className="bg-black text-white p-8 brutal-shadow-lg hover-lift">
            <h2 className="font-grotesk font-bold text-yellow mb-6">
              {language === "de" ? "Haftungsausschluss" : "Disclaimer"}
            </h2>
            
            <div className="space-y-4 font-inter text-stone">
              <p>
                {language === "de"
                  ? "Die Inhalte dieser Website dienen nur der allgemeinen Information. Trotz sorgfältiger Pflege übernehmen wir keine Gewähr für Vollständigkeit, Richtigkeit, Zuverlässigkeit oder Verfügbarkeit."
                  : "The information contained on this website is for general information purposes only. While we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind about the completeness, accuracy, reliability, or availability of the website or the information contained on it."}
              </p>
              
              <p>
                {language === "de"
                  ? "Die Nutzung der Inhalte erfolgt auf eigenes Risiko. Eine Haftung für Schäden aus der Nutzung dieser Website ist ausgeschlossen."
                  : "Any reliance you place on such information is therefore strictly at your own risk. In no event will we be liable for any loss or damage arising from the use of this website."}
              </p>
              
              <p>
                {language === "de"
                  ? "Diese Website kann Links zu externen Seiten enthalten. Für Inhalte externer Seiten übernehmen wir keine Verantwortung."
                  : "This website may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites."}
              </p>
            </div>
          </div>

          {/* Copyright Block */}
          <div {...copyrightAnimation.animationProps} className="bg-yellow border-2 border-black p-8 brutal-shadow hover-lift">
            <h2 className="font-grotesk font-bold text-black mb-6">
              {language === "de" ? "Urheberrecht" : "Copyright Notice"}
            </h2>
            
            <div className="space-y-4 font-inter text-black">
              <p>
                {language === "de" ? "© 2025 Harpreet. Alle Rechte vorbehalten." : "© 2025 Harpreet. All rights reserved."}
              </p>
              
              <p>
                {language === "de"
                  ? "Inhalte, Design und Struktur dieser Website sind urheberrechtlich geschützt. Jede Nutzung ohne ausdrückliche schriftliche Genehmigung ist untersagt."
                  : "The content, design, and layout of this website are protected by copyright law. Reproduction, distribution, or use of any content without explicit written permission is prohibited."}
              </p>
              
              <p>
                {language === "de"
                  ? "Gezeigte Projektarbeiten bleiben geistiges Eigentum der jeweiligen Kunden und werden hier nur zu Portfoliozwecken mit Genehmigung präsentiert."
                  : "All project work displayed is the intellectual property of the respective clients and is shown here with permission for portfolio purposes only."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="h-2 bg-black" />
    </div>
  );
}