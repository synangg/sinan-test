import { ButtonHTMLAttributes, AnchorHTMLAttributes, forwardRef } from 'react'
import Link from 'next/link'

type ButtonVariant = 'primary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface BaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  className?: string
  children: React.ReactNode
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button'; href?: never }

type ButtonAsLink = BaseProps & { as: 'link'; href: string } & Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    'href'
  >

type ButtonProps = ButtonAsButton | ButtonAsLink

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-gold text-obsidian hover:bg-gold-light active:scale-95 font-semibold',
  outline:
    'border border-cream/30 text-cream hover:border-cream hover:bg-cream/5 active:scale-95',
  ghost:
    'text-cream/60 hover:text-cream underline-offset-4 hover:underline',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-5 py-2.5 text-xs tracking-[0.2em]',
  md: 'px-8 py-4 text-xs tracking-[0.25em]',
  lg: 'px-10 py-5 text-sm tracking-[0.25em]',
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', fullWidth, className = '', children, ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center gap-2 uppercase font-sans transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian disabled:opacity-40 disabled:cursor-not-allowed'
    const classes = [
      base,
      variantStyles[variant],
      sizeStyles[size],
      fullWidth ? 'w-full' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ')

    if (props.as === 'link') {
      const { as: _as, href, ...rest } = props as ButtonAsLink
      return (
        <Link href={href} className={classes} {...(rest as object)}>
          {children}
        </Link>
      )
    }

    const { as: _as, ...rest } = props as ButtonAsButton
    return (
      <button
        ref={ref as React.ForwardedRef<HTMLButtonElement>}
        className={classes}
        {...rest}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
