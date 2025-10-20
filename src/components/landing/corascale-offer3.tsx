'use client'

import { motion } from "framer-motion"
import { Calendar, DollarSign, TrendingUp, LucideIcon } from "lucide-react"

interface MockupProps {
  type: "calendar" | "meeting" | "graph"
  bgImage: string
}

const clientPhotos = [
  "https://i.pinimg.com/736x/a6/d6/dd/a6d6dda9a016d8b084dd1ef2ca6c03fa.jpg"
]

function UIMockup({ type, bgImage }: MockupProps) {
  return (
    <div className="relative h-96 md:h-[36rem] w-full rounded-3xl overflow-hidden">
      {/* Blurred Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-md scale-105"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Glass Card Overlay */}
      <div className="relative w-full h-full flex items-center justify-center p-8">
       {type === "calendar" && (
  <div className="w-full max-w-2xl bg-white/70 rounded-2xl border border-white/20 p-6 backdrop-blur-md shadow-lg">
    <div className="flex justify-between items-center mb-4">
      <span className="font-semibold text-gray-900 text-lg">Week Overview</span>
      <span className="text-gray-500 text-sm">Oct 2025</span>
    </div>
    <div className="grid grid-cols-7 gap-2 text-sm text-gray-600 mb-3">
      {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(day => (
        <div key={day} className="text-center">{day}</div>
      ))}
    </div>
    <div className="grid grid-cols-7 gap-2">
      {[...Array(28)].map((_, i) => (
        <div
          key={i}
          className={`h-10 rounded-md flex items-center justify-center text-sm relative ${
            [3, 7, 10, 14, 18].includes(i)
              ? "bg-green-100/60 text-green-800 font-semibold"
              : "bg-gray-100/50 text-gray-400"
          }`}
        >
          {i+1}
          
          
        </div>
      ))}
    </div>
    <div className="mt-3 text-sm text-gray-500">
      
    </div>
  </div>
)}

        {type === "meeting" && (
          <div className="w-full max-w-xl bg-white rounded-2xl border border-gray-200 p-6 shadow-lg flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {clientPhotos.map((src, idx) => (
                    <img key={idx} src={src} className="w-10 h-10 object-cover rounded-full border-2 border-white" />
                  ))}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Meeting Confirmed</h4>
                  <p className="text-gray-500 text-sm">Jordan | Thu, 2:00 PM EST</p>
                </div>
              </div>
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <div className="bg-blue-50 rounded-md p-3 text-sm text-blue-900 border border-blue-100">
              “Looking forward to our chat.”
            </div>
            <div className="flex gap-3 mt-2">
              <button className="flex-1 text-white bg-blue-600 text-sm font-medium py-2 rounded-md hover:bg-blue-700">
                Add to Calendar
              </button>
              <button className="flex-1 text-gray-700 border border-gray-300 text-sm py-2 rounded-md hover:bg-gray-100">
                Reschedule
              </button>
            </div>
          </div>
        )}

        {type === "graph" && (
  <div className="w-full max-w-xl bg-white/80 rounded-2xl border border-white/20 p-6 backdrop-blur-md shadow-lg">
    <div className="flex justify-between items-center mb-4">
      <span className="text-gray-900 font-semibold text-lg">Pipeline</span>
      <span className="text-gray-500 text-sm">This Month</span>
    </div>

    {/* Background grid */}
    <div className="relative h-44 flex items-end gap-2 md:gap-4">
      <div className="absolute inset-0 grid grid-rows-5 border-t border-gray-200 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div key={i} className=" w-full" />
        ))}
      </div>

      {[30,50,70,40,60,80,50,70,80,70,40,60,90,50].map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          animate={{ height: `${h}%` }}
          transition={{ duration: 0.8, delay: i * 0.05 }}
          className="flex-1 relative rounded-full bg-gradient-to-t from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 cursor-pointer"
        >
          
        </motion.div>
      ))}
    </div>

    <div className="mt-3 flex justify-between text-sm text-gray-500">
      <span>Start</span>
      <span>End</span>
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
      className={`relative grid md:grid-cols-2 items-center gap-20 ${
        flip ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <UIMockup type={type} bgImage={bgImage} />
      <div className="relative z-10 px-2">
        <div className="text-gray-900 mb-4">
          {Icon && <Icon className="w-6 h-6 text-gray-800 mb-4" />}
          <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
        </div>
        <p className="text-gray-700 text-lg max-w-lg">{description}</p>
      </div>
    </motion.div>
  )
}

export default function CorascaleOffer3() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="relative max-w-6xl mx-auto px-4 md:px-10 z-10">
        <div className="text-center mb-28">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 tracking-tight">
            Designed for Momentum
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your entire outbound engine, done-for-you to guarantee results and booked meetings on your calendar.
          </p>
        </div>

        <div className="space-y-32">
          <SolutionCard
            title="Save Time"
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
