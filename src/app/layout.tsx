import type { Metadata, Viewport } from 'next'
import { EB_Garamond } from 'next/font/google'
import { ReactNode } from 'react'

import './globals.css'

const ebGaramondSerif = EB_Garamond({
  variable: '--font-eb-garamond-serif',
  subsets: ['latin'],
})

export const title = 'João Paulo Hotequil'

export const description =
  'Working in the Information Technology field since 2017, starting with hardware and transitioning to software in 2019. Maintains a consistent study routine, enhancing both soft and hard skills through courses, certifications, projects, books, and lectures. Demonstrates belief in the potential of technology as a tool for decentralization and for providing solutions to customers and companies. Exhibits curiosity, consistency, and focus, exploring various areas to address problems effectively. Prioritizes accessibility, responsiveness, performance, semantics, SEO, usability, testing, YAGNI, KISS, security, and adherence to quality and design standards. Collaborates with teams to create solutions that improve process times, reduce operational costs, facilitate and increase purchases, integrate systems, enable broader device compatibility for applications, document projects and workflows, and conduct application testing.'

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
