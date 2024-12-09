// step-image.tsx
'use client';

import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface Props {
  imageSrc: StaticImageData | string; // Allow both StaticImageData and string
  active: boolean;
}

export default function StepImage({ imageSrc, active }: Props) {
  if (!active) {
    return null;
  }

  return (
    <div className="flex justify-center items-center w-[250px] h-[500px]"> {/* Adjusted container size */}
      <Image
        src={imageSrc}
        alt="Step Image"
        className="object-contain w-full h-full"
      />
    </div>
  );
}
