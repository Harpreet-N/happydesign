import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { ExternalLink, Mail, MessageCircle } from "lucide-react";
import { useScrollAnimation, useParallaxScroll } from "./hooks/useScrollAnimation";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../context/LanguageContext";

export function ContactSection() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [scrollY, setScrollY] = useState(0);


  // Animation hooks
  const headerAnimation = useScrollAnimation({ delay: 200, duration: 800 });
  const formAnimation = useScrollAnimation({ delay: 400, duration: 1000 });
  const socialAnimation = useScrollAnimation({ delay: 800, duration: 600 });
  const cvAnimation = useScrollAnimation({ delay: 1000, duration: 600 });
  
  // Parallax hooks
  const parallaxSlow = useParallaxScroll(0.08);
  const parallaxMedium = useParallaxScroll(0.06);
  const parallaxFast = useParallaxScroll(0.1);

  // Single source of truth for vertical start offset
  const BASE_Y = 30; // match this with your other sections (e.g., 120/160/200)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Suppress browser extension errors that try to access undefined 'control' property
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      // Suppress errors from browser extensions trying to access 'control' property
      if (event.message?.includes("Cannot read properties of undefined (reading 'control')") ||
          event.filename?.includes("content_script.js")) {
        event.preventDefault();
        event.stopPropagation();
        return false;
      }
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const errorString = String(event.reason || '');
      // Suppress promise rejections from browser extensions
      if (errorString.includes("Cannot read properties of undefined (reading 'control')") ||
          errorString.includes("content_script")) {
        event.preventDefault();
        return false;
      }
    };

    window.addEventListener('error', handleError, true);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError, true);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /*
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };
*/
  // helper for additive translateY with parallax
  const ty = (mult = 0, extra = 0) =>
    `translateY(${BASE_Y + scrollY * mult + extra}px)`;

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/harpreet-nehar-05575118a/",
      icon: "💼",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/happysspace/",
      icon: "🏀",
    },

  ];


  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    emailjs.init({ publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const payload = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      // Validate environment variables
      const service = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateOwner = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_OWNER;
      const templateAuto = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_AUTO;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!service || !templateOwner || !publicKey) {
        const missing = [];
        if (!service) missing.push('VITE_EMAILJS_SERVICE_ID');
        if (!templateOwner) missing.push('VITE_EMAILJS_TEMPLATE_ID_OWNER');
        if (!publicKey) missing.push('VITE_EMAILJS_PUBLIC_KEY');
        
        throw new Error(`Missing required environment variables: ${missing.join(', ')}. Please check your .env file.`);
      }

      // Owner notification (goes to your inbox)
      const ownerPromise = emailjs.send(
          service,
          templateOwner,
          {
            ...payload,
            // If your owner template uses {{to_email}}, pass it explicitly:
            to_email: 'harpreetneharyt@gmail.com',
          }
      );

      // Auto-reply (goes to the sender) - use templateAuto if available, otherwise use the main template
      const autoTemplate = templateAuto || import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      if (!autoTemplate) {
        throw new Error('Missing VITE_EMAILJS_TEMPLATE_ID_AUTO or VITE_EMAILJS_TEMPLATE_ID for auto-reply');
      }
      
      const autoPromise = emailjs.send(
          service,
          autoTemplate,
          payload
      );

      const results = await Promise.allSettled([ownerPromise, autoPromise]);

      // Check if any requests failed
      const failures = results.filter(result => result.status === 'rejected');
      if (failures.length > 0) {
        const errorMessages = failures.map((failure: any) => 
          failure.reason?.text || failure.reason?.message || 'Unknown error'
        );
        throw new Error(`Failed to send email: ${errorMessages.join(', ')}`);
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (err: any) {
      console.error("EmailJS error:", err);
      const errorMessage = err?.text || err?.message || err?.toString() || "Something went wrong. Please try again.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };



  return (
    <section
      id="contact"
      className="relative bg-yellow overflow-hidden py-16 md:py-24"
    >
      {/* Background pattern (shifted by BASE_Y) */}
      <div
        className="absolute left-0 right-0 bottom-0 opacity-10"
        style={{ top: -BASE_Y }}
      >
        <div className="grid grid-cols-6 auto-rows-[120px] gap-2 min-h-[calc(100%+240px)]">
          {Array.from({ length: 300 }).map((_, i) => (
            <div
              key={i}
              className="bg-black/20 border border-black/10"
            />
          ))}
        </div>
      </div>
      {/* Floating geometric elements wrapper (also shifted by BASE_Y) */}
      <div
        className="absolute left-0 right-0 bottom-0 pointer-events-none z-0"
        style={{ top: BASE_Y }}
      >
        <div
          className="absolute top-20 right-20 w-24 h-48 bg-stone border-2 border-black rotate-6 transition-transform duration-1000 hover-rotate"
          style={{
            transform: `rotate(6deg) ${ty(0.08)}`,
            ['--parallax-offset' as any]: `${parallaxSlow.offset}px`,
          }}
          ref={parallaxSlow.elementRef}
        />
        <div
          className="absolute bottom-20 left-20 w-32 h-16 bg-black transition-transform duration-1000"
          style={{
            transform: ty(-0.06),
            ['--parallax-offset' as any]: `${parallaxMedium.offset}px`,
          }}
          ref={parallaxMedium.elementRef}
        />
        <div
          className="absolute top-1/2 right-1/3 w-12 h-12 bg-white border-2 border-black -rotate-12 transition-transform duration-1000 hover-rotate"
          style={{
            transform: `rotate(-12deg) ${ty(0.05)}`,
            ['--parallax-offset' as any]: `${parallaxFast.offset}px`,
          }}
          ref={parallaxFast.elementRef}
        />

        {/* Dotted / halftone circles */}
        <div
          className="absolute top-32 left-16 w-40 h-40 halftone-circle-yellow transition-transform duration-1000"
          style={{
            transform: `${ty(0.04)} rotate(${scrollY * 0.02}deg)`,
          }}
        />
        <div
          className="absolute bottom-40 right-24 w-32 h-32 dotted-circle-white transition-transform duration-1000"
          style={{ transform: ty(-0.08) }}
        />
        <div
          className="absolute top-1/4 right-1/4 w-24 h-24 dotted-circle-pink transition-transform duration-1000"
          style={{ transform: ty(0.06) }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-28 h-28 halftone-circle-stone transition-transform duration-1000"
          style={{ transform: ty(0.07) }}
        />
      </div>

      {/* Content container (shifted by BASE_Y) */}
      <div
        className="container mx-auto px-8 md:px-16 max-w-7xl relative z-20"
        style={{ marginTop: BASE_Y }}
      >
        {/* Section Header */}
        <div {...headerAnimation.animationProps} className="text-center mb-0">
          <div className="inline-block bg-black text-white px-6 py-2 mb-6 brutal-shadow-sm hover-brutal">
            <p className="font-inter text-sm uppercase tracking-wider">
              {language === "de" ? "Lass uns sprechen" : "Let's Connect"}
            </p>
          </div>

          <h2 className="font-grotesk font-black text-black mb-8">
            {language === "de" ? "Bereit, etwas Großartiges zu schaffen?" : "Ready to Create Something Amazing?"}
          </h2>

          <div className="bg-white border-2 border-black p-6 brutal-shadow max-w-2xl mx-auto mt-6 mb-6 hover-lift">
            <p className="font-inter text-stone-dark text-lg leading-relaxed">
              {language === "de"
                ? "Ob neues Produkt, Rebranding oder einfach ein Austausch über Design - ich freue mich auf deine Nachricht."
                : "Whether you're looking to launch a new product, rebrand your company, or just want to chat about design, I'd love to hear from you."}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div {...formAnimation.animationProps}>
            <Card className="p-6 bg-white border-2 border-black brutal-shadow-lg hover-lift">
              <h3 className="font-grotesk font-bold text-black text-2xl mb-2">
                {language === "de" ? "NACHRICHT SENDEN" : "SEND MESSAGE"}
              </h3>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-yellow border-2 border-black flex items-center justify-center mx-auto mb-4 hover-scale transition-transform duration-300">
                    <span className="text-2xl text-black font-grotesk font-black">
                      ✓
                    </span>
                  </div>
                  <h4 className="font-grotesk font-bold text-black mb-2">
                    {language === "de" ? "NACHRICHT GESENDET!" : "MESSAGE SENT!"}
                  </h4>
                  <p className="font-inter text-stone-dark">
                    {language === "de"
                      ? "Danke für deine Nachricht. Ich melde mich innerhalb von 24 Stunden."
                      : "Thanks for reaching out. I'll get back to you within 24 hours."}
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  autoComplete="on"
                  noValidate
                  data-form-type="contact"
                >
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block font-inter font-bold text-black mb-2 text-sm"
                    >
                      NAME
                    </label>
                    <Input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={language === "de" ? "Dein Name" : "Your name"}
                      required
                      autoComplete="name"
                      data-form-field="name"
                      className="border-2 border-black focus:border-black focus:ring-0 bg-stone-light font-inter hover-scale transition-transform duration-200"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block font-inter font-bold text-black mb-2 text-sm"
                    >
                      EMAIL
                    </label>
                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={language === "de" ? "deine@email.com" : "your@email.com"}
                      required
                      autoComplete="email"
                      data-form-field="email"
                      className="border-2 border-black focus:border-black focus:ring-0 bg-stone-light font-inter hover-scale transition-transform duration-200"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block font-inter font-bold text-black mb-2 text-sm"
                    >
                      MESSAGE
                    </label>
                    <Textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={language === "de" ? "Erzähl mir von deinem Projekt..." : "Tell me about your project..."}
                      rows={5}
                      required
                      autoComplete="off"
                      data-form-field="message"
                      className="border-2 border-black focus:border-black focus:ring-0 bg-stone-light font-inter resize-none hover-scale transition-transform duration-200"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-black text-white border-2 border-black font-grotesk font-bold uppercase tracking-wide hover:bg-yellow hover:text-black brutal-shadow-sm hover-brutal transition-all duration-300"
                  > {loading
                      ? (language === "de" ? "Wird gesendet..." : "Sending...")
                      : (language === "de" ? "Nachricht senden" : "Send Message")}
                    <Mail className="ml-2 size-4" />
                  </Button>
                  {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
                </form>
              )}
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Direct Contact Block */}
            {/* Social Links */}
            <div {...socialAnimation.animationProps}
                 className="bg-black text-white p-6 brutal-shadow-lg hover-lift">
              <h4 className="font-grotesk font-bold text-yellow text-xl mb-6">
                {language === "de" ? "ONLINE VERBINDEN" : "CONNECT ONLINE"}
              </h4>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                    <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors group
                        bg-yellow border-2 border-black hover:bg-yellow hover-brutal duration-300 font-grotesk font-bold uppercase"
                    >
                    <span className="text-lg">
                      {social.icon}
                    </span>
                      <div className="flex-1">
                      <span className="font-roboto text-sm text-foreground group-hover:text-purple transition-colors">
                        {social.name}
                      </span>
                      </div>
                      <ExternalLink className="size-4 text-muted-foreground group-hover:text-purple transition-colors"/>
                    </a>
                ))}
              </div>

            </div>

            {/* Chat on WhatsApp */}
            <div {...cvAnimation.animationProps}
                 className="bg-white border-2 border-black p-6 brutal-shadow text-center hover-lift">
              <h4 className="font-grotesk font-bold text-black text-xl mb-4">
                {language === "de" ? "CHAT AUF WHATSAPP" : "CHAT ON WHATSAPP"}
              </h4>
              <a
                  href="https://wa.me/4369918211764"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow text-black border-2 border-black px-6 py-3 font-grotesk font-bold uppercase tracking-wide hover:bg-yellow-dark brutal-shadow-sm hover-brutal transition-all duration-300">
                <MessageCircle className="inline mr-2 size-4 align-text-bottom"/>
                {language === "de" ? "Auf WhatsApp schreiben" : "Chat on WhatsApp"}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-black"/>
    </section>
  );
}

export default ContactSection;