import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://bulkwamsg.com';

    // Static pages
    const staticPages = [
        '',
        '/features',
        '/features/bulk-messaging',
        '/features/scheduling',
        '/features/contact-management',
        '/features/analytics',
        '/features/templates',
        '/features/excel-import',
        '/pricing',
        '/about',
        '/contact',
        '/privacy',
        '/terms',
        '/help',
    ];

    // Use case pages
    const useCases = [
        'real-estate',
        'ecommerce',
        'restaurants',
        'marketing-agencies',
        'small-businesses',
        'events',
        'education',
        'healthcare',
    ];

    // Guide pages
    const guides = [
        'how-to-send-bulk-whatsapp-messages',
        'whatsapp-marketing-strategy',
        'avoid-whatsapp-ban',
        'whatsapp-business-api-guide',
    ];

    // Free tools
    const tools = [
        'whatsapp-link-generator',
        'phone-number-formatter',
        'message-character-counter',
        'qr-code-generator',
    ];

    const staticUrls = staticPages.map((page) => ({
        url: `${baseUrl}${page}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: page === '' ? 1 : 0.8,
    }));

    const useCaseUrls = useCases.map((useCase) => ({
        url: `${baseUrl}/use-cases/${useCase}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    const guideUrls = guides.map((guide) => ({
        url: `${baseUrl}/guides/${guide}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    const toolUrls = tools.map((tool) => ({
        url: `${baseUrl}/tools/${tool}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...staticUrls, ...useCaseUrls, ...guideUrls, ...toolUrls];
}
