import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import { Toaster } from 'react-hot-toast'
import NextTopLoader from 'nextjs-toploader'

const poppins = Poppins({ subsets: ['latin'], weight: "400" })

export const metadata: Metadata = {
  title: "Dribble - Discover the World's Top Designer & Creative Professionals",
  description: 'Find Top Designers & Creative Professionals on Dribbble. We are where designers gain inspiration, feedback, community, and jobs. Your best resource to discover and connect with designers worldwide.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main>
            {children}
        </main>
        <Toaster position='top-center' reverseOrder={false} />
        <NextTopLoader color='#ffb6c1' />
      </body>
    </html>
  )
}
