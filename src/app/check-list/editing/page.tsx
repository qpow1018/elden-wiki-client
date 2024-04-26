import { Suspense } from 'react';
import CheckListEditingContainer from '@/containers/CheckList/Editing';

export default function CheckListEditing() {
  return (
    <Suspense>
      <CheckListEditingContainer />
    </Suspense>
  );
}