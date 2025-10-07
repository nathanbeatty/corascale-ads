'use client'

import React from 'react'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { CalendarDays, Play, ArrowRightCircle, LucideIcon } from 'lucide-react'

type Step = {
  title: string
  desc: string
  icon: LucideIcon
}

export default function TimelineImplementation() {
  const steps: Step[] = [
    {
      title: 'Week 1 — Kickoff',
      desc: 'Kickoff meeting to align goals and confirm timelines.',
      icon: CalendarDays,
    },
    {
      title: 'Week 2 — Implementation & Warmup',
      desc: 'We set up campaigns, build custom systems, start warmup, and create messaging to target your ICP.',
      icon: Play,
    },
    {
      title: 'Week 3 — First Bookings',
      desc: 'Your first qualified meetings land in your calendar.',
      icon: ArrowRightCircle,
    },
    {
      title: 'Week 4 + — Improvement and Refinement',
      desc: 'We monitor our campaigns, refine our approach, and improve our strategy.',
      icon: ArrowRightCircle,
    },
  ]

  return (
    <section className="px-6 bg-white dark:bg-neutral-950">
      <div className="max-w-5xl mx-auto">
        <Card className="shadow-none border-0">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center">
            {/* Left image */}
            <div>
              <div className="w-full col-span-1 relative rounded-xl overflow-hidden h-40 md:h-140">
                <div className="absolute inset-0 bg-gradient-to-t backdrop-blur-xs rounded-xl from-white/40 via-transparent z-20 to-transparent mix-blend-multiply" />
                <Image
                  src="https://i.pinimg.com/736x/d5/39/58/d5395846159014bf17bda9005b0e926c.jpg"
                  alt="Implementation Image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right content */}
            <div className="p-8 mx-auto col-span-2 max-w-lg">
              <div className="p-0 mb-4">
                <h3 className="text-2xl md:text-4xl tracking-tight font-medium">
                  Implementation Timeline
                </h3>
              </div>

              <div className="mt-6 space-y-6">
                {steps.map(({ title, desc, icon: Icon }, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <Icon className="mt-1 text-primary h-5 w-5 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-medium text-slate-900 dark:text-slate-100">
                        {title}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
