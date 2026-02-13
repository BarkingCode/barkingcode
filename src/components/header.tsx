'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const openVoiceWidget = () => {
    window.dispatchEvent(new CustomEvent('open-voice-widget'))
  }

  const navLinks = [
    { href: '/#about', label: 'About' },
    { href: '/#work', label: 'Work' },
    { href: '/#products', label: 'Products' },
  ]

  return (
    <header className="fixed top-3 left-2 right-2 z-50 flex justify-center">
      <div
        className={`w-full max-w-[1248px] h-[70px] px-6 rounded-2xl border backdrop-blur-[20px] justify-between items-center flex transition-all duration-300 ${
          scrolled
            ? 'bg-background/80 border-white/10'
            : 'bg-background/40 border-white/5'
        }`}
      >
        <div className="justify-start items-start flex">
          <div className="w-[146px] h-10 relative">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/assets/logoWhite.svg"
                alt="Barking Studio"
                width={160}
                height={100}
              />
            </Link>
          </div>
        </div>
        <nav className="hidden md:flex justify-start items-center gap-6">
          {navLinks.map((link) => (
            <div
              key={link.href}
              className="px-3 py-6 justify-start items-start flex"
            >
              <Link
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors font-lexend capitalize leading-snug"
              >
                {link.label}
              </Link>
            </div>
          ))}
          <Button
            size="sm"
            className="bg-white text-black hover:bg-white/90 font-semibold"
            onClick={openVoiceWidget}
          >
            Get in Touch
          </Button>
        </nav>
        <button className="md:hidden text-foreground" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 top-[82px] bg-background/95 backdrop-blur-lg z-40 md:hidden">
          <nav className="flex flex-col items-center pt-6">
            {navLinks.map((link) => (
              <div key={link.href} className="py-4">
                <Link href={link.href}>
                  <button
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors font-lexend capitalize leading-snug"
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </button>
                </Link>
              </div>
            ))}
            <Button
              className="bg-white text-black hover:bg-white/90 font-semibold"
              onClick={() => {
                toggleMenu()
                openVoiceWidget()
              }}
            >
              Get in Touch
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
