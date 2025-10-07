'use client'

import Image from "next/image"
import greece from "@/images/greece.jpeg"

export default function FounderCardThree() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto rounded-3xl bg-white/10 backdrop-blur-xl dark:bg-neutral-900/40 shadow-sm">
        <div className="flex flex-col md:flex-row items-center md:items-stretch">
          
          {/* Quote Section */}
          <div className="flex-1 p-8 md:p-12 text-left">
            <p className="text-xl md:text-2xl leading-relaxed tracking-tight font-light mb-8">
              “I personally <span className="font-medium">manage your account</span> and
              <span className="font-semibold"> guarantee results</span> — or you
              <span className="font-semibold"> don’t pay</span>. Your success is my reputation, and I stand behind every campaign I run.”
            </p>

            {/* Name & Title */}
            <div className="flex items-center gap-4 mt-8">
              <div className="w-14 h-14 relative rounded-full overflow-hidden">
                <Image
                  src={greece}
                  alt="Nathan Beatty"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-tight">Nathan Beatty</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-light">
                  Founder, Corascale
                </p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative w-full md:w-1/2 aspect-square">
            <Image
              src={greece}
              alt="Founder"
              fill
              className="object-cover rounded-br-3xl rounded-bl-none md:rounded-bl-3xl md:rounded-tr-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
