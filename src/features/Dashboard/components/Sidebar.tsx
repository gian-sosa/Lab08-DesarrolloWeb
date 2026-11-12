interface SidebarProps {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

const LINKS = ['Resumen', 'Pedidos', 'Clientes', 'Reportes']

export function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <nav
        aria-label="Navegación principal"
        className={`fixed inset-y-0 left-0 z-40 w-64 border-r border-neutral-200 bg-card p-4 transition-transform duration-200 motion-reduce:transition-none dark:border-neutral-800 md:sticky md:top-0 md:h-screen md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <p className="mb-6 px-3 text-lg font-bold">AdminDashboard</p>
        <ul className="space-y-1">
          {LINKS.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="block rounded-xl px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none dark:hover:bg-neutral-800"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

