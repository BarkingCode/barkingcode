'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Mic,
  Gamepad2,
  MessageSquareHeart,
  Smartphone,
  Brain,
  Globe,
} from 'lucide-react'
import { SpotlightCard } from '@/components/ui/spotlight-card'

const products = [
  {
    icon: Gamepad2,
    name: 'X-Sudoku',
    description:
      'A beautifully crafted iOS Sudoku app with daily challenges, journey mode, and global leaderboards. Built for puzzle lovers who value clean design.',
    status: 'Live on App Store',
    statusColor: 'text-green-400',
    iconColor: 'text-orange-400',
  },
  {
    icon: Mic,
    name: 'Voice Agent Platform',
    description:
      'An intelligent voice agent that handles inbound calls, qualifies leads, and routes conversations. Currently deployed for client onboarding flows.',
    status: 'In Production',
    statusColor: 'text-green-400',
    iconColor: 'text-amber-400',
  },
  {
    icon: MessageSquareHeart,
    name: 'Welcoming Agent',
    description:
      'An AI-powered concierge that greets visitors, answers questions, and schedules meetings. Deployed across client websites and reception workflows.',
    status: 'In Production',
    statusColor: 'text-green-400',
    iconColor: 'text-orange-300',
  },
  {
    icon: Smartphone,
    name: 'Fitness Companion App',
    description:
      'A mobile app combining AI coaching with workout tracking. Personalized programs that adapt to your progress and schedule.',
    status: 'In Development',
    statusColor: 'text-amber-400',
    iconColor: 'text-amber-300',
  },
  {
    icon: Brain,
    name: 'AI Content Pipeline',
    description:
      'An internal tool that transforms raw ideas into structured content across multiple formats. Powered by custom LLM chains and editorial workflows.',
    status: 'Internal Tool',
    statusColor: 'text-orange-400',
    iconColor: 'text-orange-400',
  },
  {
    icon: Globe,
    name: 'Client Portal',
    description:
      'A unified dashboard where our clients track project progress, review deliverables, and communicate with the team in real time.',
    status: 'In Development',
    statusColor: 'text-amber-400',
    iconColor: 'text-yellow-400',
  },
]

export const Pricing = () => {
  return (
    <section className="py-24" id="products">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-orange-400 mb-3 tracking-wide uppercase"
          >
            Our Products
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Built in-house. Shipped for real.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            We don&apos;t just build for clients. Our own products are where we
            push boundaries, test new ideas, and prove what&apos;s possible with AI.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <SpotlightCard className="h-full flex flex-col">
                <div className="flex items-start justify-between">
                  <product.icon
                    className={`w-8 h-8 ${product.iconColor}`}
                    strokeWidth={2.5}
                  />
                  <span
                    className={`text-xs font-medium ${product.statusColor}`}
                  >
                    {product.status}
                  </span>
                </div>

                <div className="mt-auto pt-8">
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
