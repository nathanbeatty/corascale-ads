import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

export default function LogoCloud() {
    return (
        <section className=" overflow-hidden py-16">
            <div className="group relative m-auto w-200 px-6">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="md:max-w-44 md:border-r md:pr-6">
                        <p className="text-end text-sm">Experience in Sales and Marketing at</p>
                    </div>
                    <div className="relative py-6 md:w-[calc(100%-11rem)]">
                        <InfiniteSlider
                            speedOnHover={20}
                            speed={40}
                            gap={112}>
                            <div className="flex">
                                <img
                                    className="mx-auto h-10 rounded-xl w-fit dark:invert"
                                    src="https://i.pinimg.com/1200x/e3/f6/63/e3f663fd0c718aa62bd6c50e994a3f48.jpg"
                                    alt="Nvidia Logo"
                                    height="40"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-10 rounded-xl w-fit dark:invert"
                                    src="https://i.pinimg.com/736x/26/e8/b8/26e8b84538a5823d878d8dfc49e4cb54.jpg"
                                    alt="Nvidia Logo"
                                    height="40"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-10 rounded-xl w-fit dark:invert"
                                    src="https://i.pinimg.com/1200x/a4/47/6f/a4476f8bfcddba69c1e9c0b349527ddf.jpg"
                                    alt="Nvidia Logo"
                                    height="40"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-10 rounded-xl w-fit dark:invert"
                                    src="https://i.pinimg.com/736x/3b/28/40/3b28409563e4b802ffc0c6fe5bf806bb.jpg"
                                    alt="Nvidia Logo"
                                    height="40"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-10 rounded-xl w-fit dark:invert"
                                    src="https://i.pinimg.com/1200x/a4/10/19/a41019dd00049ef91dc0be6b04e2a9f5.jpg"
                                    alt="Nvidia Logo"
                                    height="40"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-10 rounded-xl w-fit dark:invert"
                                    src="https://i.pinimg.com/736x/77/52/5a/77525ae05d70c3f17e4e677161f1ea5f.jpg"
                                    alt="Nvidia Logo"
                                    height="40"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-10 rounded-xl w-fit dark:invert"
                                    src="https://i.pinimg.com/736x/28/f8/06/28f806c76def49d1c15179869c77cc3b.jpg"
                                    alt="Nvidia Logo"
                                    height="40"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-10 rounded-xl w-fit dark:invert"
                                    src="https://i.pinimg.com/1200x/99/2a/d5/992ad5590d52442b8bb617af98b47f8a.jpg"
                                    alt="Nvidia Logo"
                                    height="40"
                                    width="auto"
                                />
                            </div>

                            
                            
                           
                            
                            
                            

                           
                        </InfiniteSlider>

                        <div className="h-50 absolute inset-y-0 left-0 w-50"></div>
                        <div className="h-50 absolute inset-y-0 left-0 w-50"></div>
                        <ProgressiveBlur
                            className="pointer-events-none absolute left-0 top-0 h-full w-20"
                            direction="left"
                            blurIntensity={1}
                        />
                        <ProgressiveBlur
                            className="pointer-events-none absolute right-0 top-0 h-full w-20"
                            direction="right"
                            blurIntensity={1}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
