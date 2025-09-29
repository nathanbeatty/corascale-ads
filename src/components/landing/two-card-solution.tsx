"use client";

import Image from "next/image";
import { ChartArea, ChartSpline, DollarSign, LucideIcon, Users } from "lucide-react";

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

export default function TwoCardSolution() {
  return (
    <section className="grid gap-4 md:grid-cols-2 max-w-4xl mx-auto py-10">
      <SolutionCard
        icon="https://i.pinimg.com/736x/2f/4e/42/2f4e4299cd135ad92c494b560f017c41.jpg"
        title="Spend Smarter"
        description="Stop wasting money on clicks that don’t convert. We optimize your Google Ads so every dollar works harder for you."
        stat="On average clients save 10–20% of ad spend"
        lucideIcon={ChartSpline}
      />
      <SolutionCard
        icon="https://i.pinimg.com/736x/5b/d6/ff/5bd6ffeed99497524c0ce078895a44c5.jpg"
        title="Get More Clients"
        description="Turn more clicks into real customers. With precise targeting and data-driven campaigns, we bring you more calls and bookings."
        stat="Clients typically see 2–3x more leads"
        lucideIcon={Users}
      />
    </section>
  );
}
