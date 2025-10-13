import { Target } from "lucide-react"
import { Card } from "../ui/card"
import Image from "next/image"

export default function How(){

    return(
         <section>
            <div className="py-12">
                <div className="mx-auto w-full max-w-5xl">
                    <div>
                        <h2 className="text-foreground max-w-2xl text-center text-balance text-3xl font-semibold">Pricing</h2>
                    </div>
                    </div>

                    <div className="">
<Card
                            className=" p-6">
                                <div className="flex gap-2 items-center">
                            <Target className="text-primary size-5" />
                            <span className="font-mono">001</span>
                            </div>
                            <h3 className="text-foreground text-xl font-semibold">Research & Targeting</h3>
                            <p className="text-muted-foreground text-balance">We define your ICP, build targeted lead lists using verified data sources, and write tailored outreach that speaks directly to your prospects’ pain points.</p>

                            <div className=" h-20 w-full rounded-2xl overflow-hidden relative">
                                <Image src = "https://i.pinimg.com/1200x/e8/ce/6d/e8ce6d1ab98209301256afc7758d74f2.jpg" alt = "Filler" fill className = "object-cover"/>
                            </div>
                        </Card>


                    </div>
                    </div>
                    </section>
    )
}