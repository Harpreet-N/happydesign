import { SITE, absoluteAssetUrl, siteUrl } from "../config/site";

export interface PageSeo {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article";
  image?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const META_ATTR = "data-seo-managed";

function upsertMeta(
  attribute: "name" | "property",
  key: string,
  content: string
) {
  let element = document.head.querySelector(
    `meta[${attribute}="${key}"][${META_ATTR}]`
  ) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    element.setAttribute(META_ATTR, "true");
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector(
    `link[rel="${rel}"][${META_ATTR}]`
  ) as HTMLLinkElement | null;

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    element.setAttribute(META_ATTR, "true");
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}

function clearJsonLd() {
  document
    .head
    .querySelectorAll(`script[type="application/ld+json"][${META_ATTR}]`)
    .forEach((node) => node.remove());
}

function injectJsonLd(data: Record<string, unknown> | Record<string, unknown>[]) {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute(META_ATTR, "true");
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

export function applyPageSeo(seo: PageSeo) {
  const canonicalPath = seo.path ?? "/";
  const canonical = siteUrl(canonicalPath);
  const image = seo.image ?? absoluteAssetUrl("/happydesign.svg");
  const robots = seo.noindex ? "noindex, nofollow" : "index, follow";

  document.title = seo.title;

  upsertMeta("name", "description", seo.description);
  upsertMeta("name", "robots", robots);
  upsertMeta("name", "author", SITE.name);
  upsertMeta("name", "keywords", SITE.keywords.join(", "));

  upsertMeta("property", "og:title", seo.title);
  upsertMeta("property", "og:description", seo.description);
  upsertMeta("property", "og:type", seo.type ?? "website");
  upsertMeta("property", "og:url", canonical);
  upsertMeta("property", "og:site_name", SITE.brand);
  upsertMeta("property", "og:locale", SITE.locale);
  upsertMeta("property", "og:locale:alternate", SITE.localeAlternate);
  upsertMeta("property", "og:image", image);

  upsertMeta("name", "twitter:card", "summary_large_image");
  upsertMeta("name", "twitter:title", seo.title);
  upsertMeta("name", "twitter:description", seo.description);
  upsertMeta("name", "twitter:image", image);

  upsertLink("canonical", canonical);

  clearJsonLd();
  if (seo.jsonLd) {
    injectJsonLd(seo.jsonLd);
  }
}

export function buildPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.name,
    url: siteUrl("/"),
    jobTitle: "UX/UI & Brand Designer",
    email: `mailto:${SITE.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vienna",
      addressCountry: "AT",
    },
    sameAs: SITE.sameAs,
    knowsAbout: [
      "User Experience Design",
      "User Interface Design",
      "Brand Identity",
      "Design Systems",
      "Prototyping",
    ],
  };
}

export function buildWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${SITE.name} Portfolio`,
    alternateName: SITE.brand,
    url: siteUrl("/"),
    inLanguage: ["de", "en"],
    author: {
      "@type": "Person",
      name: SITE.name,
    },
  };
}

export function buildServiceJsonLd(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: siteUrl(input.path),
    provider: {
      "@type": "Person",
      name: SITE.name,
      url: siteUrl("/"),
    },
    areaServed: {
      "@type": "City",
      name: "Vienna",
    },
  };
}

export function buildCreativeWorkJsonLd(input: {
  title: string;
  description: string;
  path: string;
  year: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: input.title,
    description: input.description,
    url: siteUrl(input.path),
    datePublished: input.year,
    genre: input.category,
    creator: {
      "@type": "Person",
      name: SITE.name,
    },
  };
}
