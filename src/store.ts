import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import usersReducer from "./transactionsStore/transactions.reducer";

const appReducer = combineReducers({
  transactionList: usersReducer,
});

const composeEnhancers = compose;

const store = createStore(appReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
