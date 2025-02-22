export declare type QueueObject = {
  id?: number;
  tracking_id?: string;
  tracker_status: number;
  work_order_id?: number;
  created_at?: string;
  description?: string;
  initial_units_or_quantity?: number;
  brand_entry?: string;
  skus?: string[];
  pics?: string[];
  name?: string;
  email?: string;
  phone_number?: string;
  decline_reason?: string;
  start_time?: string;
  finish_date?: Date;
  expected_finish_date?: string;
  qc_pics?: String[];
  [otherOptions: string]: unknown;
}[];
