export type Container = {
  justify?: string;
  align?: string;
};

export type PaginItem = {
  active?: boolean;
};

export type Transaction = {
  id: string;
  status: string;
  type: string;
  name: string;
  amount: string;
};

export type AbsoluteType = {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
};
