import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowUp, CalendarCheck, ChartArea, Globe, Play, Plus, Rocket, Signature, Sparkles, Target } from 'lucide-react'
import Image from 'next/image'

const MESCHAC_AVATAR = 'https://avatars.githubusercontent.com/u/47919550?v=4'
const BERNARD_AVATAR = 'https://avatars.githubusercontent.com/u/31113941?v=4'
const THEO_AVATAR = 'https://avatars.githubusercontent.com/u/68236786?v=4'
const GLODIE_AVATAR = 'https://avatars.githubusercontent.com/u/99137927?v=4'

export default function FeaturesSix() {
    return (
        <section>
            <div className="py-12">
                <div className="mx-auto w-full max-w-5xl">
                    <div>
                        <h2 className="text-foreground  text-center text-balance text-3xl font-semibold">How It Works</h2>
                    </div>
                    <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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

                        <Card
                            
                            className=" p-6">
                            <div className="flex gap-2 items-center">
                            <Rocket className="text-primary size-5" />
                            <span className="font-mono">002</span>
                            </div>
                            <h3 className="text-foreground  text-xl font-semibold">Launch & Outreach</h3>
                            <p className="text-muted-foreground  text-balance">We warm up domains, build personalized systems, execute multi-step sequences, and continuously test copy, timing, and deliverability to maximize replies and conversions.</p>

                            <div className=" h-20 w-full rounded-2xl overflow-hidden relative">
                                <Image src = "https://i.pinimg.com/736x/86/f4/91/86f491673493fce330d5e7532876246d.jpg" alt = "Filler" fill className = "object-cover"/>
                            </div>
                        </Card>
                        <Card
                            
                            className="group  p-6">
                            <div className="flex gap-2 items-center">
                            <ChartArea className="text-primary size-5" />
                            <span className="font-mono">003</span>
                            </div>
                            <h3 className="text-foreground  text-xl font-semibold">Booking & Reporting</h3>
                            <p className="text-muted-foreground  text-balance">We qualify responses, book meetings directly to your calendar, and provide clear weekly reporting so you always know what’s working.</p>

                            <div className=" h-20 w-full rounded-2xl overflow-hidden relative">
                                <Image src = "https://i.pinimg.com/1200x/a7/c6/c5/a7c6c5c13af009371009f5f116521a34.jpg" alt = "Filler" fill className = "object-cover"/>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

const MeetingIllustration = () => {
    return (
        <Card
            aria-hidden
            className="mt-9 aspect-video p-4">
            <div className="relative hidden h-fit">
                <div className="absolute -left-1.5 bottom-1.5 rounded-md border-t border-red-700 bg-red-500 px-1 py-px text-[10px] font-medium text-white shadow-md shadow-red-500/35">PDF</div>
                <div className="h-10 w-8 rounded-md border bg-gradient-to-b from-zinc-100 to-zinc-200"></div>
            </div>
            <div className="mb-0.5 text-sm font-semibold">AI Strategy Meeting</div>
            <div className="mb-4 flex gap-2 text-sm">
                <span className="text-muted-foreground">2:30 - 3:45 PM</span>
            </div>
            <div className="mb-2 flex -space-x-1.5">
                <div className="flex -space-x-1.5">
                    {[
                        { src: MESCHAC_AVATAR, alt: 'Méschac Irung' },
                        { src: BERNARD_AVATAR, alt: 'Bernard Ngandu' },
                        { src: THEO_AVATAR, alt: 'Théo Balick' },
                        { src: GLODIE_AVATAR, alt: 'Glodie Lukose' },
                    ].map((avatar, index) => (
                        <div
                            key={index}
                            className="bg-background size-7 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                            <img
                                className="aspect-square rounded-full object-cover"
                                src={avatar.src}
                                alt={avatar.alt}
                                height="460"
                                width="460"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="text-muted-foreground text-sm font-medium">ML Pipeline Discussion</div>
        </Card>
    )
}

const CodeReviewIllustration = () => {
    return (
        <div
            aria-hidden
            className="relative mt-6">
            <Card className="aspect-video w-4/5 translate-y-4 p-3 transition-transform duration-200 ease-in-out group-hover:-rotate-3">
                <div className="mb-3 flex items-center gap-2">
                    <div className="bg-background size-6 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                        <img
                            className="aspect-square rounded-full object-cover"
                            src={MESCHAC_AVATAR}
                            alt="M Irung"
                            height="460"
                            width="460"
                        />
                    </div>
                    <span className="text-muted-foreground text-sm font-medium">Méschac Irung</span>

                    <span className="text-muted-foreground/75 text-xs">2m</span>
                </div>

                <div className="ml-8 space-y-2">
                    <div className="bg-foreground/10 h-2 rounded-full"></div>
                    <div className="bg-foreground/10 h-2 w-3/5 rounded-full"></div>
                    <div className="bg-foreground/10 h-2 w-1/2 rounded-full"></div>
                </div>

                <Signature className="ml-8 mt-3 size-5" />
            </Card>
            <Card className="aspect-3/5 absolute -top-4 right-0 flex w-2/5 translate-y-4 p-2 transition-transform duration-200 ease-in-out group-hover:rotate-3">
                <div className="bg-foreground/5 m-auto flex size-10 rounded-full">
                    <Play className="fill-foreground/50 stroke-foreground/50 m-auto size-4" />
                </div>
            </Card>
        </div>
    )
}

const AIAssistantIllustration = () => {
    return (
        <Card
            aria-hidden
            className="mt-6 aspect-video translate-y-4 p-4 pb-6 transition-transform duration-200 group-hover:translate-y-0">
            <div className="w-fit">
                <Sparkles className="size-3.5 fill-purple-300 stroke-purple-300" />
                <p className="mt-2 line-clamp-2 text-sm">How can I optimize my neural network to reduce inference time while maintaining accuracy?</p>
            </div>
            <div className="bg-foreground/5 -mx-3 -mb-3 mt-3 space-y-3 rounded-lg p-3">
                <div className="text-muted-foreground text-sm">Ask AI Assistant</div>

                <div className="flex justify-between">
                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            size="icon"
                            className="size-7 rounded-2xl bg-transparent shadow-none">
                            <Plus />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="size-7 rounded-2xl bg-transparent shadow-none">
                            <Globe />
                        </Button>
                    </div>

                    <Button
                        size="icon"
                        className="size-7 rounded-2xl bg-black">
                        <ArrowUp strokeWidth={3} />
                    </Button>
                </div>
            </div>
        </Card>
    )
}
