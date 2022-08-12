export interface WorkOrder {
  id: number
  email?: string;
  tracker_status?: number;
  tracking_id?: number | null;
  decline_reason?: string;
  start_time?: Date;
  finish_time?: Date;
  expected_finish_date?: Date;
  qc_pics?: String[];
}
