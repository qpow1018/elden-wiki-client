import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

import { prefetchGetMainCategories } from '@/queries';
import ItemContainer from '@/containers/Item';

export default async function Item() {
  const queryClient = await prefetchGetMainCategories();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ItemContainer />
    </HydrationBoundary>
  );
}