import {combineReducers} from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import {persistReducer} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {api} from './api/api';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  [api.newsApi.reducerPath]: api.newsApi.reducer,
  [api.stockApi.reducerPath]: api.stockApi.reducer,
  [api.marketGainersLosersApi.reducerPath]: api.marketGainersLosersApi.reducer,
  [api.youtubeDataApi.reducerPath]: api.youtubeDataApi.reducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
