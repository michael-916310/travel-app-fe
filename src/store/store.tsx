import { configureStore } from '@reduxjs/toolkit';

import langReducer from './langSlice';
import countryList from './countryListSlice';

const store = configureStore({
  reducer: {
    lang: langReducer,
    countryList,
  },
});


export default store;

export type TRootState = ReturnType<typeof store.getState>
export type TAppDispatch = typeof store.dispatch

