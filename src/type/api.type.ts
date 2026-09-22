export interface ApiSuccess<T> {
  success: true;
  data: T;
  message?: string;
}
export interface ApiError {
  success: false;
  message?: string;
  error: Record<string, string[]>;
}
export interface ApiPaginated<T> {
  success: true;
  data: T;
  message?: string;
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
export type ApiResponse<T> = ApiSuccess<T> | ApiError | ApiPaginated<T>;
