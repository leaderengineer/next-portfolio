import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nodirbek Toshpulatov - Portfolio',
  description: 'Full-stack developer portfolio showcasing modern web development projects and skills',
  keywords: ['portfolio', 'developer', 'full-stack', 'web development', 'React', 'Next.js'],
  authors: [{ name: 'Nodirbek Toshpulatov' }],
  creator: 'Nodirbek Toshpulatov',
  openGraph: {
    title: 'Nodirbek Toshpulatov - Portfolio',
    description: 'Full-stack developer portfolio showcasing modern web development projects and skills',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
