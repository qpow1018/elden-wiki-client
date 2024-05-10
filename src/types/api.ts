type AppError = {
  httpResponseCode: number | null;
  code: number | string | null;
  message: string;
  detailMessage?: string;
  name?: string;
}

export type {
  AppError,
}