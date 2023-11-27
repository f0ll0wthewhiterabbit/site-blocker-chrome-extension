import { authControllerGetSessionInfo } from '@/shared/api/generated';
import { useQuery, useQueryClient } from '@tanstack/react-query';

const SESSION_KEY = ['session'];

export function useSessionQuery() {
  return useQuery({
    queryKey: SESSION_KEY,
    queryFn: authControllerGetSessionInfo,
    retry: false,
    staleTime: 5 * 60 * 1000,
  });
}

export function useResetSession() {
  const queryClient = useQueryClient();

  return () => queryClient.removeQueries({ queryKey: SESSION_KEY, exact: true });
}
