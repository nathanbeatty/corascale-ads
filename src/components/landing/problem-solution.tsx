import { DollarSign, Megaphone } from "lucide-react";

export default function ProblemSolution() {
  return (
    <section className="flex justify-center items-center py-10 md:py-16 px-4">
      <p className="text-center font-inter leading-relaxed sm:leading-10 max-w-2xl text-2xl sm:text-3xl lg:text-4xl">
        Stop wasting money on{" "}
        <span className="inline-flex flex-wrap items-center gap-2 border border-black font-inter text-base sm:text-lg tracking-tight font-medium rounded-full px-3 sm:px-4 py-1">
          <Megaphone className="w-4 h-4 sm:w-5 sm:h-5" />
          Google Ads
        </span>{" "}
        that don’t bring you bookings. We track your funnel and turn wasted
        clicks into{" "}
        <span className="inline-flex flex-wrap items-center gap-2 border border-black font-inter text-base sm:text-lg tracking-tight font-medium rounded-full px-3 sm:px-4 py-1">
          <DollarSign className="w-4 h-4 sm:w-5 sm:h-5" />
          paying customers
        </span>{" "}
        — guaranteed.
      </p>
    </section>
  );
}
