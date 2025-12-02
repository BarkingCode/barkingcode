import type { Metadata } from 'next'
import { Space_Mono } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
})

export const metadata: Metadata = {
  title: 'X-Sudoku - The Sudoku You Deserve',
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

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-neutral-950/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/xsudoku" className="flex items-center gap-3">
            <Image
              src="/assets/xsudoku/logo-bg.svg"
              alt="X-Sudoku"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-lg font-bold tracking-tight">X-Sudoku</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link
              href="/xsudoku#features"
              className="hover:underline underline-offset-4"
            >
              Features
            </Link>
            <Link
              href="/xsudoku#how-it-works"
              className="hover:underline underline-offset-4"
            >
              How It Works
            </Link>
            <Link
              href="/xsudoku#download"
              className="bg-neutral-950 text-white px-5 py-2.5 rounded-full hover:bg-neutral-700 transition-colors"
            >
              Download
            </Link>
          </div>
        </div>
      </nav>

      {children}
    </div>
  )
}
