export interface LogResponse {
  created_at: string;
  data: string;
  element_id: number;
  id: number;
  updated_at: string;
}


export interface Log {
  datetime: number;
  sensor_code: string;
  sensor_type: string;
  value: number;
}
