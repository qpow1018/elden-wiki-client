import api from '@/api';

import key from './key';
import useDefaultQuery from './useDefaultQuery';

export function useGetMainCategory<T>() {
  return useDefaultQuery<T>(
    key.mainCategories,
    api.getItemMainCategories
  );
}