import type { Language } from "../context/LanguageContext";

export interface ServiceContent {
  title: string;
  headline: string;
  intro: string;
  benefits: string[];
  process: { title: string; steps: string[] };
  cta: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
}

export interface Service {
  slug: string;
  relatedProjects?: string[];
  de: ServiceContent;
  en: ServiceContent;
}

export const services: Service[] = [
  {
    slug: "logo",
    relatedProjects: ["xocoatl-branding", "burrito-casa", "tailmate"],
    de: {
      title: "Logo Design",
      headline: "Ein Logo, das deine Marke auf den ersten Blick erkennbar macht",
      intro:
        "Ich entwickle Logos, die zu deiner Marke passen — klar, einprägsam und einsetzbar auf Web, Print und Social Media. Von der ersten Skizze bis zu finalen Dateien für alle Kanäle.",
      benefits: [
        "Individuelles Logo-Konzept statt Template",
        "Varianten für hell/dunkel und kleine Größen",
        "Lieferung als SVG, PNG und Nutzungsrichtlinien",
        "Abgestimmt auf deine Zielgruppe und Branche",
        "Schnelle Abstimmung per E-Mail oder WhatsApp",
      ],
      process: {
        title: "So läuft ein Logo-Projekt ab",
        steps: [
          "Kurzes Briefing: Marke, Zielgruppe, Stilrichtung",
          "Moodboard und erste Entwürfe",
          "Feedback-Runde und Verfeinerung",
          "Finale Dateien und einfache Brand-Basics",
        ],
      },
      cta: "Logo-Projekt anfragen",
      seoTitle: "Logo Design Wien | Harpreet",
      seoDescription:
        "Professionelles Logo Design in Wien: einprägsame Markenzeichen für Startups und Unternehmen. Jetzt unverbindlich anfragen.",
      keywords: ["Logo Design", "Logo erstellen", "Grafikdesign Wien", "Branding"],
    },
    en: {
      title: "Logo Design",
      headline: "A logo that makes your brand recognizable at first glance",
      intro:
        "I create logos that fit your brand — clear, memorable, and ready for web, print, and social media. From first sketches to final files for every channel.",
      benefits: [
        "Custom logo concepts, not templates",
        "Variants for light/dark and small sizes",
        "Delivery as SVG, PNG, and usage guidelines",
        "Aligned with your audience and industry",
        "Fast feedback via email or WhatsApp",
      ],
      process: {
        title: "How a logo project works",
        steps: [
          "Short briefing: brand, audience, style direction",
          "Moodboard and first concepts",
          "Feedback round and refinement",
          "Final files and simple brand basics",
        ],
      },
      cta: "Request a logo project",
      seoTitle: "Logo Design Vienna | Harpreet",
      seoDescription:
        "Professional logo design in Vienna: memorable brand marks for startups and businesses. Get in touch for a free inquiry.",
      keywords: ["logo design", "custom logo", "brand mark", "Vienna designer"],
    },
  },
  {
    slug: "website",
    relatedProjects: ["mydiabetes", "caffe-stella-polare", "weight-loss-conversion"],
    de: {
      title: "Website Design",
      headline: "Websites, die vertrauen schaffen und Besucher zu Kunden führen",
      intro:
        "Ich gestalte moderne, responsive Websites mit klarer Struktur, starkem UX und einer visuellen Sprache, die zu deiner Marke passt — von Landing Pages bis zu mehrseitigen Auftritten.",
      benefits: [
        "Mobile-first und schnell verständlich",
        "Klare Informationsarchitektur und CTAs",
        "Design-System für konsistente Seiten",
        "Optimiert für Conversion und Vertrauen",
        "Umsetzung in Zusammenarbeit mit Entwicklung möglich",
      ],
      process: {
        title: "Ablauf Website-Projekt",
        steps: [
          "Ziele, Zielgruppe und Seitenstruktur definieren",
          "Wireframes und visuelles Konzept",
          "High-Fidelity Design (Desktop & Mobile)",
          "Übergabe für Entwicklung oder Launch-Begleitung",
        ],
      },
      cta: "Website-Projekt besprechen",
      seoTitle: "Website Design Wien | UX/UI | Harpreet",
      seoDescription:
        "Website Design und UX/UI in Wien: responsive Sites, Landing Pages und klare Nutzerführung. Kontakt für dein Projekt.",
      keywords: ["Website Design", "Webdesign Wien", "Landing Page", "UX Design"],
    },
    en: {
      title: "Website Design",
      headline: "Websites that build trust and turn visitors into clients",
      intro:
        "I design modern, responsive websites with clear structure, strong UX, and visuals that match your brand — from landing pages to multi-page sites.",
      benefits: [
        "Mobile-first and easy to understand",
        "Clear information architecture and CTAs",
        "Design system for consistent pages",
        "Optimized for conversion and trust",
        "Handoff for development available",
      ],
      process: {
        title: "Website project flow",
        steps: [
          "Define goals, audience, and site structure",
          "Wireframes and visual concept",
          "High-fidelity design (desktop & mobile)",
          "Handoff for development or launch support",
        ],
      },
      cta: "Discuss your website project",
      seoTitle: "Website Design Vienna | UX/UI | Harpreet",
      seoDescription:
        "Website design and UX/UI in Vienna: responsive sites, landing pages, and clear user flows. Contact me for your project.",
      keywords: ["website design", "web design Vienna", "landing page", "UX design"],
    },
  },
  {
    slug: "branding",
    relatedProjects: ["xocoatl-branding", "burrito-casa", "caffe-stella-polare"],
    de: {
      title: "Branding",
      headline: "Eine Marke, die überall gleich stark wirkt",
      intro:
        "Ich entwickle Markenidentitäten mit Logo, Farben, Typografie und visuellen Regeln — damit dein Auftritt auf Website, Social Media und Print wiedererkennbar ist.",
      benefits: [
        "Ganzheitliche Markenidentität",
        "Stylescape und visuelle Richtung",
        "Anwendungen für Web, Print und Social",
        "Brand Guide für konsistente Nutzung",
        "Erfahrung aus echten Case Studies",
      ],
      process: {
        title: "Branding-Prozess",
        steps: [
          "Markenanalyse und Positionierung",
          "Visuelle Exploration (Stylescape)",
          "Logo, Farbe, Typo und Bildsprache",
          "Brand Guide und Touchpoint-Beispiele",
        ],
      },
      cta: "Branding anfragen",
      seoTitle: "Branding & Markenidentität Wien | Harpreet",
      seoDescription:
        "Branding und Markenidentität in Wien: Logo, visuelle Sprache und Brand Guide. Für Startups und etablierte Marken.",
      keywords: ["Branding", "Markenidentität", "Corporate Design", "Brand Guide"],
    },
    en: {
      title: "Branding",
      headline: "A brand that feels equally strong everywhere",
      intro:
        "I build brand identities with logo, color, typography, and visual rules — so your presence stays recognizable across web, social, and print.",
      benefits: [
        "Holistic brand identity",
        "Stylescape and visual direction",
        "Applications for web, print, and social",
        "Brand guide for consistent usage",
        "Backed by real case study work",
      ],
      process: {
        title: "Branding process",
        steps: [
          "Brand analysis and positioning",
          "Visual exploration (stylescape)",
          "Logo, color, type, and imagery",
          "Brand guide and touchpoint examples",
        ],
      },
      cta: "Request branding",
      seoTitle: "Branding & Brand Identity Vienna | Harpreet",
      seoDescription:
        "Branding and brand identity in Vienna: logo, visual language, and brand guide for startups and growing businesses.",
      keywords: ["branding", "brand identity", "visual identity", "brand guide"],
    },
  },
  {
    slug: "rebranding",
    relatedProjects: ["mydiabetes", "focasma"],
    de: {
      title: "Rebranding",
      headline: "Deine Marke modernisieren — ohne die Seele zu verlieren",
      intro:
        "Wenn dein Auftritt veraltet wirkt oder nicht mehr zu deinem Angebot passt, helfe ich beim Rebranding: von der Analyse bis zum neuen, konsistenten Erscheinungsbild.",
      benefits: [
        "Bestandsaufnahme und klare Positionierung",
        "Schrittweise Modernisierung möglich",
        "Neue Visuals bei Wiedererkennung",
        "Aktualisierung von Web und Marketing-Material",
        "Strukturierter Übergang für dein Team",
      ],
      process: {
        title: "Rebranding-Ablauf",
        steps: [
          "Audit: was funktioniert, was nicht",
          "Neue Markenrichtung und Moodboards",
          "Redesign von Logo und Kern-Assets",
          "Rollout auf Website und Kanäle",
        ],
      },
      cta: "Rebranding besprechen",
      seoTitle: "Rebranding Wien | Marken-Relaunch | Harpreet",
      seoDescription:
        "Rebranding in Wien: Marke modernisieren mit klarer Strategie und neuem Design. Unverbindlich Kontakt aufnehmen.",
      keywords: ["Rebranding", "Marken-Relaunch", "Redesign", "Corporate Design"],
    },
    en: {
      title: "Rebranding",
      headline: "Modernize your brand without losing its soul",
      intro:
        "If your presence feels outdated or no longer matches your offer, I help with rebranding — from analysis to a fresh, consistent look.",
      benefits: [
        "Audit and clear positioning",
        "Phased modernization possible",
        "New visuals with retained recognition",
        "Updates for web and marketing assets",
        "Structured transition for your team",
      ],
      process: {
        title: "Rebranding flow",
        steps: [
          "Audit: what works, what doesn't",
          "New brand direction and moodboards",
          "Redesign of logo and core assets",
          "Rollout on website and channels",
        ],
      },
      cta: "Discuss rebranding",
      seoTitle: "Rebranding Vienna | Brand Refresh | Harpreet",
      seoDescription:
        "Rebranding in Vienna: refresh your brand with strategy and design. Contact me for a conversation.",
      keywords: ["rebranding", "brand refresh", "brand redesign", "visual update"],
    },
  },
  {
    slug: "social-media",
    relatedProjects: ["burrito-casa", "agility-plus"],
    de: {
      title: "Social Media Design",
      headline: "Content, der im Feed hängen bleibt und zu deiner Marke passt",
      intro:
        "Ich gestalte Social-Media-Visuals, Templates und Kampagnen-Assets — einheitlich, markenkonform und bereit für Instagram, LinkedIn, TikTok und mehr.",
      benefits: [
        "Post-Templates und Story-Formate",
        "Einheitlicher Look über alle Kanäle",
        "Kampagnen- und Launch-Visuals",
        "Formate für Reels, Carousels und Ads",
        "Schnelle Turnaround-Zeiten",
      ],
      process: {
        title: "Social Media Design",
        steps: [
          "Kanäle und Ziele klären",
          "Template-System und Beispiel-Posts",
          "Batch-Produktion oder laufende Pakete",
          "Anpassungen nach Performance-Feedback",
        ],
      },
      cta: "Social Media Design anfragen",
      seoTitle: "Social Media Design Wien | Harpreet",
      seoDescription:
        "Social Media Design in Wien: Posts, Stories und Kampagnen-Visuals für Instagram, LinkedIn und mehr. Jetzt anfragen.",
      keywords: ["Social Media Design", "Instagram Design", "Content Design", "Grafikdesign"],
    },
    en: {
      title: "Social Media Design",
      headline: "Content that stops the scroll and fits your brand",
      intro:
        "I design social visuals, templates, and campaign assets — consistent, on-brand, and ready for Instagram, LinkedIn, TikTok, and more.",
      benefits: [
        "Post templates and story formats",
        "Consistent look across channels",
        "Campaign and launch visuals",
        "Formats for reels, carousels, and ads",
        "Fast turnaround",
      ],
      process: {
        title: "Social media design flow",
        steps: [
          "Clarify channels and goals",
          "Template system and sample posts",
          "Batch production or ongoing packages",
          "Refinements based on performance",
        ],
      },
      cta: "Request social media design",
      seoTitle: "Social Media Design Vienna | Harpreet",
      seoDescription:
        "Social media design in Vienna: posts, stories, and campaign visuals for Instagram, LinkedIn, and more.",
      keywords: ["social media design", "instagram graphics", "content design"],
    },
  },
  {
    slug: "social-media-manager",
    de: {
      title: "Social Media Management",
      headline: "Deine Kanäle professionell betreut — mit Plan und konsistentem Look",
      intro:
        "Ich unterstütze dich bei Planung, Gestaltung und Veröffentlichung deiner Social-Media-Inhalte — damit deine Marke regelmäßig sichtbar bleibt, ohne dass du alles selbst machen musst.",
      benefits: [
        "Redaktionsplan und Content-Kalender",
        "Design und Texte in deinem Markenton",
        "Posting und Community-Basics",
        "Reporting und Optimierungsvorschläge",
        "Flexible Pakete nach Bedarf",
      ],
      process: {
        title: "Social Media Betreuung",
        steps: [
          "Kanal-Setup und Zieldefinition",
          "Monatlicher Content-Plan",
          "Erstellung und Freigabe der Posts",
          "Auswertung und nächste Schritte",
        ],
      },
      cta: "Social Media Management anfragen",
      seoTitle: "Social Media Manager Wien | Harpreet",
      seoDescription:
        "Social Media Management in Wien: Planung, Design und Betreuung für Instagram und LinkedIn. Pakete auf Anfrage.",
      keywords: ["Social Media Manager", "Social Media Betreuung", "Content Planung"],
    },
    en: {
      title: "Social Media Management",
      headline: "Your channels managed professionally — with a plan and consistent look",
      intro:
        "I help with planning, design, and publishing your social content — so your brand stays visible regularly without you doing everything yourself.",
      benefits: [
        "Editorial plan and content calendar",
        "Design and copy in your brand voice",
        "Publishing and basic community care",
        "Reporting and optimization tips",
        "Flexible packages as needed",
      ],
      process: {
        title: "Social media management flow",
        steps: [
          "Channel setup and goal definition",
          "Monthly content plan",
          "Creation and approval of posts",
          "Review and next steps",
        ],
      },
      cta: "Request social media management",
      seoTitle: "Social Media Manager Vienna | Harpreet",
      seoDescription:
        "Social media management in Vienna: planning, design, and support for Instagram and LinkedIn.",
      keywords: ["social media manager", "social media management", "content planning"],
    },
  },
  {
    slug: "video",
    de: {
      title: "Video & Motion",
      headline: "Bewegte Inhalte, die deine Botschaft klar transportieren",
      intro:
        "Ich konzipiere und gestalte Videos für Social Media, Produkte und Marken — von kurzen Clips bis zu erklärenden Motion-Graphics, visuell abgestimmt auf deinen Auftritt.",
      benefits: [
        "Konzept und Storyboard",
        "Motion Graphics und animierte Posts",
        "Formatoptimierung für Reels & Ads",
        "Einheitlicher Look mit deiner Marke",
        "Zusammenarbeit mit Videografen möglich",
      ],
      process: {
        title: "Video-Projekt",
        steps: [
          "Ziel und Format festlegen (Reel, Ad, Erklärvideo)",
          "Skript und visuelles Konzept",
          "Design, Animation und Schnitt-Koordination",
          "Export in den richtigen Formaten",
        ],
      },
      cta: "Video-Projekt anfragen",
      seoTitle: "Video Design & Motion Wien | Harpreet",
      seoDescription:
        "Video und Motion Design in Wien: Social Clips, Erklärvideos und Marken-Animationen. Jetzt Projekt besprechen.",
      keywords: ["Video Design", "Motion Graphics", "Social Media Video", "Erklärvideo"],
    },
    en: {
      title: "Video & Motion",
      headline: "Moving content that delivers your message clearly",
      intro:
        "I concept and design videos for social, products, and brands — from short clips to explainer motion graphics aligned with your visual identity.",
      benefits: [
        "Concept and storyboard",
        "Motion graphics and animated posts",
        "Format optimization for reels and ads",
        "Consistent look with your brand",
        "Collaboration with videographers possible",
      ],
      process: {
        title: "Video project flow",
        steps: [
          "Define goal and format (reel, ad, explainer)",
          "Script and visual concept",
          "Design, animation, and edit coordination",
          "Export in the right formats",
        ],
      },
      cta: "Request a video project",
      seoTitle: "Video & Motion Design Vienna | Harpreet",
      seoDescription:
        "Video and motion design in Vienna: social clips, explainers, and brand animations. Get in touch.",
      keywords: ["video design", "motion graphics", "social video", "explainer video"],
    },
  },
  {
    slug: "video-edits",
    de: {
      title: "Video-Schnitt & Bearbeitung",
      headline: "Rohmaterial wird zu fertigen Clips — schnell und markenkonform",
      intro:
        "Du lieferst Footage, ich schneide und gestalte daraus fertige Videos für Social Media, Web oder Präsentationen — mit Untertiteln, Branding und passenden Formaten.",
      benefits: [
        "Schnitt für Reels, YouTube und Ads",
        "Untertitel, Intro/Outro und Branding",
        "Farbkorrektur und Sound-Abstimmung",
        "Mehrere Format-Exporte aus einem Schnitt",
        "Klare Kommunikation per WhatsApp",
      ],
      process: {
        title: "Video-Bearbeitung",
        steps: [
          "Material und Ziel-Format klären",
          "Rough Cut und Feedback",
          "Feinschnitt, Text und Branding",
          "Finale Exporte liefern",
        ],
      },
      cta: "Video-Schnitt anfragen",
      seoTitle: "Video Schnitt & Bearbeitung Wien | Harpreet",
      seoDescription:
        "Video-Schnitt in Wien: Social Clips, Untertitel und Branding aus deinem Rohmaterial. Schnelle Umsetzung auf Anfrage.",
      keywords: ["Video Schnitt", "Video Bearbeitung", "Reels schneiden", "Video Editing"],
    },
    en: {
      title: "Video Editing",
      headline: "Raw footage turned into polished clips — fast and on-brand",
      intro:
        "You provide footage, I edit and shape it into finished videos for social, web, or presentations — with captions, branding, and the right formats.",
      benefits: [
        "Editing for reels, YouTube, and ads",
        "Captions, intro/outro, and branding",
        "Color and audio alignment",
        "Multiple format exports from one edit",
        "Clear communication via WhatsApp",
      ],
      process: {
        title: "Video editing flow",
        steps: [
          "Clarify footage and target format",
          "Rough cut and feedback",
          "Fine cut, text, and branding",
          "Deliver final exports",
        ],
      },
      cta: "Request video editing",
      seoTitle: "Video Editing Vienna | Harpreet",
      seoDescription:
        "Video editing in Vienna: social clips, captions, and branding from your raw footage. Contact for a quote.",
      keywords: ["video editing", "video cut", "reels editing", "post production"],
    },
  },
  {
    slug: "marketing",
    de: {
      title: "Marketing Design",
      headline: "Kampagnen-Visuals, die Aufmerksamkeit und Klicks bringen",
      intro:
        "Ich unterstütze dein Marketing mit Design für Ads, Landing Pages, E-Mail und Print — visuell stark und auf deine Zielgruppe ausgerichtet.",
      benefits: [
        "Ad-Creatives für Meta, Google und mehr",
        "Landing Pages mit Conversion-Fokus",
        "E-Mail- und Newsletter-Templates",
        "Flyer, Banner und Print-Kampagnen",
        "Einheitlicher Markenauftritt",
      ],
      process: {
        title: "Marketing-Design",
        steps: [
          "Kampagne und Kanäle definieren",
          "Visuelle Konzepte und Varianten",
          "Umsetzung und A/B-taugliche Formate",
          "Optimierung nach ersten Ergebnissen",
        ],
      },
      cta: "Marketing-Design anfragen",
      seoTitle: "Marketing Design Wien | Harpreet",
      seoDescription:
        "Marketing Design in Wien: Ads, Landing Pages und Kampagnen-Visuals. Design, das zu deinen Zielen passt.",
      keywords: ["Marketing Design", "Werbung Design", "Kampagnen Design", "Ad Creatives"],
    },
    en: {
      title: "Marketing Design",
      headline: "Campaign visuals that earn attention and clicks",
      intro:
        "I support your marketing with design for ads, landing pages, email, and print — visually strong and aligned with your audience.",
      benefits: [
        "Ad creatives for Meta, Google, and more",
        "Conversion-focused landing pages",
        "Email and newsletter templates",
        "Flyers, banners, and print campaigns",
        "Consistent brand presence",
      ],
      process: {
        title: "Marketing design flow",
        steps: [
          "Define campaign and channels",
          "Visual concepts and variants",
          "Production and test-ready formats",
          "Refinement based on early results",
        ],
      },
      cta: "Request marketing design",
      seoTitle: "Marketing Design Vienna | Harpreet",
      seoDescription:
        "Marketing design in Vienna: ads, landing pages, and campaign visuals aligned with your goals.",
      keywords: ["marketing design", "ad creatives", "campaign design", "digital marketing visuals"],
    },
  },
  {
    slug: "google-ads",
    de: {
      title: "Google Ads & Performance Creatives",
      headline: "Anzeigen-Design, das zu deinen Keywords und Zielen passt",
      intro:
        "Gute Google Ads brauchen klare Botschaften und starke Visuals. Ich gestalte Display-Banner, Responsive Ads und Landing-Elemente, die zu deinen Kampagnen und Suchintentionen passen.",
      benefits: [
        "Display- und Responsive-Ad-Formate",
        "Landing-Page-Elemente für bessere Quality Score",
        "Varianten für A/B-Tests",
        "Text-Bild-Kombinationen nach Best Practices",
        "Abstimmung mit deinem Ads-Setup",
      ],
      process: {
        title: "Google Ads Creatives",
        steps: [
          "Kampagnenziele und Zielgruppe klären",
          "Ad-Formate und Botschaften festlegen",
          "Creative-Set produzieren",
          "Iteration nach Performance-Daten",
        ],
      },
      cta: "Google Ads Design anfragen",
      seoTitle: "Google Ads Design Wien | Display Ads | Harpreet",
      seoDescription:
        "Google Ads Design in Wien: Display-Banner, Responsive Ads und Landing-Visuals. Creatives für bessere Klickraten.",
      keywords: ["Google Ads Design", "Display Ads", "PPC Creatives", "Werbung Google"],
    },
    en: {
      title: "Google Ads & Performance Creatives",
      headline: "Ad design aligned with your keywords and goals",
      intro:
        "Strong Google Ads need clear messages and solid visuals. I design display banners, responsive ads, and landing elements that match your campaigns and search intent.",
      benefits: [
        "Display and responsive ad formats",
        "Landing elements for better quality score",
        "Variants for A/B testing",
        "Copy-visual combos following best practices",
        "Aligned with your ads setup",
      ],
      process: {
        title: "Google Ads creative flow",
        steps: [
          "Clarify campaign goals and audience",
          "Define ad formats and messages",
          "Produce creative set",
          "Iterate based on performance data",
        ],
      },
      cta: "Request Google Ads design",
      seoTitle: "Google Ads Design Vienna | Display Ads | Harpreet",
      seoDescription:
        "Google Ads design in Vienna: display banners, responsive ads, and landing visuals for better click-through.",
      keywords: ["google ads design", "display ads", "ppc creatives", "search ads visuals"],
    },
  },
  {
    slug: "ux-ui",
    relatedProjects: ["bottle-pirates", "focasma", "mydiabetes"],
    de: {
      title: "UX/UI Design",
      headline: "Digitale Produkte, die Nutzer verstehen und gerne benutzen",
      intro:
        "Ich designe Apps und digitale Oberflächen mit Fokus auf Nutzerführung, Klarheit und Markenwirkung — von Wireframes bis zum fertigen UI, inklusive Design System.",
      benefits: [
        "User Research und klare User Flows",
        "Wireframes und interaktive Prototypen",
        "High-Fidelity UI für Web und Mobile",
        "Design Systems für Skalierung",
        "Hintergrund in Entwicklung für realistische Umsetzung",
      ],
      process: {
        title: "UX/UI-Projekt",
        steps: [
          "Problem und Nutzer verstehen",
          "Struktur, Flows und Wireframes",
          "Visuelles Design und Komponenten",
          "Handoff und Begleitung bei Umsetzung",
        ],
      },
      cta: "UX/UI-Projekt anfragen",
      seoTitle: "UX/UI Design Wien | App Design | Harpreet",
      seoDescription:
        "UX/UI Design in Wien: Apps, Web-Apps und Design Systems. Nutzerzentriert mit Entwickler-Hintergrund.",
      keywords: ["UX Design", "UI Design", "App Design Wien", "Produktdesign"],
    },
    en: {
      title: "UX/UI Design",
      headline: "Digital products people understand and enjoy using",
      intro:
        "I design apps and digital interfaces focused on usability, clarity, and brand impact — from wireframes to polished UI, including design systems.",
      benefits: [
        "User research and clear user flows",
        "Wireframes and interactive prototypes",
        "High-fidelity UI for web and mobile",
        "Design systems for scale",
        "Development background for realistic handoff",
      ],
      process: {
        title: "UX/UI project flow",
        steps: [
          "Understand problem and users",
          "Structure, flows, and wireframes",
          "Visual design and components",
          "Handoff and implementation support",
        ],
      },
      cta: "Request a UX/UI project",
      seoTitle: "UX/UI Design Vienna | App Design | Harpreet",
      seoDescription:
        "UX/UI design in Vienna: apps, web apps, and design systems. User-centered with a developer background.",
      keywords: ["UX design", "UI design", "app design Vienna", "product design"],
    },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getServiceContent(
  service: Service,
  language: Language
): ServiceContent {
  return language === "de" ? service.de : service.en;
}

export const serviceSlugs = services.map((service) => service.slug);

const RESERVED_PATHS = new Set(["impressum", "datenschutz", "project"]);

/** Resolves a service slug from `/logo` or legacy `/services/logo`. */
export function getServiceSlugFromPath(pathname: string): string | undefined {
  const legacyMatch = pathname.match(/^\/services\/([^/]+)\/?$/);
  if (legacyMatch?.[1] && getServiceBySlug(legacyMatch[1])) {
    return legacyMatch[1];
  }

  const flatMatch = pathname.match(/^\/([^/]+)\/?$/);
  const slug = flatMatch?.[1];
  if (slug && !RESERVED_PATHS.has(slug) && getServiceBySlug(slug)) {
    return slug;
  }

  return undefined;
}
