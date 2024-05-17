import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

import { prefetchGetSubCategory } from '@/queries';
import SubCategoryEditContainer from '@/containers/Item/SubCategoryEdit';

export default async function SubCategoryEdit({ params }: { params: { subCategoryNo: string } }) {
  const subCategoryNo = Number(params.subCategoryNo);
  const queryClient = await prefetchGetSubCategory(subCategoryNo);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SubCategoryEditContainer
        subCategoryNo={subCategoryNo}
      />
    </HydrationBoundary>
  );
}