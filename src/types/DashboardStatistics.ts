export interface DashboardStatsResponse {
  by_type: StatEntry[];
  by_sub_type: StatEntry[];
  by_region: StatEntry[];
  verification_status: StatEntry[];
  payment_status: StatEntry[];
  verification_by_sub_type: SubTypeStatusEntry[];
  payment_by_sub_type: SubTypeStatusEntry[];
}

export interface StatEntry {
  key: string;
  count: number;
}

export interface SubTypeStatusEntry {
  sub_type: string;
  key: string;
  count: number;
}
