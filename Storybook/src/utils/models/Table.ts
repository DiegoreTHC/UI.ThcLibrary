export interface TableField<T> {
  key: keyof T;
  label: string;
  sortable?: boolean;
  columnWidth?: string;
}
