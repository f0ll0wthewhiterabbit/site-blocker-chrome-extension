import {
  blockListControllerAddBlockItem,
  blockListControllerGetList,
  blockListControllerRemoveBlockItem,
} from '@/shared/api/generated';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const BLOCK_LIST_KEY = ['block-list'];

export function useBlockListQuery({ q }: { q?: string }) {
  return useQuery({
    queryKey: [...BLOCK_LIST_KEY, { q }],
    queryFn: () => blockListControllerGetList({ q }),
    placeholderData: (previousData) => previousData,
  });
}

export function useAddBlockItemMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: blockListControllerAddBlockItem,
    async onSettled() {
      await queryClient.invalidateQueries({ queryKey: BLOCK_LIST_KEY, exact: false });
    },
  });
}

export function useRemoveBlockItemMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: blockListControllerRemoveBlockItem,
    async onSettled() {
      await queryClient.invalidateQueries({ queryKey: BLOCK_LIST_KEY, exact: false });
    },
  });
}
