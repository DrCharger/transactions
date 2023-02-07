import { TransactionsState } from "../types/transactionTypes";

export const allTransactionsSelector = (state: {
  transactionList: TransactionsState;
}) => state.transactionList.allTransactions;

export const userSelector = (state: { transactionList: TransactionsState }) =>
  state.transactionList.user;
export const filterSelector = (state: { transactionList: TransactionsState }) =>
  state.transactionList.filter;
export const changerDataSelector = (state: {
  transactionList: TransactionsState;
}) => state.transactionList.data;
