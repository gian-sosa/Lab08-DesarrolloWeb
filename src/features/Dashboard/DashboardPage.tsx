import { Card } from '../../components/Card'
import { Badge, type BadgeVariant } from '../../components/Badge'
import { MetricsGrid } from './components/MetricsGrid'

const ORDERS: { id: string; client: string; status: string; variant: BadgeVariant }[] = [
  { id: '#1042', client: 'María Quispe', status: 'Entregado', variant: 'success' },
  { id: '#1043', client: 'Luis Huamán', status: 'Pendiente', variant: 'warning' },
  { id: '#1044', client: 'Ana Gutiérrez', status: 'Cancelado', variant: 'danger' },
]

export function DashboardPage() {
  return (
    <div className="space-y-6">
      <MetricsGrid />

      <Card title="Vista previa del componente Badge">
        <div className="flex flex-wrap gap-3">
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="danger">Danger</Badge>
        </div>
      </Card>

      <Card title="Pedidos recientes">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="text-neutral-500 dark:text-neutral-400">
              <tr>
                <th scope="col" className="py-2 pr-4 font-semibold">Pedido</th>
                <th scope="col" className="py-2 pr-4 font-semibold">Cliente</th>
                <th scope="col" className="py-2 font-semibold">Estado</th>
              </tr>
            </thead>
            <tbody>
              {ORDERS.map((o) => (
                <tr key={o.id} className="border-t border-neutral-200/60 dark:border-neutral-800/60">
                  <td className="py-3 pr-4">{o.id}</td>
                  <td className="py-3 pr-4">{o.client}</td>
                  <td className="py-3">
                    <Badge variant={o.variant}>{o.status}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}