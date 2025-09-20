import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import {
  ArrowLeft,
  Download,
  Mail,
  ExternalLink,
} from "lucide-react";

interface ContactPageProps {
  onBack: () => void;
}

export function ContactPage({ onBack }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: "💼",
    },
    {
      name: "Dribbble",
      url: "https://dribbble.com",
      icon: "🏀",
    },
    { name: "Behance", url: "https://behance.net", icon: "🎨" },
    { name: "Twitter", url: "https://twitter.com", icon: "🐦" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-8 -ml-4 hover:bg-secondary font-roboto"
          >
            <ArrowLeft className="mr-2 size-4" />
            Back to work
          </Button>

          <h1 className="font-impact text-4xl md:text-6xl lg:text-7xl tracking-tight leading-none mb-6">
            Let's create something
            <br />
            <span className="text-purple">
              amazing together
            </span>
          </h1>

          <p className="font-roboto text-xl text-muted-foreground leading-relaxed max-w-2xl">
            I'm always interested in discussing new
            opportunities, design challenges, or simply
            connecting with fellow creatives. Drop me a line!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-4 bg-card border-border">
            <h2 className="font-impact text-2xl tracking-tight mb-6">
              Send a message
            </h2>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-lime/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-lime">✓</span>
                </div>
                <h3 className="font-roboto text-lg font-medium mb-2">
                  Message sent!
                </h3>
                <p className="font-roboto text-muted-foreground">
                  Thanks for reaching out. I'll get back to you
                  within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block font-roboto text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-input-background border-border focus:border-accent focus:ring-accent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-roboto text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="bg-input-background border-border focus:border-accent focus:ring-accent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-roboto text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hello..."
                    rows={6}
                    required
                    className="bg-input-background border-border focus:border-accent focus:ring-accent resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-purple hover:bg-purple/90 text-white font-roboto"
                >
                  Send Message
                  <Mail className="ml-2 size-4" />
                </Button>
              </form>
            )}
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <Card className="p-8 bg-card border-border">
              <h3 className="font-impact text-xl tracking-tight mb-4">
                Get in touch directly
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple/20 rounded-full flex items-center justify-center">
                    <Mail className="size-5 text-purple" />
                  </div>
                  <div>
                    <p className="font-roboto text-sm text-muted-foreground">
                      Email
                    </p>
                    <a
                      href="mailto:hello@portfolio.com"
                      className="font-roboto text-foreground hover:text-purple transition-colors"
                    >
                      hello@portfolio.com
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            {/* CV Download */}
            <Card className="p-8 bg-card border-border">
              <h3 className="font-impact text-xl tracking-tight mb-4">
                Resume
              </h3>
              <p className="font-roboto text-muted-foreground mb-4">
                Download my latest resume to learn more about my
                experience and skills.
              </p>
              <Button
                variant="outline"
                className="w-full border-border hover:bg-lime/10 hover:border-lime font-roboto"
              >
                Download CV
                <Download className="ml-2 size-4" />
              </Button>
            </Card>

            {/* Social Links */}
            <Card className="p-8 bg-card border-border">
              <h3 className="font-impact text-xl tracking-tight mb-4">
                Connect
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors group"
                  >
                    <span className="text-lg">
                      {social.icon}
                    </span>
                    <div className="flex-1">
                      <span className="font-roboto text-sm text-foreground group-hover:text-purple transition-colors">
                        {social.name}
                      </span>
                    </div>
                    <ExternalLink className="size-4 text-muted-foreground group-hover:text-purple transition-colors" />
                  </a>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}