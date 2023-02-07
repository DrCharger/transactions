import { FilterProps, TransactionData, User } from "./transactionTypes";
import { Transaction } from "./stylesTypes";

export type CSVworkerPropTypes = {
  getFullList: (data: TransactionData[]) => any;
  changedData: TransactionData[];
};

export type ModalPropTypes = {
  sureImport?: any;
  data?: TransactionData[];
  type?: string;
};

export type NavBarPropTypes = {
  getFullList: (data: TransactionData[]) => void;
  filterStatus: (data: string) => void;
  filterType: (data: string) => void;
  changedData: TransactionData[];
};

export type PaginationPropTypes = {
  count: number;
  page: number;
  onChange: (value: number) => void;
};

export type PopOverPropTypes = {
  type?: boolean;
  getFullList: (data: TransactionData[]) => void;
  allTransactions: TransactionData[];
  id: string;
  prevStatus?: string;
};

export type TableRowPropTypes = {
  item: Transaction;
};

export type TableProps = {
  currentItem: Transaction[];
  count: number;
  page: number;
  length: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

export type LoginPropTypes = {
  logged: (user: User) => void;
};

export type TransactionsPropTypes = {
  user: User;
  allTransactions: TransactionData[];
  changedData: TransactionData[];
  getFullList: (data: TransactionData[]) => void;
  filterStatus: (data: string) => void;
  filterType: (data: string) => void;
  filter: FilterProps;
  getFilteredList: (data: TransactionData[]) => void;
};
