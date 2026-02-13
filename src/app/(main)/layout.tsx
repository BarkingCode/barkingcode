import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { VoiceWidget } from '@/components/voice-widget'

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
      <VoiceWidget />
    </div>
  )
}
