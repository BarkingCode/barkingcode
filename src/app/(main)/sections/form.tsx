'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ConversationBar } from '@/components/ui/conversation-bar'

const AGENT_ID = process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID || ''

export const Form = () => {
  return (
    <section
      className="container mx-auto px-4 py-24 grid sm:grid-cols-3 max-w-4xl gap-10"
      id="contact"
    >
      <div className="col-span-1">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-medium text-orange-400 mb-3 tracking-wide uppercase"
        >
          Get in Touch
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-bold text-2xl mb-4"
        >
          Let&apos;s Talk
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground"
        >
          Have a project in mind? Talk to our AI assistant or type your message.
          We&apos;ll get back to you.
        </motion.p>
      </div>
      <div className="sm:col-span-2 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="w-full"
        >
          <ConversationBar
            agentId={AGENT_ID}
            className="p-0"
          />
        </motion.div>
      </div>
    </section>
  )
}
