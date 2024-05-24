import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import employeeSlice from "./../reducer/employeeReducer";
 
// redux persist for state management even after page reload. Ref: https://www.npmjs.com/package/redux-persist
const persistConfig = {
  key: "root",
  storage,
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
