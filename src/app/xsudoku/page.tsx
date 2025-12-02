import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sudoku X - Sudoku, Perfected',
  description:
    'The Sudoku you deserve. Daily challenges, journey mode, global leaderboards, and six difficulty levels. Pure Sudoku. Zero clutter.',
}

export default function XSudokuLandingPage() {
  return (
    <div className="min-h-screen bg-[#EAE6DC] text-[#1a1a1a] font-space-mono selection:bg-[#1a1a1a] selection:text-[#EAE6DC]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#EAE6DC]/90 backdrop-blur-sm border-b border-[#1a1a1a]/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/xsudoku" className="flex items-center gap-3">
            <Image
              src="/assets/xsudoku/logo-bg.svg"
              alt="Sudoku X"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-lg font-bold tracking-tight">SUDOKU X</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link
              href="#features"
              className="hover:underline underline-offset-4"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="hover:underline underline-offset-4"
            >
              How It Works
            </Link>
            <Link
              href="#download"
              className="bg-[#1a1a1a] text-[#EAE6DC] px-5 py-2.5 rounded-full hover:bg-[#333] transition-colors"
            >
              Download
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Sudoku, Perfected.
          </h1>
          <p className="text-xl md:text-2xl text-[#666] mb-12">
            The Sudoku You Deserve
          </p>

          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto mb-12">
            <Image
              src="/assets/xsudoku/logo-bg.svg"
              alt="Sudoku X Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          <Link
            href="#download"
            className="inline-flex items-center gap-3 bg-[#1a1a1a] text-[#EAE6DC] px-8 py-4 rounded-full text-lg font-bold hover:bg-[#333] transition-colors"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.96 1.07-3.11-1.05.05-2.31.71-3.06 1.48-.69.7-1.24 1.85-1.09 2.98 1.16.09 2.34-.5 3.08-1.35" />
            </svg>
            Download on App Store
          </Link>
        </div>

        <div className="absolute bottom-8 animate-bounce">
          <svg
            className="w-6 h-6 text-[#666]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Daily Challenge Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-sm uppercase tracking-widest text-[#666] mb-4">
                Daily Ritual
              </p>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Your Daily Brain Ritual
              </h2>
              <p className="text-lg text-[#666] mb-8 leading-relaxed">
                Build Your Streak. Every day brings a fresh puzzle crafted to
                challenge your mind. One attempt per day—make it count. Track
                your current streak, chase your personal best, and unlock
                milestone achievements.
              </p>
              <ul className="space-y-4 text-[#666]">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#1a1a1a] rounded-full" />
                  Fresh puzzle every day
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#1a1a1a] rounded-full" />
                  Streak tracking with milestones
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#1a1a1a] rounded-full" />
                  Varying difficulty each day
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-[280px] h-[560px] md:w-[320px] md:h-[640px]">
                <Image
                  src="/assets/xsudoku/X-Sudoku02.jpg"
                  alt="Daily Challenge"
                  fill
                  className="object-contain rounded-[2rem] shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Mode Section */}
      <section className="py-24 px-6 bg-[#1a1a1a] text-[#EAE6DC]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative w-[280px] h-[560px] md:w-[320px] md:h-[640px]">
                <Image
                  src="/assets/xsudoku/X-Sudoku03.jpg"
                  alt="Journey Mode"
                  fill
                  className="object-contain rounded-[2rem] shadow-2xl"
                />
              </div>
            </div>
            <div>
              <p className="text-sm uppercase tracking-widest text-[#999] mb-4">
                Journey Mode
              </p>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Begin Your Puzzle Journey
              </h2>
              <p className="text-lg text-[#999] mb-8 leading-relaxed">
                One Puzzle at a Time. Progress through chapters of increasingly
                challenging puzzles. Each victory unlocks your next challenge.
                Watch your path unfold as you master the art of Sudoku.
              </p>
              <ul className="space-y-4 text-[#999]">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#EAE6DC] rounded-full" />
                  Progressive difficulty curve
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#EAE6DC] rounded-full" />
                  Visual progress tracking
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#EAE6DC] rounded-full" />
                  Unlock new chapters as you advance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Free Run Section */}
      <section className="py-24 px-6" id="features">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-sm uppercase tracking-widest text-[#666] mb-4">
                Practice Mode
              </p>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Play Your Way
              </h2>
              <p className="text-lg text-[#666] mb-8 leading-relaxed">
                From Easy to Inhuman. Choose your grid size, pick your
                difficulty, and play without pressure. No progress tracking—just
                pure puzzle-solving for when you want to practice or simply
                unwind.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {['EASY', 'MEDIUM', 'HARD', 'EXTREME', 'INSANE', 'INHUMAN'].map(
                  (level) => (
                    <div
                      key={level}
                      className="border-2 border-[#1a1a1a] px-4 py-2 text-center text-sm font-bold"
                    >
                      {level}
                    </div>
                  )
                )}
              </div>
              <p className="text-sm text-[#666]">
                6×6 Mini grids for quick sessions • 9×9 Classic for the full
                experience
              </p>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-[280px] h-[560px] md:w-[320px] md:h-[640px]">
                <Image
                  src="/assets/xsudoku/X-Sudoku04.jpg"
                  alt="Free Run Mode"
                  fill
                  className="object-contain rounded-[2rem] shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gameplay Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-[#666] mb-4">
            Pure Experience
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Pure Sudoku. Zero Clutter.
          </h2>
          <p className="text-lg text-[#666] mb-12 max-w-2xl mx-auto leading-relaxed">
            Focus. Solve. Repeat. A clean, distraction-free interface that puts
            the puzzle first. Intuitive controls, smart notes, helpful hints
            when you need them, and undo for when you don&apos;t.
          </p>
          <div className="flex justify-center">
            <div className="relative w-[280px] h-[560px] md:w-[360px] md:h-[720px]">
              <Image
                src="/assets/xsudoku/X-Sudoku05.jpg"
                alt="Gameplay"
                fill
                className="object-contain rounded-[2rem] shadow-2xl"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-3xl mx-auto">
            {[
              { label: 'UNDO', desc: 'Never lose progress' },
              { label: 'RESET', desc: 'Start fresh anytime' },
              { label: 'NOTES', desc: 'Track possibilities' },
              { label: 'HINT', desc: 'Learn, don't cheat' },
            ].map((feature) => (
              <div key={feature.label} className="text-center">
                <div className="border-2 border-[#1a1a1a] w-16 h-16 mx-auto mb-3 flex items-center justify-center font-bold">
                  {feature.label.charAt(0)}
                </div>
                <p className="font-bold text-sm">{feature.label}</p>
                <p className="text-xs text-[#666] mt-1">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboard Section */}
      <section className="py-24 px-6" id="how-it-works">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative w-[280px] h-[560px] md:w-[320px] md:h-[640px]">
                <Image
                  src="/assets/xsudoku/X-Sudoku06.jpg"
                  alt="Leaderboard"
                  fill
                  className="object-contain rounded-[2rem] shadow-2xl"
                />
              </div>
            </div>
            <div>
              <p className="text-sm uppercase tracking-widest text-[#666] mb-4">
                Competition
              </p>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Compete Globally or Regionally
              </h2>
              <p className="text-lg text-[#666] mb-8 leading-relaxed">
                Track Every Win. Climb the global leaderboard, unlock
                achievements, and track your statistics. See how you stack up
                against players worldwide. Your wins, your streaks, your legacy.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 border-2 border-[#1a1a1a]">
                  <p className="text-3xl font-bold">∞</p>
                  <p className="text-sm text-[#666] mt-2">Puzzles to solve</p>
                </div>
                <div className="bg-white p-6 border-2 border-[#1a1a1a]">
                  <p className="text-3xl font-bold">6</p>
                  <p className="text-sm text-[#666] mt-2">Difficulty levels</p>
                </div>
                <div className="bg-white p-6 border-2 border-[#1a1a1a]">
                  <p className="text-3xl font-bold">24/7</p>
                  <p className="text-sm text-[#666] mt-2">Daily challenges</p>
                </div>
                <div className="bg-white p-6 border-2 border-[#1a1a1a]">
                  <p className="text-3xl font-bold">🌍</p>
                  <p className="text-sm text-[#666] mt-2">Global rankings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customization Section */}
      <section className="py-24 px-6 bg-[#1a1a1a] text-[#EAE6DC]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-[#999] mb-4">
            Personalization
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Made for You</h2>
          <p className="text-xl text-[#999] mb-12">Light. Dark. Yours.</p>
          <div className="flex justify-center mb-12">
            <div className="relative w-[280px] h-[560px] md:w-[320px] md:h-[640px]">
              <Image
                src="/assets/xsudoku/X-Sudoku01.jpg"
                alt="Settings"
                fill
                className="object-contain rounded-[2rem] shadow-2xl"
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6 max-w-2xl mx-auto">
            <div className="bg-[#EAE6DC] text-[#1a1a1a] px-6 py-3 font-bold">
              LIGHT
            </div>
            <div className="bg-[#333] text-[#EAE6DC] px-6 py-3 font-bold border border-[#555]">
              DARK
            </div>
            <div className="bg-gradient-to-r from-[#EAE6DC] to-[#333] text-[#1a1a1a] px-6 py-3 font-bold">
              SYSTEM
            </div>
          </div>
          <p className="text-[#999] mt-8 max-w-xl mx-auto">
            Customize your nickname, set daily reminders, and choose your
            preferred appearance. Your Sudoku, your rules.
          </p>
        </div>
      </section>

      {/* Download CTA Section */}
      <section className="py-32 px-6" id="download">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Perfect Your Sudoku?
          </h2>
          <p className="text-xl text-[#666] mb-12">
            Download now. Free forever. No ads interrupting your flow.
          </p>
          <Link
            href="https://apps.apple.com"
            className="inline-flex items-center gap-3 bg-[#1a1a1a] text-[#EAE6DC] px-10 py-5 rounded-full text-xl font-bold hover:bg-[#333] transition-colors"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.96 1.07-3.11-1.05.05-2.31.71-3.06 1.48-.69.7-1.24 1.85-1.09 2.98 1.16.09 2.34-.5 3.08-1.35" />
            </svg>
            Download on App Store
          </Link>
          <p className="text-sm text-[#999] mt-8">Available on iOS</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-[#EAE6DC] py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <Image
                src="/assets/xsudoku/logo-bg.svg"
                alt="Sudoku X"
                width={32}
                height={32}
                className="rounded-lg brightness-0 invert"
              />
              <span className="font-bold">SUDOKU X</span>
              <span className="text-[#666] ml-2">
                © {new Date().getFullYear()} Barking Code
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-[#999]">
              <Link
                href="/xsudoku/privacy-policy"
                className="hover:text-[#EAE6DC] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/xsudoku/terms-of-use"
                className="hover:text-[#EAE6DC] transition-colors"
              >
                Terms of Use
              </Link>
              <Link
                href="/xsudoku/data-safety"
                className="hover:text-[#EAE6DC] transition-colors"
              >
                Data Safety
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
