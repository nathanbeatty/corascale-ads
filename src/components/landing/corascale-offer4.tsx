'use client';

import Image from "next/image";
import { Calendar, TrendingUp, LucideIcon } from "lucide-react";

interface CardProps {
  icon: string;
  title: string;
  description: string;
  stat: string;
  lucideIcon?: LucideIcon;
}

function BenefitCard({ icon, title, description, stat, lucideIcon: Icon }: CardProps) {
  return (
    <div className="flex gap-5 rounded-2xl bg-neutral-900 text-white p-6 shadow-lg border border-neutral-800 hover:border-neutral-700 transition-colors">
      {/* Icon */}
      <div className="w-14 h-14 shrink-0 rounded-xl overflow-hidden">
        <Image
          src={icon}
          alt={title}
          width={56}
          height={56}
          className="object-cover"
        />
      </div>

      {/* Text */}
      <div>
        <h3 className="text-xl font-semibold inline-flex items-center gap-2">
          {title}
          {Icon && <Icon className="w-4 h-4 text-white" />}
        </h3>
        <p className="mt-1 text-gray-400 ">{description}</p>
        <p className="mt-2 text-sm text-gray-500">{stat}</p>
      </div>
    </div>
  );
}

export default function CorascaleOffer4() {
  return (
    <section className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto py-16 px-4">
      <BenefitCard
        icon="https://i.pinimg.com/736x/2f/4e/42/2f4e4299cd135ad92c494b560f017c41.jpg"
        title="Save Time"
        description="Stop wasting hours on cold outreach that gets ignored. We handle the entire process—prospecting, messaging, and follow-ups—so you can focus on closing deals."
        stat="No more chasing leads without results"
        lucideIcon={TrendingUp}
      />
      <BenefitCard
        icon="https://i.pinimg.com/736x/5b/d6/ff/5bd6ffeed99497524c0ce078895a44c5.jpg"
        title="Fill Your Calendar"
        description="Get a steady stream of qualified appointments with IT decision-makers who actually want to talk. No more empty calendars or chasing unresponsive leads."
        stat="Average 10–15 qualified meetings per month"
        lucideIcon={Calendar}
      />
    </section>
  );
}
