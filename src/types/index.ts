type TypeItemIndexContents = {
  categoryId: number;
  categoryName: string;
  subContents: {
    itemId: number;
    itemName: string;
  }[];
}

export type {
  TypeItemIndexContents,
}