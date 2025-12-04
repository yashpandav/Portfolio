import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-jetbrains',
    display: 'swap',
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://yashpandav.dev'),
    title: {
        default: 'Yash Pandav | AI Engineer & Full Stack Developer',
        template: '%s | Yash Pandav',
    },
    description: 'Full Stack Developer & AI Engineer specializing in Agentic AI, RAG Systems, and scalable web applications. Building intelligent solutions with LangChain, Next.js, and modern AI technologies.',
    keywords: ['AI Engineer', 'Full Stack Developer', 'Agentic AI', 'RAG Systems', 'LangChain', 'Next.js', 'React', 'TypeScript', 'Machine Learning', 'Web Development', 'Software Engineer', 'Portfolio'],
    authors: [{ name: 'Yash Pandav', url: 'https://yashpandav.dev' }],
    creator: 'Yash Pandav',
    publisher: 'Yash Pandav',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Yash Pandav | AI Engineer & Full Stack Developer',
        description: 'Full Stack Developer & AI Engineer specializing in Agentic AI, RAG Systems, and scalable web applications.',
        url: 'https://yashpandav.dev',
        siteName: 'Yash Pandav Portfolio',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Yash Pandav - AI Engineer & Full Stack Developer',
            },
        ],
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Yash Pandav | AI Engineer & Full Stack Developer',
        description: 'Full Stack Developer & AI Engineer specializing in Agentic AI, RAG Systems, and scalable web applications.',
        images: ['/og-image.png'],
        creator: '@YashPandav22959',
        site: '@YashPandav22959',
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
    manifest: '/manifest.webmanifest',
    verification: {
        google: 'your-google-verification-code', // TODO: Add actual verification code
    },
    icons: {
        icon: '/favicon.png',
        shortcut: '/favicon.png',
        apple: '/favicon.png',
    },
};

export const viewport = {
    themeColor: '#000000',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Person',
                            name: 'Yash Pandav',
                            url: 'https://yashpandav.dev',
                            email: 'contact@yashpandav.dev',
                            image: 'https://yashpandav.dev/og-image.png',
                            sameAs: [
                                'https://github.com/yashpandav',
                                'https://linkedin.com/in/yashpandav',
                                'https://twitter.com/YashPandav22959',
                            ],
                            jobTitle: 'AI Engineer & Full Stack Developer',
                            worksFor: {
                                '@type': 'Organization',
                                name: 'Freelance',
                            },
                            description:
                                'Full Stack Developer & AI Engineer specializing in Agentic AI, RAG Systems, and scalable web applications.',
                        }),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'WebSite',
                            name: 'Yash Pandav Portfolio',
                            url: 'https://yashpandav.dev',
                            description: 'Portfolio of Yash Pandav, AI Engineer & Full Stack Developer',
                            author: {
                                '@type': 'Person',
                                name: 'Yash Pandav',
                            },
                        }),
                    }}
                />
            </head>
            <body className={`${inter.variable} ${jetbrainsMono.variable} ${playfair.variable} font-sans antialiased`}>
                {children}
            </body>
        </html>
    );
}
