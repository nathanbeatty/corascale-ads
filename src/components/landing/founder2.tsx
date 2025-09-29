import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import greece from '@/images/greece.jpeg'
export default function FounderCardTwo() {
  return (
    <div className="relative max-w-3xl mx-auto rounded-3xl py-10 md:py-16 px-6 md:px-12 text-center backdrop-blur-2xl bg-white/10 ">
      {/* Founder Image */}
      

      {/* Quote */}
      <p className="mt-6 text-xl md:text-2xl leading-relaxed tracking-tight font-light max-w-xl mx-auto ">
        {/* <ShieldCheck className="inline-block text-green-400 mb-1 mr-2 size-5" /> */}
        “I personally <span className="font-medium">manage your account</span> and 
        <span className="font-semibold"> guarantee results</span> — or you 
        <span className="font-semibold"> don’t pay</span>. Your success is my reputation, and I stand behind every campaign I run.”
      </p>

      {/* Name & Title */}
      <div className="flex items-center justify-center gap-5 mt-10 border w-fit mx-auto rounded-2xl p-4">
        <div className="w-16 h-16 relative  rounded-full overflow-hidden ">
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
