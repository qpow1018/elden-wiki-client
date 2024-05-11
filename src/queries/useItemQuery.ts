import { QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query';

import api from '@/api';

import key from './key';
import { useDefaultQuery, defaultPrefetchQuery } from './defaultQuery';

export async function prefetchGetMainCategory() {
   const queryClient = await defaultPrefetchQuery(
    key.mainCategories,
    api.getItemMainCategories,
  );

  return queryClient;
}

export function useGetMainCategory<T>() {
  return useDefaultQuery<T>(
    key.mainCategories,
    api.getItemMainCategories,
  );
}