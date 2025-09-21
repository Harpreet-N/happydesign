export interface Project {
  id: string;
  title: string;
  slug: string;
  tags: string[];
  cover: string;
  heroImage?: string;
  summary: string;
  category: string;
  year: string;
  overview: string;
  overviewShort?: string;
  problem: string;
  process: string;
  solution: string;
  results: string;
  gallery: string[];
}



export const projects: Project[] = [
  {
    id: "1",
    title: "Agility Plus",
    slug: "agility-plus",
    tags: ["UX/UI", "Branding", "Product Design", "Sports Tech", "Rehabilitation"],
    cover: "../../src/assets/project/agility/logo.svg",
    heroImage: "../../src/assets/project/agility/logo.svg",
    summary: "Agility Plus is a modular, digital training system that combines physical agility with cognitive challenges through LED-guided exercises and an app-based platform.",
    category: "UX/UI & Product Design",
    year: "2025",
    overview: "Agility Plus is a mobile, modular coordination training system designed to enhance both body and mind. Using a 7x7 LED grid combined with an app, it enables realistic, reaction-based training for athletes, coaches, and rehabilitation professionals. The system is weatherproof, portable, and scalable — from children’s training to professional sports and therapy use.",
    overviewShort: "Agility Plus is a mobile, modular coordination training system designed to enhance both body and mind. Using a 7x7 LED grid combined with an app, it enables realistic, reaction-based training for athletes, coaches, and rehabilitation professionals. The system is weatherproof, portable, and scalable — from children’s training to professional sports and therapy use.",
    problem: "Traditional training methods are outdated, monotonous, and lack cognitive engagement. They often fail to provide measurable progress, leading to low motivation, therapy dropouts, and increased injury risk. Trainers and therapists are limited by inefficient 1:1 formats and lack innovative tools for scalable, personalized group training.",
    process: "The concept was developed through extensive prototyping and real-world testing with football clubs, athletes, physiotherapists, and sports scientists. Over 20 test sessions and 50+ user surveys informed the design, focusing on usability, gamification, and measurable outcomes. Insights from startup mentors and health professionals shaped the MVP and app functionality.",
    solution: "Agility Plus integrates LED-based movement cues with app-controlled training programs and gamified challenges. Its modular design allows quick setup indoors or outdoors, while future sensor integration will enable detailed performance analytics and AI-driven feedback.",
    results: "Early prototypes demonstrated strong user engagement, high motivation, and positive feedback from both athletes and rehabilitation experts. The system improves training efficiency, reduces injury risks, and creates a fun, measurable experience. Agility Plus is set to become a new standard in sports and therapy training.",
    gallery: [
        "../../src/assets/project/agility/card.svg",
        "../../src/assets/project/agility/product.png",
      "../../src/assets/project/agility/poster.png"
    ],
  },
  {
    id: "2",
    title: "Caffé Stella Polare",
    slug: "caffe-stella-polare",
    tags: [
      "Web Design",
      "UX/UI",
      "Branding",
      "Responsive",
      "Menu Design",
    ],
    cover: "../../src/assets/project/caffee/logo.png",
    heroImage: "../../src/assets/project/caffee/cover.png",
    summary:
        "A modern website concept for a historic Trieste coffeehouse, highlighting Viennese café tradition with a multilingual, mobile-first menu and refined brand presentation.",
    category: "Web Design & Branding",
    year: "2025",
    overview:
        "The concept repositions Caffé Stella Polare as a classic coffeehouse in Trieste: keeping the prominent historic wordmark (recreated in a Copperplate-like style), choosing colors that fit the city while avoiding wine red, and applying a consistent photo treatment. The information architecture prepares for DE/EN/IT, with the German version mocked up. The menu is optimized for smartphones and the location is easy to find. Cultural programming (readings, music, small exhibitions) is showcased to reflect the café’s role in the city’s scene.",
    overviewShort:
        "Redesign of the Caffé Stella Polare website focusing on Viennese coffeehouse heritage, a Copperplate-style wordmark, Trieste-inspired colors (no wine red), a ‘cool’ photo effect, and a multilingual, mobile-first menu and location page.",

    problem:
        "The café’s web presence lacked a clear connection to its roots as a Viennese-style coffeehouse and didn’t emphasize heritage or location. The client wanted to avoid ‘gelateria’ aesthetics, keep the recognizable sign style, select Trieste-appropriate colors (no wine red), add a distinct photo effect, support DE/EN/IT, and make the menu truly usable on phones while keeping the address effortless to find. :contentReference[oaicite:2]{index=2}",

    process:
        "Scoped as a 20-hour design exercise: 2h research/ideation, 2h sourcing imagery and copy, 2h logo/wordmark rebuild, 2h wireframes, 6h desktop (home + inner), and 6h smartphone (menu + one additional page). Final comps assembled from sourced imagery (Yelp/Tripadvisor), typography test, layout system, and image-treatment explorations. :contentReference[oaicite:3]{index=3} :contentReference[oaicite:4]{index=4}",

    solution:
        "A refined visual system with a Copperplate-inspired headline mark, legible body type, and a Trieste-influenced palette that avoids wine red. A consistent ‘cool’ photo effect unifies imagery. The site architecture supports DE/EN/IT; the presented German version includes a home narrative (history + culture), a mobile-first menu card, and a clear ‘Find us’ section with address near Ponte Rosso. Branding and UI elements reinforce the traditional café identity while feeling current. :contentReference[oaicite:5]{index=5} :contentReference[oaicite:6]{index=6}",

    results:
        "Delivered desktop and mobile mockups demonstrating brand clarity, faster menu scanning on mobile, and a stronger sense of place and heritage. The final layouts highlight events and culture, improve wayfinding to Via Dante Alighieri 14, and establish a scalable base for multilingual rollout. :contentReference[oaicite:7]{index=7}",

    gallery: [
        "../../src/assets/project/caffee/cover.png",
        "../../src/assets/project/caffee/page.png",
        "../../src/assets/project/caffee/style.png",
    ]
  },
  {
    id: "3",
    title: "Echo",
    slug: "echo",
    tags: ["Web App", "SaaS", "Communication"],
    cover:
      "https://images.unsplash.com/photo-1631006732121-a6da2f4864d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGludGVyZmFjZSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTgyMzAxNzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    summary:
      "A collaborative platform that transforms how remote teams communicate through intelligent message organization and context-aware notifications.",
    category: "SaaS Platform",
    year: "2025",
    overview:
      "Echo addresses the communication chaos in remote work by providing intelligent message threading, priority-based notifications, and seamless integration with existing workflows.",
    problem:
      "Remote teams struggle with communication overload, important messages getting lost in chat noise, and lack of context when switching between different communication tools.",
    process:
      "6-month user research phase with 200+ remote workers, prototype testing, A/B testing of core features, and iterative design improvements based on user feedback.",
    solution:
      "An AI-powered communication hub that automatically organizes conversations by context, provides smart summaries, and integrates with popular productivity tools.",
    results:
      "Beta launch with 15 enterprise clients, 89% reduction in communication-related confusion reported by users, and $2M seed funding secured.",
    gallery: [
      "https://images.unsplash.com/photo-1631006732121-a6da2f4864d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGludGVyZmFjZSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTgyMzAxNzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
  },
  {
    id: "4",
    title: "Burrito Casa",
    slug: "burrito-casa",
    tags: ["Mobile App", "Food Service", "E-commerce"],
    cover:
      "https://images.unsplash.com/photo-1739918041927-f9001c82ac88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwYnJhbmRpbmclMjBkZXNpZ258ZW58MXx8fHwxNzU4MjMwMTcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    summary:
      "A mobile ordering platform for a local burrito chain, featuring customizable orders and loyalty rewards.",
    category: "Mobile Commerce",
    year: "2023",
    overview:
      "Burrito Casa needed a digital transformation to compete with larger chains while maintaining their authentic, local brand identity.",
    problem:
      "Long wait times during peak hours, difficulty managing custom orders, and no system for customer loyalty or repeat business tracking.",
    process:
      "Restaurant operations analysis, customer journey mapping, staff interviews, and co-design sessions with restaurant management.",
    solution:
      "A streamlined mobile app with visual order customization, real-time preparation tracking, and a gamified loyalty program that encourages repeat visits.",
    results:
      "40% increase in average order value, 60% reduction in order errors, and 300% growth in repeat customers within 6 months.",
    gallery: [
      "https://images.unsplash.com/photo-1739918041927-f9001c82ac88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwYnJhbmRpbmclMjBkZXNpZ258ZW58MXx8fHwxNzU4MjMwMTcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
  },
  {
    id: "5",
    title: "TailMate",
    slug: "tailmate",
    tags: ["Developer Tool", "Productivity"],
    cover: "../../src/assets/project/tailmate/logo.png",
    summary:
      "A Chrome extension that accelerates Tailwind CSS development with intelligent class suggestions and live preview features.",
    category: "Developer Tools",
    year: "2025",
    overview:
      "TailMate streamlines the Tailwind CSS development workflow by providing context-aware class suggestions and real-time visual feedback.",
    problem:
      "Developers spend significant time looking up Tailwind classes, making typos, and switching between documentation and code editors.",
    process:
      "Developer surveys, analysis of common Tailwind usage patterns, prototype testing with 50+ developers, and performance optimization.",
    solution:
      "An intelligent Chrome extension that provides autocomplete for Tailwind classes, live preview of changes, and integration with popular code editors.",
    results:
      "10K+ active users, 4.9 Chrome Web Store rating, featured in CSS-Tricks newsletter, and adopted by several design agencies.",
    gallery: [
        "../../src/assets/project/tailmate/logo.png",
        "../../src/assets/project/tailmate/pattern.png",
        "../../src/assets/project/tailmate/sticker.png",
    ],
  },
  {
    id: "6",
    title: "Xocoatl",
    slug: "xocoatl",
    tags: ["E-commerce", "Branding", "Luxury"],
    cover:
      "https://images.unsplash.com/photo-1688156045299-603034420e95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9tZXRyaWMlMjBhYnN0cmFjdCUyMGJhY2tncm91bmQlMjBtaW5pbWFsfGVufDF8fHx8MTc1ODIzMDE3MHww&ixlib=rb-4.1.0&q=80&w=1080",
    summary:
      "An artisanal chocolate brand and e-commerce platform celebrating ancient cacao traditions with modern sustainability practices.",
    category: "E-commerce",
    year: "2023",
    overview:
      "Xocoatl bridges ancient Mesoamerican chocolate traditions with contemporary luxury market expectations through storytelling and sustainable sourcing.",
    problem:
      "The premium chocolate market lacks authentic cultural storytelling and transparent sourcing information that modern conscious consumers demand.",
    process:
      "Cultural research, supply chain analysis, consumer interviews, brand strategy development, and sustainable packaging design.",
    solution:
      "A premium brand identity with educational content about cacao origins, transparent sourcing information, and an e-commerce platform that tells each chocolate's story.",
    results:
      "Launched with 12 luxury retailers, achieved break-even within 8 months, and won 'Best New Brand' at the Specialty Food Association awards.",
    gallery: [
      "https://images.unsplash.com/photo-1688156045299-603034420e95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9tZXRyaWMlMjBhYnN0cmFjdCUyMGJhY2tncm91bmQlMjBtaW5pbWFsfGVufDF8fHx8MTc1ODIzMDE3MHww&ixlib=rb-4.1.0&q=80&w=1080",
    ],
  },
];