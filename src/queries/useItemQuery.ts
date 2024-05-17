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

export async function prefetchGetSubCategory(subCategoryNo: number) {
  const queryClient = await defaultPrefetchQuery(
   key.subCategory(subCategoryNo),
   () => api.getItemSubCategory(subCategoryNo),
 );

 return queryClient;
}

export function useGetSubCategory<T>(subCategoryNo: number) {
  return useDefaultQuery<T>(
    key.subCategory(subCategoryNo),
    () => api.getItemSubCategory(subCategoryNo),
  );
}

export function useGetItemWeapons<T>() {
  return useDefaultQuery<T>(
    key.itemWeapons,
    api.getItemWeapons,
  );
}