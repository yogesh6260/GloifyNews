import {ENDPOINTS} from '../../../api';
import {api} from '../api';

const stockApi = api.stockApi.injectEndpoints({
  endpoints: builder => ({
    // GET STOCKS DATA
    getStockData: builder.query({
      query: symbol => ({
        url: `${ENDPOINTS.GET_STOCK_INFO}`,
        method: 'POST',
        body: {stock: symbol},
      }),

      providesTags: ['Stocks'],
    }),
  }),
  overrideExisting: false,
});

export const {useGetStockDataQuery} = stockApi;
