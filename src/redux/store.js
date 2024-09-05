import {configureStore} from '@reduxjs/toolkit';
import persistedReducer from './rootReducer';
import {api} from './api/api';
// import {FLUSH, REHYDRATE, PAUSE, PURGE, REGISTER, PERSIST} from 'redux-persist';

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(api.middleware),
  devTools: {
    maxAge: 100,
  },
});
