import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sudoku X - The Ultimate Sudoku Experience',
  description: 'Play unlimited Sudoku puzzles with a beautiful, clean interface. Challenge yourself with varying difficulty levels and track your progress.',
}

export default function SudokuXLandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans selection:bg-blue-100 dark:selection:bg-blue-900">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Sudoku X
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600 dark:text-slate-400">
          <Link href="#features" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Features</Link>
          <Link href="#download" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Download</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-20 pb-32 md:pt-32 md:pb-48 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
          Master the Art of <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Logic & Numbers
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Experience Sudoku like never before. Clean design, intuitive controls, and endless puzzles to keep your mind sharp.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4" id="download">
          <Link
            href="https://apps.apple.com"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-slate-900 dark:bg-white dark:text-slate-900 rounded-full hover:bg-slate-800 dark:hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 dark:focus:ring-white"
          >
            <svg className="w-6 h-6 mr-3 -ml-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.96 1.07-3.11-1.05.05-2.31.71-3.06 1.48-.69.7-1.24 1.85-1.09 2.98 1.16.09 2.34-.5 3.08-1.35" />
            </svg>
            Download on App Store
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="bg-slate-50 dark:bg-slate-900/50 py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: 'Infinite Puzzles', desc: 'Never run out of challenges with our procedurally generated puzzles.' },
              { title: 'Smart Hints', desc: 'Stuck? Get intelligent hints that teach you the logic, not just the answer.' },
              { title: 'Daily Challenges', desc: 'Compete with players worldwide in our unique daily puzzle challenges.' },
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="font-bold text-slate-900 dark:text-white">Sudoku X</span>
              <span className="text-slate-500 dark:text-slate-500 ml-2">© {new Date().getFullYear()} Barking Code</span>
            </div>
            <div className="flex space-x-6 text-sm text-slate-500 dark:text-slate-500">
              <Link href="/sudokux/privacy-policy" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacy Policy</Link>
              <Link href="/sudokux/terms-of-use" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Terms of Use</Link>
              <Link href="/sudokux/data-safety" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Data Safety</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
