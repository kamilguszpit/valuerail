import { MetadataRoute } from 'next';
import { siteConfig } from '../lib/config';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = siteConfig.metadata.baseUrl;

    return {
        rules: {
            userAgent: '*',
            allow: [...siteConfig.robots.allow],
            disallow: [...siteConfig.robots.disallow],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
