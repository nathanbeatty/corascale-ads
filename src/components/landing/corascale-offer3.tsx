'use client'

import { motion } from "framer-motion"
import { Calendar, DollarSign, TrendingUp, LucideIcon } from "lucide-react"

interface MockupProps {
  type: "calendar" | "meeting" | "graph"
  bgImage: string
}

function UIMockup({ type, bgImage }: MockupProps) {
  return (
    <div className="relative h-64 md:h-[28rem] w-full rounded-3xl overflow-hidden">
      {/* Blurred Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-md scale-105"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Glass Card Overlay */}
      <div className="relative w-full h-full flex items-center justify-center p-5">
        {type === "calendar" && (
          <div className="w-full max-w-lg bg-white/60 rounded-xl border border-white/20 p-5 backdrop-blur-sm">
            <div className="flex justify-between items-center mb-3">
              <span className="font-medium text-gray-800 text-sm">Your Week</span>
              <span className="text-gray-500 text-xs">Oct 2025</span>
            </div>
            <div className="grid grid-cols-7 gap-1 text-xs text-gray-500 mb-2">
              {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(day => (
                <div key={day} className="text-center">{day}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {[...Array(28)].map((_, i) => (
                <div
                  key={i}
                  className={`h-6 rounded-sm flex items-center justify-center text-xs ${
                    [8, 12, 15].includes(i)
                      ? "bg-blue-100/50 text-blue-700 font-medium"
                      : "bg-gray-100/50 text-gray-400"
                  }`}
                >
                  {i+1}
                </div>
              ))}
            </div>
          </div>
        )}

        {type === "meeting" && (
          <div className="w-full max-w-md bg-white/60 rounded-xl border border-white/20 p-5 backdrop-blur-sm">
            <div className="mb-2">
              <h4 className="text-gray-800 font-medium text-sm">Meeting Booked</h4>
              <p className="text-gray-500 text-xs">Jordan | Thu, 2:00 PM EST</p>
            </div>
            <div className="bg-gray-100/50 rounded-md p-2 text-xs text-gray-600 border border-white/20">
              “Looking forward to our chat.”
            </div>
            <div className="mt-3 flex gap-2">
              <button className="flex-1 text-white bg-blue-600 text-xs font-medium py-1 rounded-md hover:bg-blue-700">
                View Calendar
              </button>
              <button className="flex-1 text-gray-700 border border-white/20 text-xs py-1 rounded-md hover:bg-gray-100/30">
                Reschedule
              </button>
            </div>
          </div>
        )}

        {type === "graph" && (
          <div className="w-full max-w-lg bg-white/60 rounded-xl border border-white/20 p-5 backdrop-blur-sm">
            <div className="flex justify-between items-center mb-3">
              <span className="text-gray-800 font-medium text-sm">Pipeline</span>
              <span className="text-gray-500 text-xs">This Month</span>
            </div>
            <div className="h-32 flex items-end gap-1">
              {[30,50,70,40,60,80,50].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.8, delay: i * 0.05 }}
                  className="flex-1 border border-black rounded-xl"
                />
              ))}
            </div>
            <div className="mt-2 flex justify-between text-xs text-gray-500">
              <span>Mon</span>
              <span>Sun</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

interface CardProps {
  title: string
  description: string
  lucideIcon?: LucideIcon
  type: "calendar" | "meeting" | "graph"
  bgImage: string
  flip?: boolean
}

function SolutionCard({ title, description, lucideIcon: Icon, type, bgImage, flip = false }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`relative grid md:grid-cols-2 items-center gap-16 ${
        flip ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <UIMockup type={type} bgImage={bgImage} />
      <div className="relative z-10">
        <div className="inline-flex items-center gap-3 text-gray-900 mb-2">
          {Icon && <Icon className="w-5 h-5 text-gray-800" />}
          <h3 className="text-xl md:text-2xl font-medium tracking-tight">{title}</h3>
        </div>
        <p className="text-gray-600 text-sm md:text-base max-w-md">{description}</p>
      </div>
    </motion.div>
  )
}

export default function CorascaleOffer3() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="relative max-w-6xl mx-auto px-6 md:px-10 z-10">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-medium text-gray-900 tracking-tight">
            Designed for Momentum
          </h2>
          <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Every step of your pipeline — visualized, automated, and built to help you move forward with calm precision.
          </p>
        </div>

        <div className="space-y-28">
          <SolutionCard
            title="Save Time Effortlessly"
            description="Stop wasting hours prospecting or following up with cold leads. We handle the research, copywriting, and outreach automation — all while you stay focused on your clients."
            lucideIcon={TrendingUp}
            type="meeting"
            bgImage="https://i.pinimg.com/736x/f3/41/d6/f341d6ed7a01de56df396334c69ad123.jpg"
          />
          <SolutionCard
            title="Book More Conversations"
            description="Get 5–10 qualified meetings every month with IT decision-makers ready to talk. We don’t just send messages — we deliver booked meetings on your calendar."
            lucideIcon={Calendar}
            flip
            type="calendar"
            bgImage="https://i.pinimg.com/736x/97/08/8f/97088f8a4e363168bdf90a1332317005.jpg"
          />
          <SolutionCard
            title="Convert With Confidence"
            description="Every lead we generate is verified, engaged, and relevant to your business. You get a pipeline of opportunities that convert — not just names on a list."
            lucideIcon={DollarSign}
            type="graph"
            bgImage="https://i.pinimg.com/736x/e6/3d/ec/e63decde14f7e60de1749057e3c3c8a3.jpg"
          />
        </div>
      </div>
    </section>
  )
}
