interface SectionHeaderProps {
  label?: string
  title: string
  subtitle?: string
  center?: boolean
  light?: boolean
  className?: string
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  center = false,
  light = false,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`${center ? 'text-center' : ''} ${className}`}>
      {label && (
        <p className={`text-[10px] tracking-[0.35em] uppercase font-medium mb-4 ${
          light ? 'text-white/40' : 'text-muted'
        }`}>
          {label}
        </p>
      )}
      <div className={`divider ${center ? 'mx-auto' : ''} ${light ? 'bg-white/30' : ''}`} />
      <h2
        className={`font-serif text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4 ${
          light ? 'text-white' : 'text-navy'
        }`}
        style={{ fontFamily: 'var(--font-cormorant, Georgia, serif)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg leading-relaxed max-w-2xl ${
          center ? 'mx-auto' : ''
        } ${light ? 'text-white/70' : 'text-muted'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
