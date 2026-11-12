import { useEffect, useState, type ReactNode } from 'react'
import { Sidebar } from '../features/Dashboard/components/Sidebar'

export function AdminLayout({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  // Lee el estado inicial de forma síncrona para evitar parpadeo (flickering)
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <div className="flex min-h-screen bg-bg-dashboard text-text-dashboard transition-colors duration-200">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-16 items-center justify-between border-b border-neutral-200 bg-card px-4 dark:border-neutral-800 md:px-8">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="rounded p-2 focus-visible:outline-2 focus-visible:outline-neutral-400 md:hidden"
            aria-label={isSidebarOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          >
            ☰
          </button>

          <h1 className="text-lg font-bold">Panel administrativo</h1>

          <button
            onClick={() => setIsDark(!isDark)}
            aria-pressed={isDark}
            className="rounded-xl bg-neutral-100 px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-neutral-200 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none dark:bg-neutral-800 dark:hover:bg-neutral-700"
          >
            {isDark ? 'Modo claro' : 'Modo oscuro'}
          </button>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-8">{children}</main>
      </div>
    </div>
  )
}