import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ElevenLabsWidget } from '@/components/elevenlabs-widget'

const AGENT_ID = process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID || ''

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background ">
      <Header />
      <main>{children}</main>
      <Footer />
      <ElevenLabsWidget agentId={AGENT_ID} />
    </div>
  )
}
