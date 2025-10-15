import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import greece from '@/images/greece.jpeg'
export default function FounderCardTwo() {
  return (
    <div className="relative max-w-3xl mx-auto rounded-3xl py-10 md:py-16 px-6 md:px-12 text-center backdrop-blur-2xl bg-white/10 ">
      {/* Founder Image */}
      

      {/* Quote */}
      <p className="mt-6 text-xl md:text-2xl leading-relaxed tracking-tight max-w-xl mx-auto">
  “Think of us as your growth partner, not another agency.  
  We handle the strategy, outreach, and execution,  
  so you can stay focused on closing deals and serving clients.”
</p>


      {/* Name & Title */}
      <div className="flex items-center justify-center gap-5 mt-6  w-fit mx-auto rounded-2xl p-4">
        <div className="w-20 h-20 relative  rounded-sm overflow-hidden ">
        <Image
          src={greece}
          alt="Founder"
          fill
          className="object-cover"
        />
      </div>
      <div className="text-left">
      <h3 className="text-xl font-semibold font-inter tracking-tight ">
        Nathan Beatty
      </h3>
      <p className=" font-inter text-gray-600 font-light tracking-tighter">Founder, Corascale</p>
      </div>
      </div>
    </div>
  );
}
