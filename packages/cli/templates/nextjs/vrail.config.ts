/**
 * ValueRail Configuration
 * 
 * This file controls the global settings for your application,
 * including SEO parameters (sitemap, robots.txt) and metadata.
 */

export const config = {
    metadata: {
        title: "ValueRail App",
        description: "Created with ValueRail CLI",
        baseUrl: "https://example.com", // Change this to your actual specific domain
    },
    sitemap: {
        // Routes to exclude from sitemap.xml
        exclude: ['/temp', '/admin'],
    },
    robots: {
        // Rules for robots.txt
        allow: ['/'],
        disallow: ['/temp', '/admin'],
    }
} as const;

export default config;
