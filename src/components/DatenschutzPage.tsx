import { ArrowLeft, Shield, Eye, Lock, FileText } from "lucide-react";
import { Button } from "./ui/button";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

interface DatenschutzPageProps {
  onBack: () => void;
}

export function DatenschutzPage({ onBack }: DatenschutzPageProps) {
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
            Back
          </Button>
          
          <div {...headerAnimation.animationProps}>
            <h1 className="font-grotesk font-black text-black">
              Datenschutz
              <span className="block text-lg font-inter font-normal text-stone-dark mt-2">
                Privacy Policy
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
                Privacy Overview
              </h2>
            </div>
            
            <div className="space-y-4 font-inter text-stone-dark">
              <p>
                This privacy policy explains how personal data is collected, used, and protected 
                when you visit this portfolio website. Your privacy is important to us, and we 
                are committed to protecting your personal information.
              </p>
              
              <p>
                This website is a personal portfolio showcasing design work and does not collect 
                personal data beyond standard web analytics for improving user experience.
              </p>
            </div>
          </div>

          {/* Data Collection Block */}
          <div {...dataCollectionAnimation.animationProps} className="bg-black text-white p-8 brutal-shadow-lg hover-lift">
            <div className="flex items-center mb-6">
              <Eye className="size-8 text-yellow mr-4 hover-scale transition-transform duration-300" />
              <h2 className="font-grotesk font-bold text-yellow">
                Data Collection
              </h2>
            </div>
            
            <div className="space-y-6 font-inter text-stone">
              <div>
                <h3 className="font-grotesk font-bold text-white text-lg mb-2">
                  Automatically Collected Data
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Referring website</li>
                  <li>Date and time of access</li>
                  <li>IP address (anonymized)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-grotesk font-bold text-white text-lg mb-2">
                  Contact Form Data
                </h3>
                <p>
                  When you use the contact form, we collect your name, email address, 
                  and message content solely for the purpose of responding to your inquiry.
                </p>
              </div>
            </div>
          </div>

          {/* Data Usage Block */}
          <div {...dataUsageAnimation.animationProps} className="bg-yellow border-2 border-black p-8 brutal-shadow hover-lift">
            <div className="flex items-center mb-6">
              <FileText className="size-8 text-black mr-4 hover-rotate transition-transform duration-300" />
              <h2 className="font-grotesk font-bold text-black">
                How We Use Your Data
              </h2>
            </div>
            
            <div className="space-y-4 font-inter text-black">
              <ul className="list-disc list-inside space-y-2">
                <li>To respond to your inquiries and communication</li>
                <li>To improve website functionality and user experience</li>
                <li>To analyze website traffic and usage patterns</li>
                <li>To ensure website security and prevent abuse</li>
              </ul>
              
              <p className="bg-black text-white p-4 border-2 border-black hover-scale transition-transform duration-300">
                <strong>We do not:</strong> sell, rent, or share your personal data with third parties 
                for marketing purposes. Your data is never used for commercial advertising.
              </p>
            </div>
          </div>

          {/* Data Protection Block */}
          <div {...protectionAnimation.animationProps} className="bg-stone-light border-2 border-black p-8 brutal-shadow hover-lift">
            <div className="flex items-center mb-6">
              <Lock className="size-8 text-black mr-4 hover-scale transition-transform duration-300" />
              <h2 className="font-grotesk font-bold text-black">
                Data Protection & Security
              </h2>
            </div>
            
            <div className="space-y-4 font-inter text-stone-dark">
              <p>
                We implement appropriate technical and organizational measures to protect 
                your personal data against unauthorized access, alteration, disclosure, or destruction.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="hover-scale transition-transform duration-300">
                  <h3 className="font-grotesk font-bold text-black text-lg mb-2">
                    Technical Measures
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>SSL/TLS encryption</li>
                    <li>Secure hosting infrastructure</li>
                    <li>Regular security updates</li>
                  </ul>
                </div>
                
                <div className="hover-scale transition-transform duration-300">
                  <h3 className="font-grotesk font-bold text-black text-lg mb-2">
                    Organizational Measures
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Limited data access</li>
                    <li>Data minimization principles</li>
                    <li>Regular privacy assessments</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Your Rights Block */}
          <div {...rightsAnimation.animationProps} className="bg-white border-2 border-black p-8 brutal-shadow hover-lift">
            <h2 className="font-grotesk font-bold text-black mb-6">
              Your Rights (GDPR)
            </h2>
            
            <div className="space-y-4 font-inter text-stone-dark">
              <p>
                Under the General Data Protection Regulation (GDPR), you have the following rights:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Right to access</strong> your personal data</li>
                  <li><strong>Right to rectification</strong> of incorrect data</li>
                  <li><strong>Right to erasure</strong> ("right to be forgotten")</li>
                  <li><strong>Right to restrict</strong> processing</li>
                </ul>
                
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Right to data portability</strong></li>
                  <li><strong>Right to object</strong> to processing</li>
                  <li><strong>Right to withdraw consent</strong></li>
                  <li><strong>Right to lodge a complaint</strong></li>
                </ul>
              </div>
              
              <p className="bg-yellow border-2 border-black p-4 mt-6 hover-scale transition-transform duration-300">
                To exercise any of these rights, please contact us at: 
                <strong> harpreetneharyt@gmail.com</strong>
              </p>
            </div>
          </div>

          {/* Contact & Updates Block */}
          <div {...contactAnimation.animationProps} className="bg-black text-white p-8 brutal-shadow-lg hover-lift">
            <h2 className="font-grotesk font-bold text-yellow mb-6">
              Contact & Updates
            </h2>
            
            <div className="space-y-4 font-inter text-stone">
              <p>
                If you have any questions about this privacy policy or our data practices, 
                please contact us at <strong className="text-white">harpreetneharyt@gmail.com</strong>
              </p>
              
              <p>
                This privacy policy was last updated on <strong className="text-white">December 2025</strong>.
                We may update this policy from time to time. Any changes will be posted on this page.
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