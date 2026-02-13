/**
 * SpotlightCard - An interactive card with a cursor-following spotlight effect.
 * Tracks mouse position and renders a radial gradient glow that follows the cursor.
 * Based on reactbits.dev SpotlightCard component, adapted for Tailwind + React.
 *
 * Props:
 * - children: Card content
 * - className: Additional CSS classes
 * - spotlightColor: Color of the spotlight glow (default: semi-transparent orange)
 */
'use client'

import React, { useRef } from 'react'
import { cn } from '@/lib/utils'

interface SpotlightCardProps {
  children: React.ReactNode
  className?: string
  spotlightColor?: string
}

export const SpotlightCard = ({
  children,
  className,
  spotlightColor = 'rgba(249, 115, 22, 0.15)',
}: SpotlightCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    card.style.setProperty('--mouse-x', `${x}px`)
    card.style.setProperty('--mouse-y', `${y}px`)
    card.style.setProperty('--spotlight-color', spotlightColor)
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={cn('spotlight-card', className)}
    >
      {children}
    </div>
  )
}
