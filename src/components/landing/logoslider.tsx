import { InfiniteSlider } from "../ui/infinite-slider"
import { ProgressiveBlur } from "../ui/progressive-blur"

export default function LogoCloud() {
    return (
        <div className="relative overflow-hidden w-full md:max-w-6xl mx-auto">
        <section className="bg-background overflow-hidden py-8 md:py-0 ">
            <div className="group relative mx-auto md:max-w-6xl w-full px-4 md:px-6">
                <div className="flex flex-col items-center md:flex-row md:gap-0">
                    {/* Text Section */}
                    <div className="w-full md:max-w-44 md:border-r md:pr-6 text-center md:text-end">
                        <p className="text-sm -mb-2 md:mb-0 text-gray-600">Experience that comes from inside</p>
                    </div>
                    
                    {/* Logo Slider Section */}
                    <div className="relative w-full rounded-full h-40 md:rounded-none overflow-hidden max-w-full  md:w-[calc(100%-11rem)]">
                        <div className="absolute w-full left-0 right-0 top-0 bottom-0">
                        <InfiniteSlider
                            speedOnHover={20}
                            speed={40}
                            gap={80}
                            className="">
                            <div className="flex items-center justify-center">
                                <img
                                    className="h-4 md:h-4 w-auto dark:invert"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpDXeB5v1FOq31fdhGiN6LonRlaD7_KEsgbw&s"
                                    alt="Loreal"
                                />
                            </div>

                            <div className="flex items-center justify-center">
                                <img
                                    className="h-4 md:h-5 w-auto dark:invert"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjZZ6TH8uPqIkQQ0YbwqzNLRVxd1LGjei0Lg&s"
                                    alt="Andressen Horowitz"
                                />
                            </div>
                            
                            <div className="flex items-center justify-center">
                                <img
                                    className="h-40 w-auto dark:invert"
                                    src="https://www.founderscircle.com/wp-content/uploads/2025/01/MaintainX-Black-logo.png"
                                    alt="MaintainX"
                                />
                            </div>
                            
                            <div className="flex items-center justify-center">
                                <img
                                    className="h-20 w-auto dark:invert"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqrKAOEYv6LqNSk-Y0RKKRcbUKoKJEz57MwA&s"
                                    alt="Vichy"
                                />
                            </div>
                            
                            <div className="flex items-center justify-center">
                                <img
                                    className="h-30 w-auto dark:invert"
                                    src="https://tock-public.imgix.net/join/integrations/Commerce7.png"
                                    alt="Commerce7"
                                />
                            </div>
                        </InfiniteSlider>

                        {/* Gradient Overlays */}
                        <ProgressiveBlur
                            className="pointer-events-none absolute left-0 top-0 h-full w-12 md:w-20"
                            direction="left"
                            blurIntensity={1}
                        />
                        <ProgressiveBlur
                            className="pointer-events-none absolute right-0 top-0 h-full w-12 md:w-20"
                            direction="right"
                            blurIntensity={1}
                        />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}