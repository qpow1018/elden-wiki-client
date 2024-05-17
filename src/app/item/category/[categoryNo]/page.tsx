import ItemByCategoryContainer from '@/containers/Item/Category';

export default function ItemByCategory({ params }: { params: { categoryNo: string } }) {
  const categoryNo = Number(params.categoryNo);

  return (
    <ItemByCategoryContainer
      categoryNo={categoryNo}
    />
  );
}