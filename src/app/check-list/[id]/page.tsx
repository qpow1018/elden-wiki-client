import CheckListDetailContainer from '@/containers/CheckList/CheckListDetail';

export default function CheckListDetail({ params }: { params: { id: string } }) {
  return (
    <CheckListDetailContainer
      checkListId={params.id}
    />
  );
}