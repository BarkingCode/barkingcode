'use client'

import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'


export const FAQ = () => {
  const faq = [
    {
      question: 'What exactly is Barking Studio?',
      answer:
        "We're an AI development studio and product lab based in Amsterdam. We operate as both a consultancy -- helping companies build and integrate AI solutions -- and as a product company, building our own apps, agents, and tools. Think of us as half agency, half R&D lab.",
    },
    {
      question: 'What kind of AI agents do you build?',
      answer:
        "We build voice agents that handle real phone conversations, welcoming agents that greet and qualify visitors, and workflow automation agents that handle repetitive tasks. Each agent is custom-built for the specific use case -- we don't do cookie-cutter chatbots.",
    },
    {
      question: 'Do you only work on AI projects?',
      answer:
        "No. While AI is our core focus, we also build mobile apps, web platforms, and full-stack products. Many of our projects combine traditional product development with AI capabilities. We've shipped everything from fintech platforms to puzzle games.",
    },
    {
      question: 'How do you work with clients?',
      answer:
        "We start with a discovery call to understand your goals, then scope the work together. Depending on the project, we work in focused sprints or on a retainer basis. Communication happens via Slack, and we provide regular updates through our client portal. We're hands-on and collaborative.",
    },
    {
      question: "What's your tech stack?",
      answer:
        'We primarily work with React, React Native, Next.js, TypeScript, and Python. For AI, we work across the major LLM providers, build custom RAG pipelines, fine-tune models when needed, and deploy agents on various voice and messaging platforms.',
    },
    {
      question: 'Why do you build your own products too?',
      answer:
        "Building our own products keeps us sharp. It means we're constantly testing new technologies, frameworks, and AI models before recommending them to clients. Our consulting is informed by real shipping experience, not just theory.",
    },
    {
      question: 'Can you help us figure out where AI fits in our business?',
      answer:
        "That's one of the things we do best. We offer AI consulting and strategy sessions where we audit your current workflows, identify high-impact automation opportunities, and build a practical roadmap. No hype, just realistic assessments of what AI can and can't do for you today.",
    },
    {
      question: 'How do I get started?',
      answer:
        "Reach out through our contact form or book a call directly. We'll have an initial conversation to understand what you're looking for, and if there's a fit, we'll put together a proposal. No commitment needed to start talking.",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-24 grid md:grid-cols-3 gap-12">
      <div className="max-w-md gap-4 flex flex-col justify-start items-start">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-medium text-orange-400 tracking-wide uppercase"
        >
          Questions
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl font-bold"
        >
          Frequently Asked
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground"
        >
          Can&apos;t find what you&apos;re looking for? Reach out directly.
        </motion.p>
        <Button
          variant="outline"
          className="border-white/20 hover:bg-white/5"
          onClick={() => window.dispatchEvent(new CustomEvent('open-voice-widget'))}
        >
          Contact Us
        </Button>
      </div>
      <div className="md:col-span-2 space-y-4">
        <Accordion type="single" collapsible className="w-full">
          {faq.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-white/10"
            >
              <AccordionTrigger className="text-left gap-2 text-foreground hover:text-foreground/80">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
