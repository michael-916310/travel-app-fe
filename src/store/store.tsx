import { configureStore } from '@reduxjs/toolkit';

import langReducer from './langSlice';

const store = configureStore({
  reducer: {
    lang: langReducer,
  },
});


export default store;

export type TRootState = ReturnType<typeof store.getState>
export type TAppDispatch = typeof store.dispatch

