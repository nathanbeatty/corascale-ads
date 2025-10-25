import { Calendar, DollarSign, TrendingUp, Users2 } from "lucide-react";

export default function ProblemSolution() {
  return (
    <section className="flex justify-center items-center md:py-10 md:px-6 bg-background">
      <div className="max-w-3xl text-center">
        <h2 className="font-inter text-2xl sm:text-3xl lg:text-4xl leading-relaxed sm:leading-snug text-foreground">
          You didn't start your business to spend time on cold outreach.
          <span className="block mt-10">
            We guarantee{" "}
            <span className="inline-flex items-center gap-2 border border-foreground/30 bg-muted/50 rounded-full px-4 py-1.5 text-base sm:text-lg font-medium">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
              5–10 qualified meetings
            </span>{" "} and handle the entire process—targeting, messaging, and booking—so you focus on {" "}
            <span className="inline-flex items-center gap-2 border border-foreground/30 bg-muted/50 rounded-full px-4 py-1.5 text-base sm:text-lg font-medium">
              <DollarSign className="w-4 h-4 sm:w-5 sm:h-5" />
              closing deals
            </span>
            .
          </span>
        </h2>
      </div>
    </section>
  );
}
