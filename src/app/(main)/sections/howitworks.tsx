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

const capabilities = [
  {
    icon: Bot,
    title: 'AI Agents & Workflows',
    description:
      'Custom voice agents, welcoming bots, and intelligent workflow automation. We design agents that handle real conversations and real tasks.',
    gradient: 'from-purple-500/20 to-blue-500/20',
    iconColor: 'text-purple-400',
  },
  {
    icon: Smartphone,
    title: 'Mobile & Web Apps',
    description:
      'End-to-end product design and development. From concept to App Store, we build polished apps that users love and businesses rely on.',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-blue-400',
  },
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description:
      'React, React Native, Next.js, and beyond. We write production code, not prototypes. Every project ships with real infrastructure behind it.',
    gradient: 'from-cyan-500/20 to-teal-500/20',
    iconColor: 'text-cyan-400',
  },
  {
    icon: Lightbulb,
    title: 'AI Consulting & Strategy',
    description:
      'Not sure where AI fits in your business? We help companies identify high-impact opportunities and build the right AI solutions.',
    gradient: 'from-amber-500/20 to-orange-500/20',
    iconColor: 'text-amber-400',
  },
  {
    icon: Workflow,
    title: 'Product R&D',
    description:
      'We invest in our own ideas. Our internal lab builds products from scratch, testing new models and interfaces before anyone else.',
    gradient: 'from-rose-500/20 to-pink-500/20',
    iconColor: 'text-rose-400',
  },
  {
    icon: Zap,
    title: 'Rapid Prototyping',
    description:
      'From idea to working demo in days. We use the latest AI tools to accelerate development and validate concepts fast.',
    gradient: 'from-violet-500/20 to-purple-500/20',
    iconColor: 'text-violet-400',
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
          className="text-sm font-medium text-purple-400 mb-3 tracking-wide uppercase"
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
            className="group relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 card-glow"
          >
            <div
              className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${cap.gradient} mb-4`}
            >
              <cap.icon className={`w-6 h-6 ${cap.iconColor}`} />
            </div>
            <h3 className="text-lg font-semibold mb-2">{cap.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {cap.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
