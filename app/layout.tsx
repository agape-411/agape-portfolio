import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import { Analytics } from '@vercel/analytics/react'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})


export const metadata: Metadata = {
  metadataBase: new URL('https://agape-portfolio.vercel.app'),

  title: 'Agape Korrok | Web Developer',

  description:
    'Fullstack developer specializing in React, Next.js, modern UI systems, and high-performance web applications.',

  alternates: {
    canonical: 'https://agape-portfolio.vercel.app/',
  },

  openGraph: {
    title: 'Agape Korrok | Fullstack Developer',
    description:
      'Web developer specializing in React, Next.js, and modern digital experiences.',
    url: 'https://agape-portfolio.vercel.app/',
    siteName: 'Agape Portfolio',
    type: 'website',

    images: [
      {
        url: 'https://agape-portfolio.vercel.app/og-image-v2.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Agape Korrok - Web Developer',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Agape Korrok | Fullstack Developer',
    description:
      'Web developer specializing in React and Next.js.',
    images: [
      'https://agape-portfolio.vercel.app/og-image-v2.jpg',
    ],
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className='min-h-full flex flex-col'>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
