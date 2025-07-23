export type Metadata = {
  order_by: string;
  sort_by: 'asc' | 'dsc';
  limit: number;
  page: number;
  type: 'OMITS' | 'MISSION';
  total_pages?: number;
};

export type PaginateData<Data> = {
  items: Data;
  pagination: {
    current_page: number;
    per_page: number;
    total_pages: number;
    total_items: number;
    next_page: number;
    prev_page: number;
  };
};

export interface PaginatedApiResponse<DataType> {
  code: number;
  message: string;
  data: PaginateData<DataType>;
}

export type ApiResponse<T> = {
  success: boolean;
  message: string;
  status: boolean;
  code: number;
  data: T;
};

export type ApiError = {
  code: number;
  status: boolean | number;
  message: string;
  error?: string;
};

export type UninterceptedApiError = {
  code: number;
  status: boolean;
  message: string | Record<string, string[]>;
};
