import { QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query';
import ItemContainer from '@/containers/Item';

export default async function Item() {
  const queryClient = new QueryClient();

  // TODO 시간 설정 확인
  await queryClient.prefetchQuery({
    queryKey: ['testFn'],
    queryFn: getTestFn,
    // staleTime: 1000,
    // gcTime: 1000 * 60 * 10,
  });


  async function getTestFn() {
    try {
      const response = await fetch('http://localhost:27017/api/item/item-categories');
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      // return await response.json();
      return 'page에서 preFetch 한 데이터';

    } catch (error) {
      console.log('에러 체크', error);
    }
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ItemContainer />
    </HydrationBoundary>
  );
}