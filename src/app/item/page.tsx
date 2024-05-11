import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

import { prefetchGetMainCategory } from '@/queries';
import ItemContainer from '@/containers/Item';

export default async function Item() {
  const queryClient = await prefetchGetMainCategory();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ItemContainer />
    </HydrationBoundary>
  );
}