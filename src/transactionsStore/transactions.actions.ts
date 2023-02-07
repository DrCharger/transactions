import { TransactionData, User } from "../types/transactionTypes";

export enum UserActionTypes {
  USERS_LOGGED = "USERS_LOGGED",
  TRANSACTIONS_LIST_RECEIVED = "TRANSACTIONS_LIST_RECEIVED",
  TRANSACTIONS_FILTER_PROPS_STATUS = "TRANSACTIONS_FILTER_PROPS_STATUS",
  TRANSACTIONS_FILTER_PROPS_TYPE = "TRANSACTIONS_FILTER_PROPS_TYPE",
  TRANSACTIONS_LIST_AFTER_ACTIONS = "TRANSACTIONS_LIST_AFTER_ACTIONS",
}

export const usersLogged = (user: User) => {
  return {
    type: UserActionTypes.USERS_LOGGED,
    payload: {
      user,
    },
  };
};

export const transactionListRecieved = (list: TransactionData[]) => {
  return {
    type: UserActionTypes.TRANSACTIONS_LIST_RECEIVED,
    payload: {
      list,
    },
  };
};
export const transactionListAfterActions = (list: TransactionData[]) => {
  return {
    type: UserActionTypes.TRANSACTIONS_LIST_AFTER_ACTIONS,
    payload: {
      list,
    },
  };
};

export const transactionFilterStatus = (status: string) => {
  return {
    type: UserActionTypes.TRANSACTIONS_FILTER_PROPS_STATUS,
    payload: {
      status,
    },
  };
};

export const transactionFilterType = (type: string) => {
  return {
    type: UserActionTypes.TRANSACTIONS_FILTER_PROPS_TYPE,
    payload: {
      type,
    },
  };
};
