import type { Metadata, Viewport } from 'next'
import { EB_Garamond } from 'next/font/google'
import { ReactNode } from 'react'

import './globals.css'
import { description, title } from '@/app/constants'

const ebGaramondSerif = EB_Garamond({
  variable: '--font-eb-garamond-serif',
  subsets: ['latin'],
})

const fullImagePath = 'https://hotequil.tech/images/hotequil.png'

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: title }],
  keywords: [
    'information technology',
    'hardware',
    'software',
    'study routine',
    'soft skills',
    'hard skills',
    'courses',
    'certifications',
    'projects',
    'books',
    'lectures',
    'technology',
    'decentralization',
    'solutions',
    'customers',
    'companies',
    'curiosity',
    'consistency',
    'focus',
    'problem-solving',
    'accessibility',
    'responsiveness',
    'performance',
    'semantics',
    'seo',
    'usability',
    'testing',
    'yagni',
    'kiss',
    'security',
    'quality standards',
    'design standards',
    'collaboration',
    'process improvement',
    'cost reduction',
    'purchases',
    'system integration',
    'device compatibility',
    'documentation',
    'workflows',
    'application testing',
  ],
  openGraph: {
    title,
    description,
    locale: 'en_US',
    type: 'website',
    images: fullImagePath,
    siteName: title,
    url: 'https://hotequil.tech',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    images: [fullImagePath],
  },
  icons: [
    {
      url: '/images/hotequil.ico',
    },
  ],
}

export const viewport: Viewport = {
  themeColor: '#141414',
  colorScheme: 'only light',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en-US">
      <body
        className={`${ebGaramondSerif.variable} antialiased font-[family-name:var(--font-eb-garamond-serif)]`}
      >
        {children}
      </body>
    </html>
  )
}
