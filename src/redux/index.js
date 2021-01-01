import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { foodSlice } from './foodReducer';

const rootReducer = combineReducers({
  daysFood: foodSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
