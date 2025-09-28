

import Image from "next/image"

type CircleOverlappingProps = {
  images: string[]
}

export default function CircleOverlapping({ images }: CircleOverlappingProps) {
  return (
    <div className="flex -space-x-3">
      {images.map((src, i) => (
        <div key={i} className="relative w-10 h-10 md:w-12 md:h-12 rounded-full shadow overflow-hidden border border-white">
          <Image
            src={src}
            alt={`Portrait ${i + 1}`}
            fill
            sizes="48px"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  )
}