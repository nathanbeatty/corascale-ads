"use client";

import Image from "next/image";
import { Calendar, ChartArea, ChartSpline, DollarSign, Handshake, LucideIcon, TrendingUp, Users } from "lucide-react";

interface CardProps {
  icon: string;
  title: string;
  description: string;
  stat: string;
  lucideIcon?: LucideIcon; // optional lucide icon
}

function SolutionCard({ icon, title, description, stat, lucideIcon: Icon }: CardProps) {
  return (
    <div className="flex gap-5 rounded-2xl bg-white text-black p-2  border border-gray-200 ">
      {/* Image Icon */}
      <div className="w-8 h-full shrink-0 rounded-lg relative overflow-hidden">
        <Image
          src={icon}
          alt={title}
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Text Content */}
      <div className = "p-2">
        <h3 className="text-lg font-semibold inline-flex items-center gap-2">
          
          {title}
          {Icon && <Icon className="size-4" />}
        </h3>
        <p className="mt-1 text-gray-500 text-sm">{description}</p>
        <p className="mt-2 text-sm text-gray-700">{stat}</p>
      </div>
    </div>
  );
}

export default function CorascaleOffer() {
  return (
    <div className="py-10">
      <h3 className="text-3xl text-center mb-5 font-semibold">What We Do</h3>
    <section className="grid gap-4 md:grid-cols-1 max-w-2xl mx-auto ">
    
      <SolutionCard
        icon="https://i.pinimg.com/736x/ab/ac/01/abac01159f965f139d39370e69f7d277.jpg"
        title="Save Time"
        description="Stop wasting hours prospecting or following up with cold leads. Corascale handles the research, copywriting, and outreach automation — all while you stay focused on your clients."
        stat="No more chasing leads without results"
        lucideIcon={TrendingUp}
      />
      <SolutionCard
        icon="https://i.pinimg.com/736x/72/93/3e/72933efc36a5b32d803cc345abad1d2c.jpg"
        title="Fill Your Calendar"
        description="Get 5–10 qualified meetings every month with decision-makers ready to talk. We don’t just send messages — we deliver booked calls on your calendar."
        stat="Consistent, qualified meetings."
        lucideIcon={Calendar}
      />
      <SolutionCard
        icon="https://i.pinimg.com/736x/ee/cc/5c/eecc5cd3c8e4f20b5ff05a194ed48d0e.jpg"
        title="Close More Deals"
        description="Every lead we generate is verified, engaged, and relevant to your business. You get a pipeline of opportunities that convert — not just names on a list."
        stat="Meetings that are ready to convert"
        lucideIcon={DollarSign}
      />

      
      
    </section>
    </div>
  );
}
