export const SITE = {
  name: "Harpreet",
  brand: "Happydesign",
  title: "Harpreet | UX/UI & Brand Designer",
  description: {
    de: "Portfolio von Harpreet: UX/UI- und Brand-Design, Case Studies und Projekte aus Wien. Schwerpunkte: digitale Produkte, Markenidentität und nutzerzentriertes Design.",
    en: "Portfolio of Harpreet: UX/UI and brand design, case studies and projects from Vienna. Focus on digital products, brand identity, and user-centered design.",
  },
  url: "https://harpreet-n.github.io",
  locale: "de_AT",
  localeAlternate: "en_US",
  email: "harpreetneharyt@gmail.com",
  location: "Vienna, Austria",
  sameAs: [
    "https://www.linkedin.com/in/harpreet-nehar-05575118a/",
    "https://www.instagram.com/happysspace/",
  ],
  whatsapp: "https://wa.me/4369918211764",
  keywords: [
    "UX designer",
    "UI designer",
    "brand designer",
    "portfolio",
    "Vienna",
    "Wien",
    "case studies",
    "product design",
    "Grafikdesign",
  ],
} as const;

export function siteUrl(path = ""): string {
  const base = SITE.url.replace(/\/$/, "");
  if (!path) return `${base}/`;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

export function absoluteAssetUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return siteUrl(normalized);
}
