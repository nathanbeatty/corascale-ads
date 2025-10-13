"use client";

import { Mail, Users } from "lucide-react";
import EmailSubmit from "../ui/email-submit";

export default function BookMeetingCTA() {
  return (
    <section id="BOOKCTA" className="dark:bg-muted/25 py-5">
      <div className="max-w-xl mx-auto">
        {/* Text */}
        <div className="flex flex-col w-full gap-6 pt-20 md:px-10 text-center">
         <h2 className="text-3xl font-semibold  mx-auto tracking-tight">
  Ready to Add 5-10 Qualified Meetings a Month?
</h2>

<p className="text-lg mx-auto text-muted-foreground">
  Schedule a call and see how our outbound system can consistently bring you sales-ready opportunities.
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
