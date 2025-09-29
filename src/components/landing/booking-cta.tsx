"use client";

import { Megaphone } from "lucide-react";
import Scarcity from "../ui/scarcity";
import EmailSubmit from "../ui/email-submit";

export default function BookMeetingCTA() {
  return (
    <section id="BOOKCTA" className="dark:bg-muted/25 py-5">
      <div className="max-w-xl mx-auto">
        {/* Text */}
        <div className="flex flex-col w-full gap-6 pt-20 md:px-10 text-center">
          <h2 className="text-3xl font-medium mx-auto tracking-tight">
            Get a Free{" "}
            <span className="inline-flex items-center gap-2 font-inter text-lg tracking-tight font-medium rounded-full px-4 py-1 border border-gray-300 bg-white ">
              <Megaphone className="size-4 text-gray-700" />
              <span>
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span> Ads
              </span>
            </span>{" "}
            Audit — See Where You’re Losing Money
          </h2>
          <p className="text-lg max-w-md mx-auto">
            We’ll review your Google Ads together. In 20 minutes, you’ll know
            exactly what’s working, what’s wasting money, and how to fix it.
          </p>
        </div>

        {/* Audit Form */}
        <div className="flex flex-col w-full max-w-lg mx-auto rounded-2xl mt-5 md:mt-0 md:p-6">
          
          <EmailSubmit />
          {/* <Scarcity /> */}
        </div>
      </div>
    </section>
  );
}
