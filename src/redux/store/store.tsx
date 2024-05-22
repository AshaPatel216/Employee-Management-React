import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import employeeSlice from "./../reducer/employeeReducer";
 
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ['register']
};

const reducer = combineReducers({
  employeeSlice,
});
const persistReducers = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: {
    persistReducers,
  },
});

export default store;
