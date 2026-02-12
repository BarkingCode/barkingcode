import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <Image
              src="/assets/logoWhite.svg"
              alt="Barking Studio"
              width={160}
              height={100}
            />
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
              An AI development studio and product lab based in Amsterdam. We
              build intelligent products and help companies integrate AI into
              their workflows.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Studio</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/#about"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#work"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="/#products"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Info</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@barkingcode.com"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  info@barkingcode.com
                </a>
              </li>
              <li>
                <p className="text-muted-foreground text-sm">
                  Amsterdam, Netherlands
                </p>
              </li>
              <li>
                <Link
                  href="/privacypolicy"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/termsofservice"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <small className="text-muted-foreground font-medium">
            &copy; {new Date().getFullYear()} Barking Studio. All rights
            reserved.
          </small>
        </div>
      </div>
    </footer>
  )
}
