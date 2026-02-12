import type { Metadata } from 'next'
import './globals.css'
import { Lexend, Montserrat, Inconsolata } from 'next/font/google'

const inconsolata = Inconsolata({
  subsets: ['latin'],
  variable: '--font-inconsolata',
})

const lexend = Lexend({ subsets: ['latin'], variable: '--font-lexend' })
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title:
    'Barking Studio | AI Development Studio & Product Lab',
  description:
    'Barking Studio builds intelligent products and helps companies navigate the AI landscape. From custom AI agents to mobile apps, we combine deep R&D with hands-on consulting to ship what matters.',
  icons: {
    icon: [
      { url: '/assets/favicon/favicon.ico' },
      {
        url: '/assets/favicon/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/assets/favicon/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: [{ url: '/assets/favicon/apple-touch-icon.png' }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark ${lexend.variable} ${montserrat.variable}`}
    >
      <head>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </head>
      <body className={`${inconsolata.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
