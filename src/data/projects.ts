// Import all project assets
import diabetesLogo from '@/assets/project/diabetes/logo.svg';
import diabetesCover from '@/assets/project/diabetes/cover.png';
import diabetesStylescape from '@/assets/project/diabetes/stylescape.png';
import diabetesComponent from '@/assets/project/diabetes/component.png';
import diabetesDesktop1 from '@/assets/project/diabetes/desktop_1.png';
import diabetesDesktop from '@/assets/project/diabetes/desktop.png';
import diabetesOldImg from '@/assets/project/diabetes/diabaer/img.png';
import diabetesOldImg1 from '@/assets/project/diabetes/diabaer/img_1.png';
import diabetesPdf from '@/assets/project/files/Nehar_Harpreet_Diabetes.pdf';

import caffeeLogo from '@/assets/project/caffee/logo.png';
import caffeeCover from '@/assets/project/caffee/cover.png';
import caffeeStyle from '@/assets/project/caffee/style.png';
import caffeePage from '@/assets/project/caffee/page.png';
import caffeePage2 from '@/assets/project/caffee/page2.png';

import appDiabetesStart from '@/assets/project/appDiabetes/start.png';
import appDiabetesFood from '@/assets/project/appDiabetes/food.png';
import appDiabetesMessen from '@/assets/project/appDiabetes/messen.png';
import appDiabetesQuiz from '@/assets/project/appDiabetes/quiz.png';
import appDiabetesOld1 from '@/assets/project/appDiabetes/old/old1.png';
import appDiabetesOldMemory from '@/assets/project/appDiabetes/old/memorygame.png';
import appDiabetesOldQuiz from '@/assets/project/appDiabetes/old/quiz.png';
import appDiabetesOldExplain from '@/assets/project/appDiabetes/old/explain.png';

import xocoatlLogo from '@/assets/project/xocoatl/logo.png';
import xocoatlHero from '@/assets/project/xocoatl/hero.png';
import xocoatlStylescape from '@/assets/project/xocoatl/stylescape.png';
import xocoatlFontSide from '@/assets/project/xocoatl/FontSide.jpg';
import xocoatlBackSide from '@/assets/project/xocoatl/BackSide.png';
import xocoatlLanding1 from '@/assets/project/xocoatl/bean_scene_coffee_landingpage.png';
import xocoatlLanding2 from '@/assets/project/xocoatl/bean_scene_coffee_landingpage1.png';

import agilityLogo from '@/assets/project/agility/logo.svg';
import agilityCard from '@/assets/project/agility/card.svg';
import agilityProduct from '@/assets/project/agility/product.png';
import agilityPoster from '@/assets/project/agility/poster.png';
import agilityMerch from '@/assets/project/agility/merch.svg';

import burritoCover from '@/assets/project/burrito/cover.png';
import burritoHero from '@/assets/project/burrito/hero.png';
import burritoStylescape from '@/assets/project/burrito/stylescape.png';
import burritoPackung from '@/assets/project/burrito/packung.png';
import burritoMobile from '@/assets/project/burrito/mobile.png';
import burritoMockup from '@/assets/project/burrito/mockup.png';
import burritoPoster from '@/assets/project/burrito/poster.png';
import burritoPoster2 from '@/assets/project/burrito/poster2.png';
import burritoUntersetzer from '@/assets/project/burrito/untersetzer.png';
import burritoKellner from '@/assets/project/burrito/kellner.png';

import tailmateCover from '@/assets/project/tailmate/cover.png';
import tailmateHero from '@/assets/project/tailmate/hero.png';
import tailmateLogo1 from '@/assets/project/tailmate/logo1.png';
import tailmatePattern from '@/assets/project/tailmate/pattern.png';
import tailmateSticker from '@/assets/project/tailmate/sticker.png';
import tailmateStylescape from '@/assets/project/tailmate/stylescape.png';

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
  problem: string;
  problemGallery?: string[];
  process: string;
  solution: string;
  results: string;
  gallery: string[];
  links?: string[];
  files?: string[];
}


export const projects: Project[] = [
  {
    id: "1",
    title: "MyDiabetes – Website Redesign",
    slug: "mydiabetes",
    tags: ["UX/UI", "Web Redesign", "Healthcare", "Case Study"],
    cover: diabetesLogo,
    heroImage: diabetesCover,
    summary:
        "A complete redesign of the Diabär association’s website to improve accessibility, structure, and emotional connection for children and families affected by diabetes.",
    category: "UX/UI Design",
    year: "2023",
    overview:
        "The MyDiabetes project was a redesign of the Diabär association’s website, originally focused on children and families affected by Type 1 and Type 2 diabetes. The old website suffered from poor responsiveness, unclear structure, and outdated visuals. The goal was to create a modern, user-friendly platform that conveys trust, community, and hope while making essential resources easier to access. The redesign emphasizes clarity, accessibility, and a child-friendly design language, supported by new branding and a modular design system.",
    problem:
        "The previous Diabär website was outdated, text-heavy, and not responsive. Its unclear navigation and lack of visual identity made it difficult for users—especially parents and children—to find reliable information, connect with the community, or access services such as events, downloads, or support groups.",
    process:
        "The redesign began with a full content and competitor audit to identify strengths and weaknesses of existing diabetes-related platforms. User research, including personas and use cases, informed the requirements for accessibility, clarity, and emotional tone. A new visual identity was developed, including a color palette, typography, and logo, to reflect a more modern and supportive brand. Wireframes and prototypes were created for desktop and mobile, followed by hi-fi designs that integrated a modular component library. The user experience was planned around simplified navigation, community features, and relevant resources." +
        " If you are more interested in the process in the Links section you can find a pdf with the whole process (Competitor Audit, Product analysis, Use-Case, User Stories, User Flow and Component Library",
    solution:
        "The final design introduces a clear, responsive structure with improved navigation and an accessible, family-friendly visual identity. Key improvements include a simplified homepage, event and booking functionality, a dedicated children’s section, and integration of educational resources. A modern design system ensures consistency across all pages while reflecting the values of support, community, and professionalism.",
    results:
        "The MyDiabetes redesign delivers a structured, engaging, and inclusive platform tailored to children, families, and medical professionals. The solution increases usability, improves emotional resonance, and ensures that vital information is easy to find. By modernizing the Diabär brand and creating a scalable design system, the project enhances both user trust and organizational credibility. Click the first link in the 'Links and Files' section to see the actual website.",
    gallery: [
      diabetesStylescape,
      diabetesComponent,
      diabetesDesktop1,
      diabetesDesktop,
    ],
    problemGallery: [
      diabetesOldImg,
      diabetesOldImg1,
    ],
    links: [
      "https://diabetesvernetzt.at/",
      diabetesPdf,
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
    cover: caffeeLogo,
    heroImage: caffeeCover,
    summary:
        "A modern website concept for a historic Trieste coffeehouse, highlighting Viennese café tradition with a multilingual, mobile-first menu and refined brand presentation.",
    category: "Web Design & Branding",
    year: "2024",
    overview:
        "The concept repositions Caffé Stella Polare as a classic coffeehouse in Trieste: keeping the prominent historic wordmark (recreated in a Copperplate-like style), choosing colors that fit the city while avoiding wine red, and applying a consistent photo treatment. The information architecture prepares for DE/EN/IT, with the German version mocked up. The menu is optimized for smartphones and the location is easy to find. Cultural programming (readings, music, small exhibitions) is showcased to reflect the café’s role in the city’s scene.",
    problem:
        "The café’s web presence lacked a clear connection to its roots as a Viennese-style coffeehouse and didn’t emphasize heritage or location. The client wanted to avoid ‘gelateria’ aesthetics, keep the recognizable sign style, select Trieste-appropriate colors (no wine red), add a distinct photo effect, support DE/EN/IT, and make the menu truly usable on phones while keeping the address effortless to find.",
    problemGallery: [

    ],
    process:
        "The project was structured as a focused design exercise, covering research and ideation, imagery and copy sourcing, logo and wordmark refinement, wireframing, and the creation of desktop and mobile layouts. The final compositions were assembled using sourced imagery, typography tests, a defined layout system, and image-treatment explorations.",
    solution:
        "A refined visual cooperate design. The site architecture supports DE/EN/IT; the presented German version includes a home narrative (history + culture), a mobile-first menu card, and a clear ‘Find us’ section with address. Branding and UI elements reinforce the traditional café identity while feeling current.",

    results:
        "Delivered desktop and mobile mockups demonstrating brand clarity, faster menu scanning on mobile, and a stronger sense of place and heritage. The final layouts highlight events and culture, improve wayfinding to Via Dante Alighieri 14, and establish a scalable base for multilingual rollout.",

    gallery: [
      caffeeCover,
      caffeeStyle,
      caffeePage,
      caffeePage2,
    ]
  },
  {
    id: "3",
    title: "MyDiabetes – Mobile Game Redesign",
    slug: "mydiabetes-game",
    tags: ["UX/UI", "Mobile App", "Gamification", "Healthcare"],
    cover: diabetesLogo,
    heroImage: diabetesCover,
    summary:
        "A redesign of the MyDiabetes educational mobile game that helps children learn about diabetes through play, blending gamification and health education with a modern visual identity.",
    category: "Mobile App UX/UI",
    year: "2023",
    overview:
        "The MyDiabetes game app was developed as an educational tool for children to learn about diabetes in an engaging and playful way. Inspired by the mechanics of simple interactive games, the app allows children to care for an avatar by feeding them, giving insulin, and managing daily routines. The redesign task focused on modernizing the app’s interface, improving usability, and creating a cohesive stylescape to align the visual identity with the educational goals.",
    problem:
        "The existing app had outdated visuals, lacked consistency, and failed to keep children engaged. The user interface was not intuitive, and the overall design did not reflect the educational purpose or emotional tone required for young audiences learning about diabetes.",
    problemGallery: [
        appDiabetesOld1,
        appDiabetesOldMemory,
        appDiabetesOldQuiz,
        appDiabetesOldExplain,
    ],
    process:
        "The redesign began with an analysis of the existing app, identifying gaps in usability and visual engagement. A stylescape was developed to define a modern, child-friendly aesthetic using playful colors, rounded shapes, and clear iconography. Wireframes and high-fidelity mockups were created to redesign core interactions, including avatar care (feeding, insulin management) and game-like mechanics inspired by pool-style play. The design process emphasized both fun and clarity, ensuring educational content remained central.",
    solution:
        "The final redesign delivers a vibrant, accessible, and engaging app experience. The updated interface introduces a playful yet educational visual language, guiding children through diabetes-related tasks in a way that feels like a game. The avatar interaction system makes learning approachable and fun, while a modular stylescape ensures consistency across screens and future updates.",
    results:
        "The redesigned MyDiabetes game app successfully combines education and entertainment, making it easier for children to understand diabetes management in a safe and interactive way. The modernized design increases engagement, improves clarity, and aligns with the broader mission of supporting children and families affected by diabetes.",
    gallery: [
      appDiabetesStart,
      appDiabetesFood,
      appDiabetesMessen,
      appDiabetesQuiz,
    ],
  },
  {
    id: "4",
    title: "Xocoatl – Der Kakao der Azteken",
    slug: "xocoatl-branding",
    tags: [
      "Branding",
      "Logo Design",
      "Packaging",
      "Web Design",
      "Identity",
      "Brand Guide"
    ],
    cover: xocoatlLogo,
    heroImage: xocoatlHero,
    summary: "Branding for Xocoatl: modernizing a traditional Aztec cocoa drink with authenticity, quality, and sustainability in mind.",
    category: "Brand Identity & Packaging",
    year: "2024",
    overview: "Xocoatl is a visual identity project aimed at bringing a traditional Aztec cocoa drink into the modern supermarket space. The design was crafted to balance tradition with modernity, emphasizing authenticity, strength, and transparency. Across logo, packaging, web and merchandise, the brand aims to feel noble and sustainable.",
    problem: "Traditional cocoa branding often leans on clichés, lacks storytelling, and rarely conveys the story of pure ingredients and heritage clearly. Xocoatl needed a visual identity that elevates its roots, communicates values of quality and sustainability, and stands out in competitive retail packaging.",
    process: "The work started with concept development around heritage, ingredient purity, and visual storytelling. A stylescape was created to unify logo, typography, color, illustration and imagery. Packaging designs were prototyped along with web/landing concepts and merchandise. All assets were consolidated into a brand guide to ensure consistency across touchpoints.",
    solution: "Delivered a full brand identity including a strong wordmark/logo, illustrations, packaging, website/landing page and merchandise designs. Visual style conveys both tradition and modernity using robust typography, earthy palettes, and clean layouts. Brand guide ensures visual consistency and scalability.",
    results: "The identity gives Xocoatl a refined and authentic presence in retail. Packaging and visual materials feel premium, appealing to conscious consumers. The web landing enhances brand narrative. Merchandise extends recognition. The brand guide sets up Xocoatl for future growth and high-quality extensions.",
    gallery: [
        xocoatlLogo,
        xocoatlStylescape,
        xocoatlFontSide,
        xocoatlBackSide,
        xocoatlLanding1,
        xocoatlLanding2,
    ],
  },
  {
    id: "5",
    title: "Agility Plus",
    slug: "agility-plus",
    tags: ["UX/UI", "Branding", "Product Design", "Sports Tech", "Rehabilitation"],
    cover: agilityLogo,
    heroImage: agilityLogo,
    summary: "Agility Plus is a modular, digital training system that combines physical agility with cognitive challenges through LED-guided exercises and an app-based platform.",
    category: "UX/UI & Product Design",
    year: "2025",
    overview: "Agility Plus is a mobile, modular coordination training system designed to enhance both body and mind. Using a 7x7 LED grid combined with an app, it enables realistic, reaction-based training for athletes, coaches, and rehabilitation professionals. The system is weatherproof, portable, and scalable — from children’s training to professional sports and therapy use.",
    problem: "Traditional training methods are outdated, monotonous, and lack cognitive engagement. They often fail to provide measurable progress, leading to low motivation, therapy dropouts, and increased injury risk. Trainers and therapists are limited by inefficient 1:1 formats and lack innovative tools for scalable, personalized group training.",
    process: "The concept was developed through extensive prototyping and real-world testing with football clubs, athletes, physiotherapists, and sports scientists. Over 20 test sessions and 50+ user surveys informed the design, focusing on usability, gamification, and measurable outcomes. Insights from startup mentors and health professionals shaped the MVP and app functionality.",
    solution: "Agility Plus integrates LED-based movement cues with app-controlled training programs and gamified challenges. Its modular design allows quick setup indoors or outdoors, while future sensor integration will enable detailed performance analytics and AI-driven feedback.",
    results: "Early prototypes demonstrated strong user engagement, high motivation, and positive feedback from both athletes and rehabilitation experts. The system improves training efficiency, reduces injury risks, and creates a fun, measurable experience. Agility Plus is set to become a new standard in sports and therapy training.",
    gallery: [
        agilityCard,
        agilityProduct,
        agilityPoster,
        agilityMerch
    ],
    links: ["https://www.instagram.com/agility.plus/", "https://preview-4ccc8c2f--agility-plus-ignite.lovable.app/?fbclid=PAZXh0bgNhZW0CMTEAAacxjyUuJ47Ak5oaRTnneGoVNjYld6n0-19TlMYUaioZMgB3nOXxbpxlPqqEFg_aem_-Q9QmzZlM6w5h1UlSn0GrQ"],
  },
  {
    id: "6",
    title: "Burrito Casa",
    slug: "burrito-casa",
    tags: ["Branding", "Concept Project", "Food Service"],
    cover: burritoCover,
    heroImage: burritoHero,
    summary:
        "A self-initiated concept project exploring how a modern burrito and taco brand could look and feel across digital and physical touchpoints.",
    category: "Concept / Branding",
    year: "2023",
    overview:
        "Burrito Casa is a speculative design project where I imagined creating the branding and digital presence for a playful, modern burrito and taco restaurant. The goal was to explore how vibrant visual identity, bold typography, and fun illustrations could merge into a cohesive brand system.",
    problem:
        "There wasn’t a real client — this was a creative challenge I set myself to push branding, UI/UX, and identity design skills within the food industry.",
    process:
        "I sketched out initial moodboards, developed a stylescape, created logo iterations, and designed mockups for both digital and physical applications such as menus, packaging, social media, and a mobile ordering experience.",
    solution:
        "A bold, rebellious brand identity with vibrant colors, modern typography, and playful illustrations that challenge clichés around Mexican food branding. The concept extends across packaging, merch, and a mobile ordering app.",
    results:
        "As a concept project, Burrito Casa demonstrates my ability to develop a complete brand system from scratch, combining strategy, identity design, and user experience into one cohesive vision.",
    gallery: [
      burritoStylescape,
      burritoPackung,
      burritoMobile,
      burritoMockup,
      burritoPoster,
      burritoPoster2,
      burritoUntersetzer,
      burritoKellner,
    ],
  },
  {
    id: "7",
    title: "TailMate",
    slug: "tailmate",
    tags: ["Branding", "UI/UX Design", "Concept Project"],
    cover: tailmateCover,
    heroImage: tailmateHero,
    summary:
        "A concept project reimagining a modern dog adoption platform with a fresh brand identity, playful illustrations, and a user-friendly website experience.",
    category: "Concept / Branding",
    year: "2024",
    overview:
        "TailMate is a self-initiated project born from my curiosity about the adoption process. While researching, I noticed many adoption websites felt outdated and lacked emotional design. I set out to rebrand and redesign the experience, creating a modern, warm, and approachable platform that better connects people with their future pets.",
    problem:
        "Many dog adoption websites struggle with outdated interfaces, inconsistent branding, and a lack of engaging storytelling that truly highlights each pet’s uniqueness.",
    process:
        "I developed a playful brand identity, designed a stylescape with warm colors and paw-inspired elements, and built mockups for the adoption flow. The process also included creating digital and physical brand assets like stickers, mugs, and merchandise to extend the identity.",
    solution:
        "A modern adoption website concept with an approachable design system, friendly illustrations, and a seamless user flow. The brand identity reinforces warmth, trust, and joy—values central to finding a furry companion.",
    results:
        "As a conceptual project, TailMate demonstrates my ability to combine branding and UX/UI into a cohesive digital product. It highlights how thoughtful design can transform a traditionally functional website into an emotionally engaging experience.",
    gallery: [
        tailmateLogo1,
        tailmatePattern,
        tailmateSticker,
        tailmateStylescape,
    ],
    links: ["https://sun-foyer-82177953.figma.site/"]
  },
];