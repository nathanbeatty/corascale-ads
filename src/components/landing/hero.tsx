import { CheckCircle2, Phone, TrendingUp } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative flex justify-center items-center mb-10 w-full">
      {/* Background Image */}
      <Image
        src="https://i.pinimg.com/736x/00/c6/9a/00c69a8abbe41d20263e894b65c250df.jpg"
        alt="Background"
        fill
        priority
        className="object-cover rounded-4xl shadow-xl"
      />

      {/* Overlay */}
      <div className="relative z-10 w-full  px-6 md:px-20 py-15 md:py-40 text-white text-center backdrop-blur-2xl rounded-4xl">
        {/* Badge */}
        <span className="border border-white/30 bg-white/10 rounded-full mb-6 px-3 py-1 inline-flex items-center font-medium tracking-tight text-xs md:text-sm">
          <CheckCircle2 className="mr-2 size-4" /> Google Ads Certified Expert
        </span>

        {/* Headline */}
        <h1 className="font-inter font-semibold tracking-tight text-4xl md:text-6xl max-w-3xl mx-auto leading-tight">
        More Bookings. <br /> <span className="text-blue-300">Less Wasted Ad Spend.</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
          We help plumbers in Halifax get more high-quality jobs with optimized Google Ads that actually convert — guaranteed.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" variant={"white"} asChild className="px-8 py-6 text-lg font-medium">
            <Link href="#BOOKCTA">
              Book a Free Audit <TrendingUp className="ml-2 size-5" />
            </Link>
          </Button>
          
        </div>
      </div>
    </div>
  );
}
