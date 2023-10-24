import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Find Metaphors',
  description: 'Created by Shihan Vidulanka',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head><link rel="icon" href="find-metaphors-favicon-color.png" sizes="any" /></head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
