import type { Metadata } from 'next'

export function generateMetadata(): Metadata {
    return {
        title: 'Tiranga Crane Service - Expert Crane Solutions for Your Construction Needs',
        description: 'Tiranga Crane Service offers top-quality crane rentals and mechanical engineering services for all types of construction projects. Specializing in industrial, commercial, and infrastructure projects.',
        keywords: 'crane service, construction, mechanical engineering, pipe line, structural steel, MS tanks, industrial cranes, commercial construction, infrastructure projects',
        authors: [{ name: 'Tiranga Crane Service' }],
        creator: 'Tiranga Crane Service',
        publisher: 'Tiranga Crane Service',
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
        openGraph: {
            title: 'Tiranga Crane Service - Expert Crane Solutions',
            description: 'Top-quality crane rentals and mechanical engineering services for all types of construction projects.',
            url: 'https://www.tirangacraneservice.com',
            siteName: 'Tiranga Crane Service',
            images: [
                {
                    url: 'https://www.tirangacraneservice.com/og-image.jpg',
                    width: 1200,
                    height: 630,
                    alt: 'Tiranga Crane Service',
                },
            ],
            locale: 'en_IN',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Tiranga Crane Service - Expert Crane Solutions',
            description: 'Top-quality crane rentals and mechanical engineering services for all types of construction projects.',
            images: ['https://www.tirangacraneservice.com/twitter-image.jpg'],
            creator: '@TirangaCrane',
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        icons: {
            icon: '/favicon.ico',
            shortcut: '/favicon-96x96.png',
            apple: '/apple-touch-icon.png',
        },
        manifest: '/site.webmanifest',
        alternates: {
            canonical: 'https://www.tirangacraneservice.com',
        },
    }
}

export function generateSiteMetadata(): Metadata {
    const siteMetadata = generateMetadata()
    return {
        ...siteMetadata,
        title: 'Home | Tiranga Crane Service', // Override the title for the home page
    }
}