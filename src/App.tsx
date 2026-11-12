import { AdminLayout } from './layouts/AdminLayout'
import { DashboardPage } from './features/Dashboard/DashboardPage'

export default function App() {
  return (
    <AdminLayout>
      <DashboardPage />
    </AdminLayout>
  )
}