'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import {
  Target,
  Rocket,
  ChartArea,
  Sparkles,
  Play,
  CalendarCheck,
  Globe,
  Signature,
  ArrowUp,
} from 'lucide-react'
import Image from 'next/image'

interface FeatureCardProps {
  number: string
  icon: any
  title: string
  description: string
  imageUrl: string
}

const FeatureCard = ({
  number,
  icon: Icon,
  title,
  description,
  imageUrl,
}: FeatureCardProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card
      onClick={() => setIsOpen(!isOpen)}
      className={`px-6 py-4 pb-0 md:pb-4 border border-neutral-200 bg-white/90 backdrop-blur-md hover:shadow-lg transition-all duration-300 
        md:min-w-0 gap-4 flex flex-col justify-between cursor-pointer
        ${isOpen ? 'max-h-full' : ' overflow-hidden md:max-h-none'}`}
    >
        <div className="">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon className="text-primary size-5" />
          <span className="font-mono text-sm text-neutral-500">{number}</span>
           <h3 className="text-lg font-semibold pb-0 ml-2 text-black mb-0">{title}</h3>
        </div>
        {/* Mobile toggle indicator */}
        <span className="md:hidden text-neutral-500 text-sm">
          {isOpen ? '−' : '+'}
        </span>
        
      </div>
      
</div>
     

      {/* Hidden content on mobile unless expanded */}
      <div
        className={`transition-all duration-300 ${
          isOpen ? 'opacity-100 ' : 'opacity-0 h-0 md:opacity-100 mt-0 md:h-auto'
        } md:opacity-100 md:mt-0`}
      >
        <p className="text-neutral-600 text-sm mt-4 leading-relaxed mb-4">
          {description}
        </p>
        {/* <div className="relative h-28 w-full overflow-hidden rounded-lg">
          <Image src={imageUrl} alt={title} fill className="object-cover" />
        </div> */}
      </div>
    </Card>
  )
}

export default function FeaturesNine() {
 const features = [
  {
    number: '001',
    icon: Target,
    title: 'ICP Research',
    description:
      'We identify your ideal IT buyers—CTOs, IT Directors, and COOs—and build targeted lists to reach decision-makers at the right companies.',
    imageUrl:
      'https://i.pinimg.com/736x/4a/2e/bc/4a2ebcc9ec98c2260127ee68f9466b9d.jpg',
  },
  {
    number: '002',
    icon: Rocket,
    title: 'Email Infrastructure',
    description:
      'We configure your sending domains, set up mailboxes, and warm them gradually to ensure strong deliverability from day one.',
    imageUrl:
      'https://i.pinimg.com/736x/44/5d/90/445d90bec5fd581f432a330ef58dad48.jpg',
  },
  {
    number: '003',
    icon: Sparkles,
    title: 'Personalized Messaging',
    description:
      'Custom cold email copy tailored to IT services buyers—highlighting relevant pain points and showcasing how you solve them.',
    imageUrl:
      'https://i.pinimg.com/736x/9e/47/30/9e4730eaaedba30ee97d45866549da9a.jpg',
  },
  {
    number: '004',
    icon: ChartArea,
    title: 'Campaign Management',
    description:
      'We launch and monitor your campaigns daily, managing sends, follow-ups, and reply tracking so nothing falls through the cracks.',
    imageUrl:
      'https://i.pinimg.com/736x/c2/3a/d4/c23ad43971853bf81342ba321a02ef16.jpg',
  },
  {
    number: '005',
    icon: CalendarCheck,
    title: 'Meeting Coordination',
    description:
      'When prospects reply interested, we handle the back-and-forth and book qualified meetings directly on your calendar.',
    imageUrl:
      'https://i.pinimg.com/736x/3a/1d/4a/3a1d4a6ed43baf2b9a4045c0cb594b39.jpg',
  },
  {
    number: '006',
    icon: ArrowUp,
    title: 'Reply & Objection Handling',
    description:
      "We respond to questions, handle objections, and nurture warm leads until they're ready to book—keeping your pipeline moving.",
    imageUrl:
      'https://i.pinimg.com/736x/91/0a/6c/910a6c6cb40afdb72848e4a37900e8a3.jpg',
  },
  {
    number: '007',
    icon: Play,
    title: 'A/B Testing & Iteration',
    description:
      'We test subject lines, messaging angles, and CTAs to find what resonates best with your audience and improve results over time.',
    imageUrl:
      'https://i.pinimg.com/736x/5c/53/6c/5c536ca394afdc9a9ef5cb8c639ddca8.jpg',
  },
  {
    number: '008',
    icon: Signature,
    title: 'Weekly Reporting',
    description:
      "Clear dashboards showing emails sent, open rates, replies, and meetings booked—plus insights on what's working and what we're testing next.",
    imageUrl:
      'https://i.pinimg.com/736x/92/38/1a/92381a841c2b8d1e65eb0c511a7e4a55.jpg',
  },
  {
    number: '009',
    icon: Globe,
    title: 'Ongoing Optimization',
    description:
      'As we learn what works for your market, we refine targeting, refresh messaging, and scale up to drive more meetings each month.',
    imageUrl:
      'https://i.pinimg.com/736x/ee/ba/2e/eeba2e4632273ef8c4bdb7827f567940.jpg',
  },
]

  return (
    <section className="bg-white text-black py-24">
      <div className="max-w-6xl mx-auto ">
        
        <div className="mb-16 text-center">
  <h2 className="text-4xl font-semibold tracking-tight mb-3">
    We Do Everything. You Close Deals.
  </h2>
  <p className="text-base text-neutral-600">
    From list building to booked meetings — here's exactly what's included.
  </p>
</div>

        {/* Mobile = vertical stack with collapse, Desktop = grid */}
        <div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.number} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
