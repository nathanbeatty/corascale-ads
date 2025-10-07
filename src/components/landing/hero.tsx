import { CheckCircle2, Calendar, TrendingUp } from "lucide-react";
import NotificationStack from "../ui/cycling-cards";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="relative flex justify-center items-center w-full overflow-hidden rounded-4xl mb-10">
      {/* Background Image */}
      <img
        src="https://i.pinimg.com/736x/00/c6/9a/00c69a8abbe41d20263e894b65c250df.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover brightness-[0.55]"
      />
      
      {/* Overlay Content */}
      <div className="relative z-10 w-full px-6 md:px-16 py-20 md:py-20 md:pb-35 flex flex-col items-center backdrop-blur-xl  rounded-4xl">
        
        {/* Hero Copy */}
        <div className="flex flex-col justify-center text-center text-white">
          {/* Badge */}
          <span className="border border-white/30 bg-white/10 rounded-full mb-6 px-3 py-1 inline-flex items-center justify-center font-medium tracking-tight text-xs md:text-sm w-fit mx-auto">
            <TrendingUp className="mr-2 size-4" /> Done-For-You Results
          </span>
          
          {/* Headline */}
          <h1 className="font-inter font-semibold tracking-tight text-4xl md:text-6xl leading-tight max-w-3xl mx-auto">
            Booked Meetings <br />
            <span className="">Guaranteed</span>
          </h1>
          
          {/* Subheadline */}
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-xl mx-auto">
            We handle outbound appointment booking so you can focus on 
            delivering exceptional service — not chasing leads.
          </p>
          
          {/* CTA Buttons */}
          
        </div>

        {/* Animated Visual - Notification Stack */}
        <div className="mt-10 mb-10 py-5 w-full flex justify-center items-center">
          <div className="relative w-full max-w-md">
            {/* Glow effect */}
            <div className=" inset-0 rounded-[2rem] bg-blue-500/30 blur-3xl opacity-40 animate-pulse" />
            
            {/* The Notification Stack Component */}
            <div className="relative">
              <NotificationStack />
            </div>
          </div>
        </div>

        {/* <div className="mt-50 flex flex-col sm:flex-row justify-center gap-4">
            <Button size={"xl"} className="">
              <a href="#BOOKCTA" className="flex items-center">
                Request a Strategy Session
                <Calendar className="ml-2 size-5" />
              </a>
            </Button>
          </div> */}
        
      </div>
    </section>
  );
}