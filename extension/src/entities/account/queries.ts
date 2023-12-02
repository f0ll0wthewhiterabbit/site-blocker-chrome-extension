import { accountControllerGetAccount, accountControllerPatchAccount } from '@/shared/api/generated';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const ACCOUNT_KEY = ['account'];

export function useAccountQuery() {
  return useQuery({
    queryKey: ACCOUNT_KEY,
    queryFn: accountControllerGetAccount,
  });
}

export function useUpdateAccountMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: accountControllerPatchAccount,
    onSuccess(data) {
      queryClient.setQueryData(ACCOUNT_KEY, data);
    },
    async onSettled() {
      await queryClient.invalidateQueries({ queryKey: ACCOUNT_KEY, exact: true });
    },
  });
}
