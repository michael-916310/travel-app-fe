import { configureStore } from '@reduxjs/toolkit';

import langReducer from './langSlice';
import countryList from './countryListSlice';
import countryInfo from './countrySlice';

const store = configureStore({
  reducer: {
    lang: langReducer,
    countryList,
    countryInfo,
  },
});


export default store;

export type TRootState = ReturnType<typeof store.getState>
export type TAppDispatch = typeof store.dispatch

