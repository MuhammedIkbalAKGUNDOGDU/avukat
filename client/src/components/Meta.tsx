import { useEffect } from "react";
import { useTranslation } from "react-i18next";

interface MetaProps {
  title: string;
  description?: string;
  keywords?: string;
}

export function Meta({ title, description, keywords }: MetaProps) {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    if (description) {
      const metaDescription = document.querySelector(
        'meta[name="description"]'
      );
      if (metaDescription) {
        metaDescription.setAttribute("content", description);
      } else {
        const meta = document.createElement("meta");
        meta.name = "description";
        meta.content = description;
        document.head.appendChild(meta);
      }
    }

    // Update meta keywords
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute("content", keywords);
      } else {
        const meta = document.createElement("meta");
        meta.name = "keywords";
        meta.content = keywords;
        document.head.appendChild(meta);
      }
    }

    // Update language attribute
    document.documentElement.lang = i18n.language;

    // Update direction for RTL languages
    if (i18n.language === "ar") {
      document.documentElement.dir = "rtl";
    } else {
      document.documentElement.dir = "ltr";
    }
  }, [title, description, keywords, i18n.language]);

  return null;
}
