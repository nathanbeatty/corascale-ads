import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowUp, CalendarCheck, ChartArea, Globe, Play, Plus, Rocket, Signature, Sparkles, Target, LucideIcon } from 'lucide-react'
import Image from 'next/image'

interface StepCardProps {
  number: string
  icon: LucideIcon
  title: string
  description: string
  imageUrl: string
}

interface Step extends StepCardProps {}

const StepCard = ({ number, icon: Icon, title, description, imageUrl }: StepCardProps) => (
  <Card className="p-6">
    <div className="flex gap-2 items-center">
      <Icon className="text-primary size-5" />
      <span className="font-mono">{number}</span>
    </div>
    <h3 className="text-foreground text-xl font-semibold">{title}</h3>
    <p className="text-muted-foreground text-balance">{description}</p>
    <div className="h-5 mt-auto w-full rounded-sm overflow-hidden relative">
      <Image src={imageUrl} alt={title} fill className="object-cover" />
    </div>
  </Card>
)

export default function FeaturesSix() {
  const steps: Step[] = [
    {
      number: "001",
      icon: Target,
      title: "Research & Targeting",
      description: "We identify your ideal SMB (10-500 employees), target IT decision-makers (CTOs, IT Directors, COOs), and write messaging around their specific pain points: infrastructure, security, compliance.",
      imageUrl: "https://i.pinimg.com/736x/4a/2e/bc/4a2ebcc9ec98c2260127ee68f9466b9d.jpg"
    },
    {
      number: "002",
      icon: Rocket,
      title: "Launch & Outreach",
      description: "We warm up domains, build personalized cold email sequences, and continuously test messaging to maximize replies from IT leaders. Multi-step follow-ups ensure we capture engaged prospects.",
      imageUrl: "https://i.pinimg.com/736x/44/5d/90/445d90bec5fd581f432a330ef58dad48.jpg"
    },
    {
      number: "003",
      icon: ChartArea,
      title: "Booking & Reporting",
      description: "We qualify responses, book meetings directly to your calendar, and provide clear monthly reporting. We also review previous bookings and your feedback to improve and focus our outreach and targeting.",
      imageUrl: "https://i.pinimg.com/736x/c2/3a/d4/c23ad43971853bf81342ba321a02ef16.jpg"
    }
  ]

  return (
    <section>
      <div className="py-12">
        <div className="mx-auto w-full max-w-5xl">
          <div className="text-center mb-24">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
            How We Deliver
          </h2>
          <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our unique approach delivers impactful results for your business.
          </p>
        </div>
          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step) => (
              <StepCard key={step.number} {...step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}