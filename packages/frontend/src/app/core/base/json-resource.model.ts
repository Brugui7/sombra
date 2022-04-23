export interface JsonPaginatedResource<T> {
  data: T[];
  meta: Meta;
}

export interface Meta {
  current_page: number;
  from: number;
  last_page: number;
  per_page: number;
  to: number;
  total: number;
}