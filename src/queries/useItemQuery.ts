import api from '@/api';

import key from './key';
import { useDefaultQuery, defaultPrefetchQuery } from './defaultQuery';

export async function prefetchGetMainCategories() {
   const queryClient = await defaultPrefetchQuery(
    key.mainCategories,
    api.getItemMainCategories,
  );

  return queryClient;
}

export function useGetMainCategories<T>() {
  return useDefaultQuery<T>(
    key.mainCategories,
    api.getItemMainCategories,
  );
}

export function useGetItemWeapons<T>() {
  return useDefaultQuery<T>(
    key.itemWeapons,
    api.getItemWeapons,
  );
}