import Image from "next/image";

import image1 from "@/assets/home/photo-1.jpg";
import image2 from "@/assets/home/photo-2.jpg";
import image3 from "@/assets/home/photo-3.jpg";
import image4 from "@/assets/home/photo-4.jpg";
import image5 from "@/assets/home/photo-5.jpg";
import { cn } from "@/lib/utils";

const images = [
  {
    src: image1,
    alt: "My dogs, Alvin and Aurora",
  },
  {
    src: image2,
    alt: "A bit of bouldering",
  },
  {
    src: image3,
    alt: "My professional setup",
  },
  {
    src: image4,
    alt: "My girlfriend and I",
  },
  {
    src: image5,
    alt: "My dear boardgames",
  },
];

export const Photos = () => {
  const rotations = [
    "rotate-2",
    "-rotate-2",
    "rotate-2",
    "rotate-2",
    "-rotate-2",
  ];

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {images.map((image, imageIndex) => (
          <div
            key={image.alt}
            className={cn(
              "relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800",
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
