interface SectionTitleProps {
  label?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  titleSize?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  light?: boolean
}

const titleSizes = {
  sm: 'text-2xl md:text-3xl',
  md: 'text-3xl md:text-4xl',
  lg: 'text-4xl md:text-5xl',
  xl: 'text-5xl md:text-6xl',
}

const alignments = {
  left: 'items-start text-left',
  center: 'items-center text-center',
  right: 'items-end text-right',
}

export function SectionTitle({
  label,
  title,
  subtitle,
  align = 'center',
  titleSize = 'md',
  className = '',
  light = false,
}: SectionTitleProps) {
  return (
    <div className={`flex flex-col gap-4 ${alignments[align]} ${className}`}>
      {label && (
        <span className="font-sans text-xs tracking-[0.25em] uppercase text-gold font-medium">
          {label}
        </span>
      )}
      <h2
        className={`font-serif leading-tight text-balance ${titleSizes[titleSize]} ${
          light ? 'text-obsidian' : 'text-cream'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`font-sans text-sm md:text-base leading-relaxed max-w-xl ${
            light ? 'text-obsidian/60' : 'text-cream/50'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
