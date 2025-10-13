import { ChartBar, Target, TrendingUp } from "lucide-react";
import { Card } from "../ui/card";
import Image from "next/image";

export default function PricingCard(){

    return(
         <section>
            <div className="py-12">
                <div className="mx-auto w-full max-w-5xl">
                    <div>
                        <h2 className="text-foreground max-w-2xl mb-5 text-center text-balance text-3xl font-semibold">Pricing</h2>
                    </div>
                    

                    <div className="">
<Card
                            className=" p-6 bg-black/95 text-white">
                                <div className="flex gap-2 items-center">
                            <TrendingUp className=" size-5" />
                            <span className="">Premium</span>
                            </div>
                            <h3 className="text-5xl font-semibold">$2,500 <span className = "text-base">/ month</span></h3>
<p className=" mb-4">Guaranteed 5–10 qualified meetings with your ideal clients every month.</p>
      <ul className="text-sm mb-6 space-y-1 text-left inline-block">
        <li>Done-for-you outbound management</li>
        <li>Custom targeting and messaging </li>
        <li>Reporting and clear transparency</li>
      </ul>
      <div className="grid grid-cols-3 gap-5">
                            <div className=" h-20 rounded-lg overflow-hidden relative">
                                <Image src = "https://i.pinimg.com/1200x/47/98/6d/47986d244ec0ccaa02c55c40e99b1ba7.jpg" alt = "Filler" fill className = "object-cover"/>
                            </div>
                            <div className=" h-20 rounded-lg overflow-hidden relative">
                                <Image src = "https://i.pinimg.com/1200x/0b/e7/c1/0be7c1a6153073190bc00019c7d9d071.jpg" alt = "Filler" fill className = "object-cover"/>
                            </div>
                            <div className=" h-20 rounded-lg overflow-hidden relative">
                                <Image src = "https://i.pinimg.com/736x/ed/b9/31/edb9316b157c5a3b00e26db313742207.jpg" alt = "Filler" fill className = "object-cover"/>
                            </div>
                            </div>
                        </Card>


                    </div>
                    </div>
                    </div>
                    </section>
    )
}