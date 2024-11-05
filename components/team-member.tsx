import { basePath } from '@/next.config.mjs'
import ExportedImage from 'next-image-export-optimizer'
import { StaticImageData } from 'next/image'

interface Props {
  name: string
  title: string
  imageSrc: StaticImageData
}

export default function TeamMember({ name, title, imageSrc }: Props) {
  return (
    <div className="flex flex-col justify-start items-center gap-4">
      {/* Apply grayscale directly as inline style */}
      <div
        className="rounded-full overflow-hidden relative w-40 h-40 border-white border-1"
        style={{ filter: 'grayscale(100%)', transition: 'filter 0.3s ease' }}
        onMouseEnter={(e) => e.currentTarget.style.filter = 'grayscale(0%)'}
        onMouseLeave={(e) => e.currentTarget.style.filter = 'grayscale(100%)'}
      >
        <ExportedImage 
          src={imageSrc} 
          alt={name} 
          fill 
          basePath={basePath} 
        />
      </div>
      <div className="flex flex-col justify-center items-center text-center">
        <p className="text-slate-50 text-2xl">{name}</p>
        <p className="text-slate-50 text-base w-9/12">{title}</p>
      </div>
    </div>
  )
}
