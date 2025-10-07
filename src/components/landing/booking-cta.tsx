"use client";

import { Mail, Users } from "lucide-react";
import EmailSubmit from "../ui/email-submit";

export default function BookMeetingCTA() {
  return (
    <section id="BOOKCTA" className="dark:bg-muted/25 py-5">
      <div className="max-w-xl mx-auto">
        {/* Text */}
        <div className="flex flex-col w-full gap-6 pt-20 md:px-10 text-center">
          <h2 className="text-3xl font-medium mx-auto tracking-tight">
            Done For You Outbound — See How We Can Grow Your Business
          </h2>

          <p className="text-lg max-w-md mx-auto text-muted-foreground">
            Request a meeting and we'll get back to you ASAP.
          </p>
        </div>

        {/* Form */}
        <div className="flex flex-col w-full max-w-lg mx-auto rounded-2xl mt-5 md:mt-0 md:p-6">
          <EmailSubmit />
        </div>

        {/* Social proof / scarcity (optional) */}
        {/* <div className="mt-4 text-center text-xs text-muted-foreground">
          Only 3 free audits available this week.
        </div> */}
      </div>
    </section>
  );
}
