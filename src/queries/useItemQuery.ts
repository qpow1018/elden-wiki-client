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

export function useGetMainCategory<T>(initValue: T) {
  const resData = useDefaultQuery<T>(
    key.mainCategories,
    api.getItemMainCategories,
  )

  return {
    ...resData,
    data: resData.data !== undefined ? resData.data : initValue
  };
}