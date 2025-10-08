'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { CheckCircle, DollarSign } from "lucide-react"

export default function BeforeAfterCorascale() {
  const beforeTasks = [
    "Research and build prospect lists",
    "Write personalized outreach messages",
    "Send hundreds of cold emails or DMs",
    "Track responses and follow-ups",
    "Handle objections and questions",
    "Schedule appointments manually",
    "Deal with no-shows and cancellations",
    "Manage your CRM and pipeline",
  ]

  const afterTasks = [
    { icon: CheckCircle, label: "Show up to qualified meetings" },
    { icon: DollarSign, label: "Close deals" },
  ]

  return (
    <section className="  bg-white dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
            Before & After
          </h2>
        </div>

        {/* Comparison */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* BEFORE */}
          <Card className="border-muted shadow-md bg-background">
            <CardHeader>
              <CardTitle className="text-2xl font-medium text-left">
                Without Corascale
              </CardTitle>
              <p className="text-sm text-muted-foreground text-left">
                Everything you handle manually
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-left">
                {beforeTasks.map((task, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-slate-700 dark:text-slate-300"
                  >
                    <span className="text-sm text-slate-400 w-6 text-right">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base font-light">{task}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* AFTER */}
          <Card className="border-2 bg-slate-950 text-white shadow-md relative overflow-hidden">
            <CardHeader className="relative z-10">
              <CardTitle className="text-2xl font-medium text-left text-white">
                With Corascale
              </CardTitle>
              <p className="text-sm text-slate-400 text-left">
                Your entire focus now
              </p>
            </CardHeader>
            <CardContent className="relative z-10">
              <ul className="space-y-4 text-left">
                {afterTasks.map(({ icon: Icon, label }, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Icon className="w-5 h-5  flex-shrink-0" />
                    <span className="text-xl font-light text-white">{label}</span>
                  </li>
                ))}
              </ul>

              <div className="my-10 pt-8 border-t border-white">
                <p className="text-lg  font-light">
                  You only pay for booked meetings with your ideal customers.
                </p>
              </div>

              <div className="relative w-full h-32 overflow-hidden rounded-xl">
                <div className="absolute inset-0 backdrop-blur-lg rounded-xl bg-white/10 z-10" />
                <Image
                  src="https://i.pinimg.com/736x/44/5d/90/445d90bec5fd581f432a330ef58dad48.jpg"
                  alt="Cover Image"
                  fill
                  className="object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
