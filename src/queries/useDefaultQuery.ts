import { useQuery, QueryKey, QueryFunction } from '@tanstack/react-query';

export default function useDefaultQuery(key: QueryKey, fetchFn: QueryFunction, staleTime?: number) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: key,
    queryFn: fetchFn,
    staleTime: staleTime
  });

  return { data, isLoading, isError, error };
}