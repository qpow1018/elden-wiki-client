import { useQuery, QueryKey, QueryFunction } from '@tanstack/react-query';

import { AppError } from '@/types/api';

export default function useDefaultQuery<T>(key: QueryKey, fetchFn: QueryFunction, staleTime?: number): {
  data: T;
  isLoading: boolean;
  isError: boolean;
  error: AppError | null;
} {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: key,
    queryFn: fetchFn,
    staleTime: staleTime,
  });

  return {
    data: data as T,
    isLoading,
    isError,
    error: error as AppError | null,
  };
}