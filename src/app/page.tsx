
import { ArrowUpRight, Asterisk, ChevronRight } from "lucide-react";
import Image from "next/image";
import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import BookMeetingCTA from "@/components/landing/booking-cta";
import ProblemSolution from "@/components/landing/problem-solution";
import TwoCardSolution from "@/components/landing/two-card-solution";
import BeforeAfterCorascale from "@/components/landing/beforeafter";
import CorascaleOffer from "@/components/landing/corascale-offer";
import TimelineImplementation from "@/components/landing/timeline";
import FounderCardThree from "@/components/landing/founder3";
import FounderCardTwo from "@/components/landing/founder2";
// import LogoCloud from "@/components/logo-cloud";
import LogoCloud from "@/components/landing/logoslider";
import FeaturesSix from "@/components/features-six";
import PricingCard from "@/components/landing/pricing-card";
import FAQsTwo from "@/components/faqs-2";
import CorascaleOffer2 from "@/components/landing/corascale-offer2";
import CorascaleOffer3 from "@/components/landing/corascale-offer3";
import Features from "@/components/features-10";
import CorascaleOffer4 from "@/components/landing/corascale-offer4";
import BenefitsSection from "@/components/landing/benefits";
import FeaturesNine from "@/components/ui/feature-nine";

export default function Home() {
  return (
    <div className="">
    <div className="font-inter tracking-tight">
      <div className="md:mt-8 p-4 md:px-8">
      <Header/>
      </div>
      <div className="grid gap-5 md:gap-20 p-4 md:px-8">
      
      <Hero/>

</div>
{/* <Features/> */}
      {/* <CorascaleOffer4/> */}
     
      <div className="grid gap-5 md:gap-20 p-4 md:px-8">
      <BenefitsSection/>
      <FeaturesNine/>
      {/* <FeaturesSix/> */}
      </div>
      <PricingCard/>
      <div className="grid gap-5 md:gap-20 p-4 md:px-8">
      <FounderCardTwo/>
      <FAQsTwo/>
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
