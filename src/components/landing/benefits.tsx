import { Check, Phone } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ChartArea, ChartSpline, DollarSign, LucideIcon, TrendingUp, Users } from "lucide-react";

interface Deliverable {
  title: string
  description: string
}

const DeliverableItem = ({ title, description }: Deliverable) => (
  <div className="flex gap-3">
    <div className="flex-shrink-0">
      <Check className="size-4 /60 mt-0.5" />
    </div>
    <div>
      <h4 className="font-medium  ">{title}</h4>
      <p className="text-sm /50 mt-0.5">{description}</p>
    </div>
  </div>
)

interface CardProps {
  icon: string;
  title: string;
  description: string;
  stat: string;
  lucideIcon?: LucideIcon; // optional lucide icon
}

function SolutionCard({ icon, title, description, stat, lucideIcon: Icon }: CardProps) {
  return (
    <div className="flex gap-5 rounded-2xl bg-neutral-900 text-white p-6 shadow-lg border border-neutral-800 hover:border-neutral-700 transition-colors">
      {/* Image Icon */}
      <div className="w-14 h-14 shrink-0 rounded-xl overflow-hidden">
        <Image
          src={icon}
          alt={title}
          width={56}
          height={56}
          className="object-cover"
        />
      </div>

      {/* Text Content */}
      <div>
        <h3 className="text-lg font-semibold inline-flex items-center gap-2">
          
          {title}
          {Icon && <Icon className="size-4 text-white" />}
        </h3>
        <p className="mt-1 text-gray-400 text-sm">{description}</p>
        <p className="mt-2 text-sm text-gray-500">{stat}</p>
      </div>
    </div>
  );
}

export default function BenefitsSection() {
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
    <section id="BENEFITS" className="py-20 md:px-4 ">
      <div className="mx-auto w-full max-w-6xl">
        <div className="text-center mb-16">
  <h2 className="text-4xl font-semibold tracking-tight mb-4">
    Predictable Pipeline, Without the Hassle
  </h2>
  <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
    We handle targeting, messaging, infrastructure, and booking — you just show up to qualified meetings with IT decision-makers.
  </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
  {/* Left Column - Description */}
  <div className="lg:col-span-1 flex md:order-2 flex-col p-8 justify-between">
    <div>
      <h3 className="text-2xl font-semibold mb-4">
        5-10 Qualified Meetings Per Month
      </h3>
      <p className="text-neutral-600 leading-relaxed">
        Stop chasing referrals and cold calling. Get consistent meetings with IT leaders actively looking to scale their operations.
      </p>
      <div className="h-px bg-black/10 my-4" />
      {/* CTA Button */}
      <Button variant={"blue"} asChild className="w-full">
        <Link href="#BOOKING">
          Apply Now
        </Link>
      </Button>
      <p className="text-center text-xs text-neutral-500 mt-4">
        15 minutes · See if we're a fit for your firm
      </p>
    </div>
  </div>

          {/* Right Column - Pricing Card */}
          <div className="lg:col-span-2 md:order-1">
            <Card className="p-2 gap-2 md:gap-4 md:p-8 border bg-black rounded-2xl border-black/10  from-white/5 to-white/[0.02] backdrop-blur-sm">
              {/* Price Header */}
               <SolutionCard
                      icon="https://i.pinimg.com/736x/e7/18/58/e71858cd45bb9542f345faf93f4b1dad.jpg"
                      title="Save Your Time"
                      description="Stop wasting hours on cold outreach that gets ignored. We handle the entire process—prospecting, messaging, and follow-ups—so you can focus on closing deals."
                      stat="No more chasing leads without results"
                      lucideIcon={TrendingUp}
                    />
                    <SolutionCard
                            icon="https://i.pinimg.com/1200x/86/52/b9/8652b955a2c65f19dfaa9990cdca8287.jpg"
                            title="Fill Your Calendar"
                            description="Get a steady stream of qualified appointments with IT decision-makers who actually want to talk. No more empty calendars or chasing unresponsive leads."
                            stat="Average 5-10 qualified meetings per month"
                            lucideIcon={Calendar}
                          />
                          <SolutionCard
                            icon="https://i.pinimg.com/1200x/0a/3f/31/0a3f31f8fcc5b754e7ca855673697650.jpg"
                            title="Convert More Deals"
                            description="Every lead we generate is verified, engaged, and relevant to your business. You get a pipeline of opportunities that convert — not just names on a list."
                            stat="No more chasing leads without results"
                            lucideIcon={DollarSign}
                          />

              
              
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}