
import { ArrowUpRight, Asterisk, ChevronRight } from "lucide-react";
import Image from "next/image";
import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import BookMeetingCTA from "@/components/landing/booking-cta";
import ProblemSolution from "@/components/landing/problem-solution";
import FounderCard from "@/components/landing/founder";
import FounderCardTwo from "@/components/landing/founder2";
import TwoCardSolution from "@/components/landing/two-card-solution";
export default function Home() {
  return (
    <div className="">
    <div className="font-inter tracking-tight">
      
      <div className="grid gap-5 md:mt-8 p-4 md:px-8">
      <Header/>
      <Hero/>
      <ProblemSolution/>
      <TwoCardSolution/>
      {/* <FounderCard/> */}
      <FounderCardTwo/>
      <BookMeetingCTA/>
     
    <div className="flex px-2 md:px-20 mt-2 justify-center">
     <div className=" flex items-center gap-2">  <ArrowUpRight className = "size-4"/>corascale ©</div>
     <div className=" flex items-center gap-2 font-mono text-sm"> <ChevronRight className = "size-4"/> <Asterisk className = "size-4"/> 2025_</div>
     </div>
     </div>
     </div>
     </div>
    
   
  );
}
