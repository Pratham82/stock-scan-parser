export interface StockScan {
  id: number;
  name: string;
  tag: string;
  color: string;
  criteria?: Criteria[] | null;
}
export interface Criteria {
  type: string;
  text: string;
  variable: Variable;
}
export interface Variable {
  $1: 1;
  $2: 2;
  $3: 3;
  $4: 4;
}

export interface StockData {
  RootArray?: StockScan[] | null;
}
