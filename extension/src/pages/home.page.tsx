import { useSessionQuery } from '@/entities/session';

export function HomePage() {
  const { data: session } = useSessionQuery();

  return <div className="text-rose-500">Home Page {session?.email}</div>;
}
