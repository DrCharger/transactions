import { UserActionTypes } from "./transactions.actions";
import { TransactionsState, ALLActions } from "../types/transactionTypes";

const initialState: TransactionsState = {
  user: {
    fullname: "",
    password: "",
  },
  allTransactions: [],
  data: [],
  filter: {
    status: "",
    type: "",
  },
};

const usersReducer = (
  state = initialState,
  action: ALLActions
): TransactionsState => {
  switch (action.type) {
    case UserActionTypes.USERS_LOGGED:
      return {
        ...state,
        user: action.payload.user,
      };
    case UserActionTypes.TRANSACTIONS_LIST_RECEIVED:
      return {
        ...state,
        allTransactions: action.payload.list,
        data: action.payload.list,
      };
    case UserActionTypes.TRANSACTIONS_LIST_AFTER_ACTIONS:
      return {
        ...state,
        data: action.payload.list,
      };
    case UserActionTypes.TRANSACTIONS_FILTER_PROPS_STATUS:
      return {
        ...state,
        filter: { ...state.filter, status: action.payload.status },
      };
    case UserActionTypes.TRANSACTIONS_FILTER_PROPS_TYPE:
      return {
        ...state,
        filter: { ...state.filter, type: action.payload.type },
      };
    default:
      return state;
  }
};

export default usersReducer;
