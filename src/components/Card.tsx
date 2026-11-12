import type { ReactNode } from 'react'

interface CardProps {
  title?: string
  children: ReactNode
}

export function Card({ title, children }: CardProps) {
  return (
    <section className="@container rounded-xl border border-neutral-200/50 bg-card p-6 shadow-xs transition-colors duration-200 dark:border-neutral-800/50">
      {title && (
        <h2 className="mb-4 text-sm font-semibold text-neutral-500 dark:text-neutral-400">
          {title}
        </h2>
      )}
      <div className="w-full @md:p-2">{children}</div>
    </section>
  )
}

