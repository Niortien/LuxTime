import WatchDashboard from '@/components/dashbord/WatchDashboard';
import { getAllWatch } from '@/services/watch/watch.action';
import { Watch } from '@/types/watch';

export default async function   DashboardPage() {
  const result = await getAllWatch()

  return <WatchDashboard watches={result} />;
}