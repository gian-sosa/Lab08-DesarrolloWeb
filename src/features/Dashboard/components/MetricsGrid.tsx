import { Card } from '../../../components/Card'
import { Badge, type BadgeVariant } from '../../../components/Badge'

interface Metric {
  title: string
  value: string
  variant: BadgeVariant
  status: string
}

const METRICS: Metric[] = [
  { title: 'Ingresos del mes', value: '$ 110k', variant: 'success', status: 'En meta' },
  { title: 'Pedidos pendientes', value: '24', variant: 'warning', status: 'Atención' },
  { title: 'Incidencias críticas', value: '3', variant: 'danger', status: 'Urgente' },
]

export function MetricsGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {METRICS.map((m) => (
        <Card key={m.title} title={m.title}>
          <div className="flex items-center justify-between gap-2">
            <p className="text-3xl font-bold">{m.value}</p>
            <Badge variant={m.variant}>{m.status}</Badge>
          </div>
        </Card>
      ))}
    </div>
  )
}