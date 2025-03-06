/**
 * @returns {import("next").MetadataRoute.Sitemap}
 */
export default function sitemap() {
    return [
        {
            url: 'http://localhost:3000/',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: 'http://localhost:3000/apropos',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5
        },
        {
            url: 'http://localhost:3000/contact',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.6
        },
        {
            url: 'http://localhost:3000/events/hiit',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.3
        },
        {
            url: 'http://localhost:3000/events/martial',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.3
        },
        {
            url: 'http://localhost:3000/events/yoga',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.3
        },
    ]
} 