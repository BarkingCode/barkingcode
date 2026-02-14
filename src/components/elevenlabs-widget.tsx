/**
 * ElevenLabsWidget - Drop-in ElevenLabs Conversational AI embed widget.
 * Renders the pre-built ElevenLabs convai web component with built-in
 * orb, voice chat, and text input. No custom UI wiring needed.
 *
 * Props:
 * - agentId: ElevenLabs Agent ID to connect to
 */
"use client"

import { useEffect } from "react"

interface ElevenLabsWidgetProps {
  agentId: string
}

export function ElevenLabsWidget({ agentId }: ElevenLabsWidgetProps) {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed"
    script.async = true
    script.type = "text/javascript"
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    // @ts-expect-error -- elevenlabs-convai is a web component, not a React element
    <elevenlabs-convai agent-id={agentId} />
  )
}
