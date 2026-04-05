'use client'

import Image from 'next/image'
import { useState } from 'react'

interface PlaceholderImageProps {
  src: string
  alt: string
  fill?: boolean
  width?: number
  height?: number
  className?: string
  priority?: boolean
  gradientFrom?: string
  gradientTo?: string
}

export function PlaceholderImage({
  src,
  alt,
  fill = false,
  width,
  height,
  className = '',
  priority = false,
  gradientFrom = 'from-stone-900',
  gradientTo = 'to-amber-950/40',
}: PlaceholderImageProps) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div
        className={`bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-end justify-center ${className}`}
        aria-label={alt}
      >
        {/* Leather texture overlay */}
        <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,rgba(255,255,255,0.03)_2px,rgba(255,255,255,0.03)_4px)]" />
      </div>
    )
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={`object-cover ${className}`}
        priority={priority}
        onError={() => setHasError(true)}
      />
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 800}
      height={height ?? 600}
      className={`object-cover ${className}`}
      priority={priority}
      onError={() => setHasError(true)}
    />
  )
}
