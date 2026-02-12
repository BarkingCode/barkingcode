'use client'

import { Button } from '@/components/ui/button'
import {
  FormField,
  Form as FormUI,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(10).max(500),
})

export const Form = () => {
  const [response, setResponse] = useState<{
    message: string
    res: 'success' | 'error'
  } | null>(null)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          setResponse({ message: data.message, res: 'success' })
          form.reset()
        } else {
          setResponse({ message: data.error, res: 'error' })
        }
      })
      .catch(() => {
        setResponse({
          message: 'Something went wrong. Please try again.',
          res: 'error',
        })
      })
  }

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
          className="text-sm font-medium text-purple-400 mb-3 tracking-wide uppercase"
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
          Have a project in mind or want to explore how AI can help your
          business? Drop us a message and we&apos;ll get back to you.
        </motion.p>
      </div>
      <div className="sm:col-span-2">
        {response?.res === 'success' ? (
          <div className="bg-green-500/10 border border-green-500/20 px-8 py-6 text-center font-bold rounded-xl text-green-400">
            We got your message!
            <br />
            We&apos;ll get back to you shortly.
          </div>
        ) : (
          <>
            {response?.res === 'error' && (
              <div className="bg-red-500/10 border border-red-500/20 px-8 py-6 text-center font-bold rounded-xl text-red-400 mb-6">
                Something went wrong. Please email us at{' '}
                <a
                  href="mailto:info@barkingcode.com"
                  className="underline hover:text-red-300"
                >
                  info@barkingcode.com
                </a>
              </div>
            )}
            <FormUI {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your name"
                          {...field}
                          className="bg-white/5 border-white/10 focus:border-purple-500/50 text-foreground placeholder:text-muted-foreground"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="you@company.com"
                          {...field}
                          className="bg-white/5 border-white/10 focus:border-purple-500/50 text-foreground placeholder:text-muted-foreground"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your project..."
                          {...field}
                          className="bg-white/5 border-white/10 focus:border-purple-500/50 text-foreground placeholder:text-muted-foreground min-h-[120px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="bg-white text-black hover:bg-white/90 font-semibold"
                >
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </FormUI>
          </>
        )}
      </div>
    </section>
  )
}
