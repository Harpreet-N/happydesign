import { ArrowLeft, Shield, Eye, Lock, FileText } from "lucide-react";
import { Button } from "./ui/button";
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import { useLanguage } from "../context/LanguageContext";

interface DatenschutzPageProps {
  onBack: () => void;
}

export function DatenschutzPage({ onBack }: DatenschutzPageProps) {
  const { language } = useLanguage();
  // Animation hooks
  const headerAnimation = useScrollAnimation({ delay: 200, duration: 800 });
  const overviewAnimation = useScrollAnimation({ delay: 400, duration: 1000 });
  const dataCollectionAnimation = useScrollAnimation({ delay: 600, duration: 800 });
  const dataUsageAnimation = useScrollAnimation({ delay: 800, duration: 600 });
  const protectionAnimation = useScrollAnimation({ delay: 1000, duration: 800 });
  const rightsAnimation = useScrollAnimation({ delay: 1200, duration: 600 });
  const contactAnimation = useScrollAnimation({ delay: 1400, duration: 600 });

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
              Datenschutz
              <span className="block text-lg font-inter font-normal text-stone-dark mt-2">
                {language === "de" ? "Datenschutzerklärung" : "Privacy Policy"}
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-8 md:px-16 max-w-4xl py-16">
        <div className="space-y-12">
          {/* Overview Block */}
          <div {...overviewAnimation.animationProps} className="bg-white border-2 border-black p-8 brutal-shadow hover-lift">
            <div className="flex items-center mb-6">
              <Shield className="size-8 text-black mr-4 hover-rotate transition-transform duration-300" />
              <h2 className="font-grotesk font-bold text-black">
                {language === "de" ? "Datenschutz Überblick" : "Privacy Overview"}
              </h2>
            </div>
            
            <div className="space-y-4 font-inter text-stone-dark">
              <p>
                {language === "de"
                  ? "Diese Datenschutzerklärung erklärt, wie personenbezogene Daten auf dieser Portfolio-Website erhoben, verarbeitet und geschützt werden."
                  : "This privacy policy explains how personal data is collected, used, and protected when you visit this portfolio website. Your privacy is important to us, and we are committed to protecting your personal information."}
              </p>
              
              <p>
                {language === "de"
                  ? "Diese Website ist ein persönliches Portfolio und erhebt personenbezogene Daten nur im notwendigen Umfang, z. B. über Kontaktanfragen."
                  : "This website is a personal portfolio showcasing design work and does not collect personal data beyond standard web analytics for improving user experience."}
              </p>
            </div>
          </div>

          {/* Data Collection Block */}
          <div {...dataCollectionAnimation.animationProps} className="bg-black text-white p-8 brutal-shadow-lg hover-lift">
            <div className="flex items-center mb-6">
              <Eye className="size-8 text-yellow mr-4 hover-scale transition-transform duration-300" />
              <h2 className="font-grotesk font-bold text-yellow">
                {language === "de" ? "Datenerhebung" : "Data Collection"}
              </h2>
            </div>
            
            <div className="space-y-6 font-inter text-stone">
              <div>
                <h3 className="font-grotesk font-bold text-white text-lg mb-2">
                  {language === "de" ? "Automatisch erhobene Daten" : "Automatically Collected Data"}
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>{language === "de" ? "Browsertyp und Version" : "Browser type and version"}</li>
                  <li>{language === "de" ? "Betriebssystem" : "Operating system"}</li>
                  <li>{language === "de" ? "Referrer-Website" : "Referring website"}</li>
                  <li>{language === "de" ? "Datum und Uhrzeit des Zugriffs" : "Date and time of access"}</li>
                  <li>{language === "de" ? "IP-Adresse (anonymisiert)" : "IP address (anonymized)"}</li>
                </ul>
              </div>

              <div>
                <h3 className="font-grotesk font-bold text-white text-lg mb-2">
                  {language === "de" ? "Daten aus dem Kontaktformular" : "Contact Form Data"}
                </h3>
                <p>
                  {language === "de"
                    ? "Wenn du das Kontaktformular nutzt, erfassen wir Name, E-Mail-Adresse und Nachricht ausschließlich zur Bearbeitung deiner Anfrage."
                    : "When you use the contact form, we collect your name, email address, and message content solely for the purpose of responding to your inquiry."}
                </p>
              </div>
            </div>
          </div>

          {/* Data Usage Block */}
          <div {...dataUsageAnimation.animationProps} className="bg-yellow border-2 border-black p-8 brutal-shadow hover-lift">
            <div className="flex items-center mb-6">
              <FileText className="size-8 text-black mr-4 hover-rotate transition-transform duration-300" />
              <h2 className="font-grotesk font-bold text-black">
                {language === "de" ? "Wie wir Daten verwenden" : "How We Use Your Data"}
              </h2>
            </div>
            
            <div className="space-y-4 font-inter text-black">
              <ul className="list-disc list-inside space-y-2">
                <li>{language === "de" ? "Zur Beantwortung deiner Anfragen" : "To respond to your inquiries and communication"}</li>
                <li>{language === "de" ? "Zur Verbesserung von Funktionalität und Nutzererlebnis" : "To improve website functionality and user experience"}</li>
                <li>{language === "de" ? "Zur Analyse von Nutzung und Zugriffen" : "To analyze website traffic and usage patterns"}</li>
                <li>{language === "de" ? "Zur Gewährleistung der Sicherheit" : "To ensure website security and prevent abuse"}</li>
              </ul>
              
              <p className="bg-black text-white p-4 border-2 border-black hover-scale transition-transform duration-300">
                {language === "de"
                  ? "Wir verkaufen, vermieten oder teilen deine personenbezogenen Daten nicht für Werbezwecke."
                  : "We do not: sell, rent, or share your personal data with third parties for marketing purposes. Your data is never used for commercial advertising."}
              </p>
            </div>
          </div>

          {/* Data Protection Block */}
          <div {...protectionAnimation.animationProps} className="bg-stone-light border-2 border-black p-8 brutal-shadow hover-lift">
            <div className="flex items-center mb-6">
              <Lock className="size-8 text-black mr-4 hover-scale transition-transform duration-300" />
              <h2 className="font-grotesk font-bold text-black">
                {language === "de" ? "Datenschutz & Sicherheit" : "Data Protection & Security"}
              </h2>
            </div>
            
            <div className="space-y-4 font-inter text-stone-dark">
              <p>
                {language === "de"
                  ? "Wir setzen technische und organisatorische Maßnahmen ein, um deine Daten vor unbefugtem Zugriff, Veränderung oder Verlust zu schützen."
                  : "We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction."}
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="hover-scale transition-transform duration-300">
                  <h3 className="font-grotesk font-bold text-black text-lg mb-2">
                    {language === "de" ? "Technische Maßnahmen" : "Technical Measures"}
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>{language === "de" ? "SSL/TLS-Verschlüsselung" : "SSL/TLS encryption"}</li>
                    <li>{language === "de" ? "Sichere Hosting-Infrastruktur" : "Secure hosting infrastructure"}</li>
                    <li>{language === "de" ? "Regelmäßige Sicherheitsupdates" : "Regular security updates"}</li>
                  </ul>
                </div>
                
                <div className="hover-scale transition-transform duration-300">
                  <h3 className="font-grotesk font-bold text-black text-lg mb-2">
                    {language === "de" ? "Organisatorische Maßnahmen" : "Organizational Measures"}
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>{language === "de" ? "Begrenzte Datenzugriffe" : "Limited data access"}</li>
                    <li>{language === "de" ? "Datenminimierung" : "Data minimization principles"}</li>
                    <li>{language === "de" ? "Regelmäßige Datenschutzprüfungen" : "Regular privacy assessments"}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Your Rights Block */}
          <div {...rightsAnimation.animationProps} className="bg-white border-2 border-black p-8 brutal-shadow hover-lift">
            <h2 className="font-grotesk font-bold text-black mb-6">
              {language === "de" ? "Deine Rechte (DSGVO)" : "Your Rights (GDPR)"}
            </h2>
            
            <div className="space-y-4 font-inter text-stone-dark">
              <p>
                {language === "de"
                  ? "Nach der Datenschutz-Grundverordnung (DSGVO) hast du folgende Rechte:"
                  : "Under the General Data Protection Regulation (GDPR), you have the following rights:"}
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="list-disc list-inside space-y-2">
                  <li>{language === "de" ? "Recht auf Auskunft" : "Right to access your personal data"}</li>
                  <li>{language === "de" ? "Recht auf Berichtigung" : "Right to rectification of incorrect data"}</li>
                  <li>{language === "de" ? "Recht auf Löschung" : "Right to erasure (right to be forgotten)"}</li>
                  <li>{language === "de" ? "Recht auf Einschränkung der Verarbeitung" : "Right to restrict processing"}</li>
                </ul>
                
                <ul className="list-disc list-inside space-y-2">
                  <li>{language === "de" ? "Recht auf Datenübertragbarkeit" : "Right to data portability"}</li>
                  <li>{language === "de" ? "Widerspruchsrecht" : "Right to object to processing"}</li>
                  <li>{language === "de" ? "Recht auf Widerruf von Einwilligungen" : "Right to withdraw consent"}</li>
                  <li>{language === "de" ? "Beschwerderecht" : "Right to lodge a complaint"}</li>
                </ul>
              </div>
              
              <p className="bg-yellow border-2 border-black p-4 mt-6 hover-scale transition-transform duration-300">
                {language === "de" ? "Zur Ausübung dieser Rechte kontaktiere uns unter:" : "To exercise any of these rights, please contact us at:"} 
                <strong> harpreetneharyt@gmail.com</strong>
              </p>
            </div>
          </div>

          {/* Contact & Updates Block */}
          <div {...contactAnimation.animationProps} className="bg-black text-white p-8 brutal-shadow-lg hover-lift">
            <h2 className="font-grotesk font-bold text-yellow mb-6">
              {language === "de" ? "Kontakt & Aktualisierungen" : "Contact & Updates"}
            </h2>
            
            <div className="space-y-4 font-inter text-stone">
              <p>
                {language === "de"
                  ? "Bei Fragen zu dieser Datenschutzerklärung kontaktiere uns bitte unter "
                  : "If you have any questions about this privacy policy or our data practices, please contact us at "}
                <strong className="text-white">harpreetneharyt@gmail.com</strong>
              </p>
              
              <p>
                {language === "de"
                  ? "Diese Datenschutzerklärung wurde zuletzt im "
                  : "This privacy policy was last updated on "}
                <strong className="text-white">{language === "de" ? "Dezember 2025" : "December 2025"}</strong>.
                {language === "de"
                  ? " Wir können diese Erklärung gelegentlich aktualisieren. Änderungen werden auf dieser Seite veröffentlicht."
                  : " We may update this policy from time to time. Any changes will be posted on this page."}
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