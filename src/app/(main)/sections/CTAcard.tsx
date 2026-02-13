'use client'

import { Button } from '@/components/ui/button'
import React from 'react'
import FlickeringGrid from '@/components/ui/flickering-grid'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export const CTAcard = () => {
  return (
    <section className="flex align-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl w-full overflow-hidden rounded-2xl relative container mx-auto text-center border border-white/10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-yellow-500/10" />
        <FlickeringGrid
          className="z-0 absolute inset-0 size-full"
          squareSize={4}
          gridGap={6}
          color="#F97316"
          maxOpacity={0.3}
          flickerChance={0.1}
          height={800}
          width={800}
        />
        <div className="relative px-6 py-12 md:px-20 md:py-20 z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let&apos;s build something
            <br />
            <span className="gradient-text">intelligent together.</span>
          </h2>
          <p className="text-md mb-8 font-medium text-muted-foreground max-w-lg mx-auto">
            Whether you need an AI agent for your business, a mobile app for
            your users, or a partner to help you navigate the AI landscape --
            we&apos;re ready.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 px-8 font-semibold"
              onClick={() => window.dispatchEvent(new CustomEvent('open-voice-widget'))}
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Link
              href="https://calendar.app.google/sWGMdY5nu1Lia6aa9"
              target="_blank"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 hover:bg-white/5 px-8 font-semibold"
              >
                Book a Call
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
