type AppError = {
  httpResponseCode: number | null;
  code: number | string | null;
  message: string;
  detailMessage?: string;
  name?: string;
}

type ResItemMainCategory = {
  id: number;
  categoryNo: number;
  value: string;
  name: string;
  subCategories: ResItemSubCategory[];
}

type ResItemSubCategory = {
  id: number;
  categoryNo: number;
  subCategoryNo: number;
  value: string;
  name: string;
}

export type {
  AppError,
  ResItemMainCategory,
  ResItemSubCategory,
}