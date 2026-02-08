import config from '../../vrail.config';

export const siteConfig = config;

export function getBaseUrl() {
    return config.metadata.baseUrl || 'http://localhost:3000';
}
