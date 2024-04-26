import { Suspense } from 'react';
import CheckListDetailContainer from '@/containers/CheckList/CheckListDetail';

export default function CheckListDetail() {
  return (
    <Suspense>
      <CheckListDetailContainer />
    </Suspense>
  );
}