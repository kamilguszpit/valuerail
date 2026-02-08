import { MetadataRoute } from 'next';
import { siteConfig } from '../lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteConfig.metadata.baseUrl;

    // Define your static routes here
    const routes = [
        '',
        '/temp',
        // Add more static routes
    ];

    // Filter out excluded routes from config
    const filteredRoutes = routes.filter(route =>
        !siteConfig.sitemap.exclude.some(excludePath => route.startsWith(excludePath))
    );

    return filteredRoutes.map(route => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }));
}
