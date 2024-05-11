import { useQuery, QueryKey, QueryFunction, QueryClient } from '@tanstack/react-query';

import { AppError } from '@/types/api';

export function useDefaultQuery<T>(key: QueryKey, fetchFn: QueryFunction, staleTime?: number): {
  data: T;
  isLoading: boolean;
  isError: boolean;
  error: AppError | null;
} {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: key,
    queryFn: fetchFn,
    staleTime: staleTime !== undefined ? staleTime : 1000 * 60,
  });

  return {
    data: data as T,
    isLoading,
    isError,
    error: error as AppError | null,
  };
}

export async function defaultPrefetchQuery(key: QueryKey, fetchFn: QueryFunction, staleTime?: number): Promise<QueryClient> {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: key,
    queryFn: fetchFn,
    staleTime: staleTime !== undefined ? staleTime : 1000 * 60,
  });

  return queryClient;
}