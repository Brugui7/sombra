export interface JsonApiResponse<T> {
  success: boolean,
  message: string,
  data: T
}
