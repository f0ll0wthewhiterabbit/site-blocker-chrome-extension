import { useSessionQuery } from '@/entities/session';

export function HomePage() {
  const { data: session } = useSessionQuery();

  return <div>Home Page {session?.email}</div>;
}
