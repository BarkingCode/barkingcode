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
    <div className={`${spaceMono.variable} ${spaceMono.className} antialiased [&_h1]:font-[inherit] [&_h2]:font-[inherit] [&_h3]:font-[inherit] [&_h4]:font-[inherit] [&_h5]:font-[inherit] [&_h6]:font-[inherit]`}>
      <style>{`
        .${spaceMono.className} h1,
        .${spaceMono.className} h2,
        .${spaceMono.className} h3,
        .${spaceMono.className} h4,
        .${spaceMono.className} h5,
        .${spaceMono.className} h6 {
          font-family: inherit !important;
        }
      `}</style>
      {children}
    </div>
  )
}
