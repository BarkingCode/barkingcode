'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Work } from './work'

export const Services = () => {
  const services = [
    {
      category: 'AI & Agents',
      items: [
        'Voice Agent Development',
        'Conversational AI',
        'AI Workflow Automation',
        'LLM Integration & Fine-tuning',
        'RAG Pipelines',
      ],
    },
    {
      category: 'Product Development',
      items: [
        'Mobile Apps (iOS & Android)',
        'Web Applications',
        'React / React Native',
        'Next.js / Full-Stack',
        'API Design & Architecture',
      ],
    },
    {
      category: 'Design & Strategy',
      items: [
        'UI/UX Design',
        'Product Strategy',
        'Branding & Identity',
        'AI Consulting',
        'Technical Architecture',
      ],
    },
  ]

  return (
    <section
      className="container mx-auto px-4 py-24 grid grid-cols-1 lg:grid-cols-4 gap-12"
      id="work"
    >
      <div className="col-span-1 space-y-8">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-orange-400 mb-3 tracking-wide uppercase"
          >
            Our Expertise
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold mb-6"
          >
            Services & Work
          </motion.h2>
        </div>
        {services.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * (i + 1) }}
          >
            <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
              {group.category}
            </h3>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="text-sm text-muted-foreground font-medium"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      <Work />
    </section>
  )
}
