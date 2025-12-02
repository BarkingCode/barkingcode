import type { Metadata } from 'next'
import { Space_Mono } from 'next/font/google'

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
})

export const metadata: Metadata = {
  title: 'Sudoku X - The Sudoku You Deserve',
  description:
    'Experience Sudoku perfected. Clean design, daily challenges, global leaderboards, and six difficulty levels from Easy to Inhuman.',
  icons: {
    icon: [{ url: '/assets/xsudoku/logo-bg.svg' }],
    apple: [{ url: '/assets/xsudoku/logo-bg.svg' }],
  },
}

export default function XSudokuLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={spaceMono.variable}>
      <body
        className={`${spaceMono.className} antialiased`}
        style={{ paddingTop: 0 }}
      >
        {children}
      </body>
    </html>
  )
}
