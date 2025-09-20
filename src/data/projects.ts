export interface Project {
  id: string;
  title: string;
  slug: string;
  tags: string[];
  cover: string;
  summary: string;
  category: string;
  year: string;
  overview: string;
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
    tags: ["Mobile App", "UX/UI", "Productivity"],
    cover:
      "https://images.unsplash.com/photo-1750056393326-8feed2a1c34f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbWFydHBob25lJTIwbW9ja3VwJTIwcHJvZHVjdHxlbnwxfHx8fDE3NTgyMzAxNzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    summary:
      "A comprehensive fitness tracking app designed to help users reach their wellness goals through personalized workout plans and nutrition guidance.",
    category: "Mobile Application",
    year: "2024",
    overview:
      "Agility Plus reimagines fitness tracking by combining AI-powered workout recommendations with intuitive nutrition tracking. The app focuses on creating sustainable habits rather than quick fixes.",
    problem:
      "Existing fitness apps often overwhelm users with too many features or provide generic workout plans that don't adapt to individual progress and preferences.",
    process:
      "We conducted extensive user research with 150+ fitness enthusiasts, created detailed user personas, and iteratively tested prototypes through multiple design sprints.",
    solution:
      "A streamlined interface that learns from user behavior to suggest optimal workout times, exercises, and nutrition goals. The app features adaptive difficulty scaling and community challenges.",
    results:
      "Launch resulted in 50K+ downloads in the first month, 4.8 App Store rating, and 73% user retention after 30 days.",
    gallery: [
      "https://images.unsplash.com/photo-1750056393326-8feed2a1c34f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbWFydHBob25lJTIwbW9ja3VwJTIwcHJvZHVjdHxlbnwxfHx8fDE3NTgyMzAxNzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU4MTc5ODYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
  },
  {
    id: "2",
    title: "Caffè Stella Polare",
    slug: "caffe-stella-polare",
    tags: ["Branding", "Interior Design", "Restaurant"],
    cover:
      "https://images.unsplash.com/photo-1657523623537-acd1e79cb2cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzU4MjMwMTcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    summary:
      "Complete brand identity and interior design for an artisanal coffee roastery, blending Italian heritage with modern minimalism.",
    category: "Brand Identity",
    year: "2023",
    overview:
      "Caffè Stella Polare combines traditional Italian coffee culture with contemporary design sensibilities, creating a unique third-space experience for coffee enthusiasts.",
    problem:
      "The client needed to differentiate their artisanal coffee shop in a saturated market while honoring their Italian family heritage and appealing to modern consumers.",
    process:
      "Brand discovery workshops, competitor analysis, heritage research, and collaborative design sessions with the family owners to understand their vision and values.",
    solution:
      "A cohesive brand system featuring a custom logotype inspired by astronomical navigation, warm earth tones, and interior design that balances industrial elements with cozy textures.",
    results:
      "Grand opening exceeded sales projections by 140%, featured in local design publications, and became a community gathering space with 95% customer satisfaction ratings.",
    gallery: [
      "https://images.unsplash.com/photo-1657523623537-acd1e79cb2cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzU4MjMwMTcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1739918041927-f9001c82ac88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwYnJhbmRpbmclMjBkZXNpZ258ZW58MXx8fHwxNzU4MjMwMTcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
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
    year: "2024",
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
    cover:
      "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU4MTc5ODYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    summary:
      "A Chrome extension that accelerates Tailwind CSS development with intelligent class suggestions and live preview features.",
    category: "Developer Tools",
    year: "2024",
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
      "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU4MTc5ODYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
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