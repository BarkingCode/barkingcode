/**
 * VoiceWidget - Fixed bottom-right floating voice agent widget.
 * Shows a container with title, description, and ConversationBar.
 * Open by default. Close button hides it and shows a square call button.
 * Listens for "open-voice-widget" event — flashes glow if open, opens if closed.
 */
'use client'

import React from 'react'
import { PhoneIcon, XIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ConversationBar } from '@/components/ui/conversation-bar'

const AGENT_ID = process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID || ''

export function VoiceWidget() {
  const [open, setOpen] = React.useState(true)
  const [flash, setFlash] = React.useState(false)

  React.useEffect(() => {
    const handler = () => {
      if (open) {
        setFlash(true)
        setTimeout(() => setFlash(false), 800)
      } else {
        setOpen(true)
      }
    }
    window.addEventListener('open-voice-widget', handler)
    return () => window.removeEventListener('open-voice-widget', handler)
  }, [open])

  return (
    <div className="fixed right-4 bottom-4 z-50">
      {/* Container panel */}
      <div
        className={cn(
          'w-[340px] sm:w-[380px] origin-bottom-right transition-all duration-300 ease-out relative',
          open
            ? 'scale-100 opacity-100 pointer-events-auto translate-y-0'
            : 'scale-95 opacity-0 pointer-events-none translate-y-2'
        )}
      >
        <div
          className={cn(
            'pointer-events-none absolute -inset-1 rounded-2xl transition-all duration-500',
            flash
              ? 'opacity-100 shadow-[inset_0_0_20px_rgba(249,115,22,0.4),0_0_30px_rgba(249,115,22,0.3)]'
              : 'opacity-0'
          )}
        />
        <Card className="border border-orange-500/20 bg-gradient-to-b from-orange-950/40 to-background/95 backdrop-blur-xl p-0 shadow-2xl shadow-orange-500/5 overflow-hidden">
          {/* Header */}
          <div className="flex items-start justify-between gap-3 px-4 pt-4 pb-2">
            <div>
              <h3 className="text-sm font-semibold">Talk to Us</h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                Chat with our AI assistant or type a message
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpen(false)}
              className="h-7 w-7 shrink-0 rounded-md text-muted-foreground hover:text-foreground"
            >
              <XIcon className="h-4 w-4" />
            </Button>
          </div>

          {/* Conversation bar */}
          <ConversationBar agentId={AGENT_ID} className="p-0 px-2 pb-2" />
        </Card>
      </div>

      {/* Call button (visible when closed) */}
      <Button
        onClick={() => setOpen(true)}
        className={cn(
          'absolute right-0 bottom-0 h-14 w-14 rounded-2xl bg-orange-500 hover:bg-orange-600 shadow-lg transition-all duration-300 ease-out',
          open
            ? 'scale-95 opacity-0 pointer-events-none'
            : 'scale-100 opacity-100 pointer-events-auto'
        )}
      >
        <PhoneIcon className="h-5 w-5" />
      </Button>
    </div>
  )
}
