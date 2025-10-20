import { Check } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

interface Deliverable {
  title: string
  description: string
}

const DeliverableItem = ({ title, description }: Deliverable) => (
  <div className="flex gap-3">
    <div className="flex-shrink-0">
      <Check className="size-4 text-white/60 mt-0.5" />
    </div>
    <div>
      <h4 className="font-medium  text-white">{title}</h4>
      <p className="text-sm text-white/50 mt-0.5">{description}</p>
    </div>
  </div>
)

export default function PricingCard() {
  const deliverables: Deliverable[] = [
    {
      title: "Research & Targeting",
      description: "Custom ICP research, lead list building, and ideal customer profiling",
    },
    {
      title: "Done-For-You Outreach",
      description: "Personalized cold email sequences, domain warmup, and continuous optimization",
    },
    {
      title: "Meeting Booking",
      description: "5-10 qualified IT decision-maker meetings booked to your calendar monthly",
    },
    {
      title: "Weekly Reporting",
      description: "Transparent metrics, performance tracking, and campaign insights",
    },
    {
      title: "Campaign Optimization",
      description: "Continuous A/B testing, refinement, and strategy adjustments",
    },
    {
      title: "Results Guarantee",
      description: "Minimum 5 qualified meetings in first 6 weeks or we keep working free",
    }
  ]

  return (
    <section id="PRICING" className="py-20 px-4 bg-black">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-white mb-3">
            Simple Pricing
          </h2>
          <p className="text-base text-white/60">
            Month-to-month. No contracts. Cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0">
          {/* Left Column - Description */}
          <div className="lg:col-span-1 flex flex-col p-4 justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Everything you need to build predictable pipeline
              </h3>
              <p className=" text-white/60 leading-relaxed">
                Stop relying on referrals. Get consistent, qualified IT decision-maker meetings every month.
              </p>
            </div>
            <div className="mt-8 hidden lg:block">
              <p className="text-sm text-white/40">
                ✓ No setup fees<br/>
                ✓ Month-to-month<br/>
                ✓ Results guaranteed
              </p>
            </div>
          </div>

          {/* Right Column - Pricing Card */}
          <div className="lg:col-span-2">
            <Card className="p-8 md:p-10 border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] shadow-lg backdrop-blur-sm">
              {/* Price Header */}
              <div className="mb-4">
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-6xl font-bold tracking-tight text-white">$2,500</span>
                  <span className="text-lg text-white/60">/month</span>
                </div>

                <div className="space-y-2">
                  <p className=" font-medium text-white">
                    5–10 qualified IT decision-maker meetings
                  </p>
                  <p className=" text-white/60">
                    Most MSPs close 20-30% into new clients
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/10 mb-8" />

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {deliverables.map((item, index) => (
                  <DeliverableItem key={index} {...item} />
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-white/10 mb-8" />

              {/* CTA Button */}
              <Button asChild className="w-full h-11 bg-white text-black hover:bg-white/90 font-medium text-base">
                <Link href="#BOOKING">
                  Book Strategy Call
                </Link>
              </Button>
              
              <p className="text-center text-xs text-white/40 mt-4">
                15 minutes to discuss your pipeline and see if we're a fit
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}