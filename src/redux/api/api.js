import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_BASE_URL, NEWS_API_KEY} from '@env';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_BASE_URL}`,
    headers: {'X-Api-Key': NEWS_API_KEY, 'Content-Type': 'application/json'},
  }),
  tagTypes: ['Articles'],
  endpoints: () => ({}),
});
