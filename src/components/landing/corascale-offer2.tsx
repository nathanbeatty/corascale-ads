import Image from "next/image";
import {
  Calendar,
  DollarSign,
  TrendingUp,
  LucideIcon,
} from "lucide-react";

interface CardProps {
  icon: string;
  title: string;
  description: string;
  stat: string;
  lucideIcon?: LucideIcon; // optional lucide icon
  flip?: boolean; // new prop to flip layout
}

function SolutionCard({ icon, title, description, stat, lucideIcon: Icon, flip = false }: CardProps) {
  return (
    <div
      className={`gap-5 rounded-2xl grid md:grid-cols-2 bg-white items-center text-black p-2 border-gray-200`}
    >
      {/* Image Icon */}
      <div className={`md:p-5  ${
          flip ? "md:order-2" : "md:order-1"
        }`}>
      <div
        className={`w-full h-100 shrink-0 rounded-4xl relative overflow-hidden `}
      >
        <div className="absolute left-0 right-0 top-0 bottom-0 backdrop-blur-xs rounded-5xl bg-white/5 z-10"/>
        <Image
          src={icon}
          alt={title}
          fill
          className="object-cover rounded-lg object-center"
        />
      </div>
      </div>

      {/* Text Content */}
      <div className={`p-4 md:p-8 ${flip ? "md:order-1" : "md:order-2"}`}>
        <h3 className="text-2xl md:text-3xl font-semibold inline-flex items-center gap-2">
          {title}
          {Icon && <Icon className="size-6" />}
        </h3>
        <p className="mt-5 text-gray-500 text-xl">{description}</p>
        <p className="mt-5 text-lg text-gray-700">{stat}</p>
      </div>
    </div>
  );
}

export default function CorascaleOffer2() {
  return (
    <div className="py-10">
      {/* <h3 className="text-3xl text-center mb-5 font-semibold">What We Do</h3> */}
      <section className="grid gap-10 md:gap-30 max-w-7xl mx-auto">
        <SolutionCard
          icon="https://i.pinimg.com/1200x/43/b6/2c/43b62c21d1abce4dbefda1e5435db71e.jpg"
          title="Save Time"
          description="Stop wasting hours prospecting or following up with cold leads. We handle the research, copywriting, and outreach automation — all while you stay focused on your clients."
          stat="No more chasing leads without results"
          lucideIcon={TrendingUp}
        />
        <SolutionCard
          icon="https://i.pinimg.com/1200x/7f/d1/73/7fd1735a783d0323f130c01aaa8c63d5.jpg"
          title="Fill Your Calendar"
          description="Get 5–10 IT decision-maker meetings every month. CTOs, VPs of IT, COOs, and Operations leaders at SMBs who need your services. We don’t just send messages — we deliver booked calls on your calendar."
          stat="Consistent, qualified meetings."
          lucideIcon={Calendar}
          flip
        />
        <SolutionCard
          icon="https://i.pinimg.com/1200x/e2/44/0f/e2440fad2af1179669a2c5ab800a7a45.jpg"
          title="Close More Deals"
          description="Every lead is a verified IT decision-maker at SMBs ready to talk about infrastructure, security, and compliance. Pipeline that actually converts."
          stat="Meetings that are ready to convert"
          lucideIcon={DollarSign}
        />
      </section>
    </div>
  );
}
