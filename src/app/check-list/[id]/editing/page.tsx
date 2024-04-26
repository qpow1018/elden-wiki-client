import CheckListEditingContainer from '@/containers/CheckList/Editing';

export default function CheckListEditing({ params }: { params: { id: string } }) {
  return (
    <CheckListEditingContainer
      checkListId={params.id}
    />
  );
}