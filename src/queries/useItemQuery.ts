import api from '@/api';
import { EnumMainCategory } from '@/define';


import key from './key';
import { useDefaultQuery, defaultPrefetchQuery } from './defaultQuery';

export async function prefetchGetMainCategories() {
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

export function useGetItemWeapons<T>() {
  return useDefaultQuery<T>(
    key.itemWeapons,
    api.getItemWeapons,
  );
}