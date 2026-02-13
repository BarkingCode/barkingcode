'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import dynamic from 'next/dynamic'

const LiquidEther = dynamic(() => import('@/components/ui/liquid-ether'), {
  ssr: false,
})

export const Hero = () => {
  return (
    <section className="relative   text-center w-[100vw]">
      {/* Liquid Ether background */}
      <div className="absolute inset-0 pointer-events-none top-0 left-0 " aria-hidden="true">
        <LiquidEther
          colors={['#bb7a00', '#a34400', '#ff7d45']}
          mouseForce={24}
          cursorSize={200}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}

        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 pt-32 pb-24 md:pt-32 md:pb-32">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-muted-foreground"
        >
          <Sparkles className="w-4 h-4 text-orange-400" />
          <span>AI Development Studio & Product Lab</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.1]"
        >
          We build AI
          <br />
          <span className="gradient-text">that actually ships.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          From voice agents to mobile apps, we combine deep R&D with hands-on
          consulting. We build our own products and help companies navigate the
          AI landscape.
        </motion.p>

        {/* Dual CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="#work">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 px-8 text-base font-semibold"
            >
              Explore Our Work
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          <Link href="#products">
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 hover:bg-white/5 px-8 text-base font-semibold"
            >
              See Our Products
            </Button>
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
        >
          {[
            { value: '15+', label: 'Projects Shipped' },
            { value: '6+', label: 'AI Agents Built' },
            { value: '3', label: 'Own Products' },
            { value: '100%', label: 'Client Retention' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold gradient-text-warm font-lexend">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
