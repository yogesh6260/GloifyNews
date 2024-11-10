import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {
  NEWS_API_URL,
  NEWS_API_KEY,
  STOCK_API_URL,
  STOCK_API_KEY,
  MARKET_GAINERS_LOSERS_API_URL,
  YOUTUBE_API_URL,
  YOUTUBE_API_KEY,
} from '@env';

const newsApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${NEWS_API_URL}`,
    headers: {'X-Api-Key': NEWS_API_KEY, 'Content-Type': 'application/json'},
  }),
  tagTypes: ['Articles'],
  endpoints: () => ({}),
});

const stockApi = createApi({
  reducerPath: 'stockApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${STOCK_API_URL}`,
    headers: {
      'X-RapidAPI-Key': STOCK_API_KEY,
      'Content-Type': 'application/json',
    },
  }),
  tagTypes: ['Stocks'],
  endpoints: () => ({}),
});

const marketGainersLosersApi = createApi({
  reducerPath: 'marketGainersLosersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${MARKET_GAINERS_LOSERS_API_URL}`,
    headers: {
      'X-RapidAPI-Key': STOCK_API_KEY,
      'Content-Type': 'application/json',
    },
  }),
  tagTypes: ['Market'],
  endpoints: () => ({}),
});

const youtubeDataApi = createApi({
  reducerPath: 'youtubeDataApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${YOUTUBE_API_URL}`,
    headers: {
      'Content-Type': 'application/json',
    },
  }),
  tagTypes: ['Youtube'],
  endpoints: () => ({}),
});

export const api = {
  newsApi,
  stockApi,
  marketGainersLosersApi,
  youtubeDataApi,
};
