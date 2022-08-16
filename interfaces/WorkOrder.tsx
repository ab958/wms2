export interface WorkOrder {
  id: number;
  created_at?: Date;
  brand_entry?: number;
  work_task_id?: number;
  minutes_taken?: number;
  name?: string;
  number?: any;
  final_price?: number;
  target_time?: number;
  initial_cost?: number;
  description?: string;
  initial_comments?: string;
  final_comments?: string;
  final_units_or_quantity?: number;
  initial_units_or_quantity?: number;
  email?: string;
  tracker_status?: number;
  tracking_id?: number | null;
  decline_reason?: string;
  start_time?: Date;
  time_accepted?: Date; //date accepted
  finish_time?: Date;
  expected_finish_date?: Date;
  qc_pics?: string[];
}
