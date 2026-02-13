'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Bot,
  Code2,
  Lightbulb,
  Smartphone,
  Workflow,
  Zap,
} from 'lucide-react'
import { SpotlightCard } from '@/components/ui/spotlight-card'

const capabilities = [
  {
    icon: Bot,
    title: 'AI Agents & Workflows',
    description:
      'Custom voice agents, welcoming bots, and intelligent workflow automation. We design agents that handle real conversations and real tasks.',
    iconColor: 'text-orange-400',
  },
  {
    icon: Smartphone,
    title: 'Mobile & Web Apps',
    description:
      'End-to-end product design and development. From concept to App Store, we build polished apps that users love and businesses rely on.',
    iconColor: 'text-amber-400',
  },
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description:
      'React, React Native, Next.js, and beyond. We write production code, not prototypes. Every project ships with real infrastructure behind it.',
    iconColor: 'text-orange-300',
  },
  {
    icon: Lightbulb,
    title: 'AI Consulting & Strategy',
    description:
      'Not sure where AI fits in your business? We help companies identify high-impact opportunities and build the right AI solutions.',
    iconColor: 'text-amber-300',
  },
  {
    icon: Workflow,
    title: 'Product R&D',
    description:
      'We invest in our own ideas. Our internal lab builds products from scratch, testing new models and interfaces before anyone else.',
    iconColor: 'text-orange-400',
  },
  {
    icon: Zap,
    title: 'Rapid Prototyping',
    description:
      'From idea to working demo in days. We use the latest AI tools to accelerate development and validate concepts fast.',
    iconColor: 'text-yellow-400',
  },
]

export const HowItWorks = () => {
  return (
    <section className="container mx-auto px-4 py-24" id="about">
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-medium text-orange-400 mb-3 tracking-wide uppercase"
        >
          What We Do
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Studio meets laboratory.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground max-w-2xl mx-auto text-lg"
        >
          We operate at the intersection of consulting and product development.
          Half agency, half R&D lab -- building AI solutions for our clients
          while shipping our own products.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {capabilities.map((cap, index) => (
          <motion.div
            key={cap.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <SpotlightCard className="h-full flex flex-col justify-between">
              <cap.icon className={`w-8 h-8 ${cap.iconColor}`} strokeWidth={2.5} />

              <div className="mt-auto pt-8">
                <h3 className="text-lg font-semibold mb-2">{cap.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cap.description}
                </p>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
