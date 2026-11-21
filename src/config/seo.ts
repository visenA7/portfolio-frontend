import { siteConfig } from "./site";

export const defaultSeo = {
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
    canonical: siteConfig.url,
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: `${siteConfig.name} | ${siteConfig.title}`,
        description: siteConfig.description,
        siteName: siteConfig.name,
    },
    twitter: {
        cardType: "summary_large_image",
    },
};
