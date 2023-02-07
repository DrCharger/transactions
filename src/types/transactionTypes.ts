import { UserActionTypes } from "../transactionsStore/transactions.actions";

export type User = {
  fullname: string;
  password: string;
};

export type TransactionData = {
  id: string;
  status: string;
  type: string;
  name: string;
  amount: string;
};

export type FilterProps = {
  status: string;
  type: string;
};

export type Upload = {
  data: string[][];
  errors: Array<string>;
  meta: Array<string>;
};

export interface TransactionsState {
  user: User;
  data: TransactionData[];
  filter: FilterProps;
  allTransactions: TransactionData[];
}

export interface UsersListAction {
  type: UserActionTypes.USERS_LOGGED;
  payload: { user: User };
}

export interface TransactionListAction {
  type: UserActionTypes.TRANSACTIONS_LIST_RECEIVED;
  payload: { list: TransactionData[] };
}
export interface FilterStatusPropsAction {
  type: UserActionTypes.TRANSACTIONS_FILTER_PROPS_STATUS;
  payload: { status: string };
}
export interface FilterTypePropsAction {
  type: UserActionTypes.TRANSACTIONS_FILTER_PROPS_TYPE;
  payload: { type: string };
}

export interface TransactionListAfterAction {
  type: UserActionTypes.TRANSACTIONS_LIST_AFTER_ACTIONS;
  payload: { list: TransactionData[] };
}

export type ALLActions =
  | UsersListAction
  | TransactionListAction
  | FilterStatusPropsAction
  | FilterTypePropsAction
  | TransactionListAfterAction;
