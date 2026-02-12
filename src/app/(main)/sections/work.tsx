'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const Work = () => {
  const work = [
    {
      src: '/assets/work/EkarMobile.jpg',
      alt: 'Ekar Mobile',
      tag: 'Mobile App',
    },
    {
      src: '/assets/work/EkarWeb.jpg',
      alt: 'Ekar Web',
      tag: 'Web Platform',
    },
    {
      src: '/assets/work/AccentTranslation.jpg',
      alt: 'Accent Translations',
      tag: 'Web App',
    },
    {
      src: '/assets/work/Frank.jpg',
      alt: 'Frank',
      tag: 'Fintech',
    },
    {
      src: '/assets/work/JaspersPaw.jpg',
      alt: "Jasper's Paw",
      tag: 'Mobile App',
    },
    {
      src: '/assets/work/Ostaco.jpg',
      alt: 'Ostaco',
      tag: 'Web Platform',
    },
    {
      src: '/assets/work/Profillet.jpg',
      alt: 'Profillet',
      tag: 'Web App',
    },
    {
      src: '/assets/work/Hiroo.jpg',
      alt: 'Hiroo',
      tag: 'Real Estate',
    },
    {
      src: '/assets/work/ProfilletBranding.jpg',
      alt: 'Profillet Branding',
      tag: 'Branding',
    },
  ]

  return (
    <div className="grid md:grid-cols-2 gap-6 col-span-3">
      {work.map((item, index) => (
        <motion.div
          key={item.alt}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          className="group relative w-full overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] aspect-square"
        >
          <div
            className="w-full h-full bg-cover bg-center overflow-hidden transform transition-transform duration-500 ease-out group-hover:scale-105"
            style={{ backgroundImage: `url(${item.src})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-sm text-white mb-2">
              {item.tag}
            </span>
            <p className="text-white font-semibold">{item.alt}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
