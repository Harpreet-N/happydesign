import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { SITE } from "../config/site";
import { projects } from "../data/projects";
import { localizeProject } from "../data/projects";
import {
  getServiceBySlug,
  getServiceContent,
  getServiceSlugFromPath,
} from "../data/services";
import {
  applyPageSeo,
  buildCreativeWorkJsonLd,
  buildPersonJsonLd,
  buildServiceJsonLd,
  buildWebsiteJsonLd,
} from "../lib/seo";

export function SeoManager() {
  const location = useLocation();
  const { language } = useLanguage();
  const projectSlug = location.pathname.match(/\/project\/([^/]+)/)?.[1];
  const serviceSlug = getServiceSlugFromPath(location.pathname);

  useEffect(() => {
    const description =
      language === "de" ? SITE.description.de : SITE.description.en;

    if (serviceSlug) {
      const service = getServiceBySlug(serviceSlug);
      if (service) {
        const content = getServiceContent(service, language);
        applyPageSeo({
          title: content.seoTitle,
          description: content.seoDescription,
          path: `/${serviceSlug}`,
          jsonLd: [
            buildPersonJsonLd(),
            buildServiceJsonLd({
              name: content.title,
              description: content.seoDescription,
              path: `/${serviceSlug}`,
            }),
          ],
        });
        return;
      }
    }

    if (location.pathname.startsWith("/project/") && projectSlug) {
      const project = projects.find((item) => item.slug === projectSlug);
      if (project) {
        const localized = localizeProject(project, language);
        applyPageSeo({
          title: `${localized.title} | ${SITE.name} Portfolio`,
          description: localized.summary,
          path: `/project/${projectSlug}`,
          type: "article",
          jsonLd: [
            buildPersonJsonLd(),
            buildCreativeWorkJsonLd({
              title: localized.title,
              description: localized.summary,
              path: `/project/${projectSlug}`,
              year: localized.year,
              category: localized.category,
            }),
          ],
        });
        return;
      }
    }

    if (location.pathname === "/impressum") {
      applyPageSeo({
        title:
          language === "de"
            ? `Impressum | ${SITE.name}`
            : `Legal Notice | ${SITE.name}`,
        description:
          language === "de"
            ? "Impressum und rechtliche Informationen zum Portfolio von Harpreet."
            : "Legal notice and contact information for Harpreet's portfolio.",
        path: "/impressum",
        jsonLd: buildPersonJsonLd(),
      });
      return;
    }

    if (location.pathname === "/datenschutz") {
      applyPageSeo({
        title:
          language === "de"
            ? `Datenschutz | ${SITE.name}`
            : `Privacy Policy | ${SITE.name}`,
        description:
          language === "de"
            ? "Datenschutzerklärung für das Portfolio von Harpreet."
            : "Privacy policy for Harpreet's portfolio website.",
        path: "/datenschutz",
        jsonLd: buildPersonJsonLd(),
      });
      return;
    }

    applyPageSeo({
      title: SITE.title,
      description,
      path: "/",
      jsonLd: [buildPersonJsonLd(), buildWebsiteJsonLd()],
    });
  }, [language, location.pathname, projectSlug, serviceSlug]);

  return null;
}
