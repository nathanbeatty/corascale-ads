import { CheckCircle2, Calendar, TrendingUp, DollarSign } from "lucide-react";
import NotificationStack from "../ui/cycling-cards";
import { Button } from "../ui/button";
import LogoCloud from "./logoslider";

export default function Hero() {
  return (
    <div className="">
    <section className="relative flex justify-center items-center w-full overflow-hidden rounded-4xl">
      {/* Background Image */}
      <img
        src="https://i.pinimg.com/1200x/3a/00/ad/3a00adee4a611b465fe4c361de91cfa2.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover brightness-[0.55]"
      />

      {/* Overlay Content */}
      <div className="relative z-10 bg-black/50 w-full px-6 md:px-16 py-20 md:py-20 md:pb-35 flex flex-col items-center backdrop-blur-xl rounded-4xl">
        {/* Hero Copy */}
        <div className="flex flex-col justify-center text-center text-white">
          {/* Badge */}
          <span className="border border-white/30 bg-white/10 rounded-full mb-6 px-3 py-1 inline-flex items-center justify-center font-medium tracking-tight text-xs md:text-sm w-fit mx-auto">
            <CheckCircle2 className="mr-2 size-4" /> Done-For-You
          </span>

          {/* Headline */}
          <h1 className="font-inter font-semibold tracking-tight text-3xl md:text-6xl leading-tight max-w-3xl mx-auto">
            Predictable Pipeline for Consultants
          </h1>
          {/* Subheadline */}
          <p className="mt-6 text-lg md:text-xl  max-w-md mx-auto">
             Get 5-10 qualified meetings every month with your ideal clients.  
          </p>
        </div>

        {/* Animated Visual - Notification Stack */}
        <div className="mt-2 mb-10 py-5 w-full flex justify-center items-center">
          <div className="relative w-full max-w-md">
            {/* Glow effect */}
            <div className="inset-0 rounded-[2rem] bg-blue-500/30 blur-3xl opacity-40 animate-pulse" />
            {/* The Notification Stack Component */}
            <div className="relative">
              <NotificationStack />
            </div>
          </div>
        </div>
      </div>
    </section>
    <LogoCloud/>
    </div>
  );
}