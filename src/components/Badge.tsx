import type { HTMLAttributes } from 'react'

export type BadgeVariant = 'success' | 'warning' | 'danger'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
}

// Clases COMPLETAS (sin interpolación) para que el compilador JIT las detecte
const variants: Record<BadgeVariant, { badge: string; dot: string }> = {
  success: {
    badge:
      'bg-emerald-50 text-emerald-700 ring-emerald-600/20 dark:bg-emerald-500/10 dark:text-emerald-400 dark:ring-emerald-400/20',
    dot: 'bg-emerald-500',
  },
  warning: {
    badge:
      'bg-amber-50 text-amber-700 ring-amber-600/20 dark:bg-amber-500/10 dark:text-amber-400 dark:ring-amber-400/20',
    dot: 'bg-amber-500',
  },
  danger: {
    badge:
      'bg-rose-50 text-rose-700 ring-rose-600/20 dark:bg-rose-500/10 dark:text-rose-400 dark:ring-rose-400/20',
    dot: 'bg-rose-500',
  },
}

export function Badge({
  variant = 'success',
  className = '',
  children,
  ...props
}: BadgeProps) {
  const styles = variants[variant]

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset transition-colors duration-200 ${styles.badge} ${className}`}
      {...props}
    >
      <span aria-hidden="true" className={`size-1.5 rounded-full ${styles.dot}`} />
      {children}
    </span>
  )
}

