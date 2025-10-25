"use client";
import { Calendar, Sparkles, TrendingUp } from "lucide-react";
import EmailSubmit from "../ui/email-submit";

export default function BookMeetingCTA() {
  return (
    <section id="BOOKING" className="relative py-24 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="relative max-w-4xl mx-auto px-4">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border bg-background/80 backdrop-blur-sm text-sm">
            <TrendingUp className="w-3.5 h-3.5 text-blue-500" />
            <span className="font-medium">Free Strategy Call</span>
          </div>
        </div>

        {/* Main content card */}
        <div className="relative">
          {/* Card */}
          <div className="relative bg-background border rounded-3xl p-8 md:p-12">
            {/* Icon */}
            {/* <div className="flex justify-center mb-6">
              <div className="w-14 h-14 rounded-2xl bg-blue-500 flex items-center justify-center">
                <Calendar className="w-7 h-7 text-white" />
              </div>
            </div> */}

            {/* Text */}
            <div className="text-center mb-8 space-y-4">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                Ready to Fill Your Pipeline?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Book a 15-minute strategy call to see if we're a fit. No pitch, just a real conversation about your growth goals.
              </p>
            </div>

            {/* Form */}
            <div className="max-w-md mx-auto">
              <EmailSubmit />
            </div>

            {/* Trust indicators */}
            {/* <div className="mt-8 pt-8 border-t flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span>Average response time: 2 hours</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-border" />
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Typically booked within 24 hours</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}