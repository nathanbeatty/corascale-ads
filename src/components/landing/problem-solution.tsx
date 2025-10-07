import { Calendar, Clock, User } from "lucide-react";

export default function ProblemSolution() {
  return (
    <section className="flex justify-center items-center py-10 md:py-16 px-4">
      <p className="text-center font-inter leading-relaxed sm:leading-10 max-w-2xl text-2xl sm:text-3xl lg:text-4xl">
        Stop wasting time on{" "}
        <span className="inline-flex flex-wrap items-center gap-2 border border-black font-inter text-base sm:text-lg tracking-tight font-medium rounded-full px-3 sm:px-4 py-1">
          <User className="w-4 h-4 sm:w-5 sm:h-5" />
          cold outreach
        </span>{" "}
        that goes nowhere. We handle the entire process you only pay for{" "}
        <span className="inline-flex flex-wrap items-center gap-2 border border-black font-inter text-base sm:text-lg tracking-tight font-medium rounded-full px-3 sm:px-4 py-1">
          <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
          qualified appointments
        </span>{" "}
        
      </p>
    </section>
  );
}